import type { Settings } from '../types';

/** Conversation topics chosen by the learner. */
export const TOPICS = [
  { id: 'viajes', emoji: '✈️', label: 'Travel', desc: 'Destinations, airports, stories and plans.', brief: 'travel: trips, destinations, airports, travel stories, dream holidays, planning a trip' },
  { id: 'informatica', emoji: '💻', label: 'Tech', desc: 'Technology, programming, apps, AI and gadgets.', brief: 'computers and tech: programming, apps, gadgets, the internet, artificial intelligence, gaming setups' },
  { id: 'farandula', emoji: '🎬', label: 'Showbiz', desc: 'Celebrities, series, music, gossip and social media.', brief: 'showbiz and celebrity gossip: famous people, TV series, music, influencers, social media drama (talk in general terms; never make up specific scandals about real people)' },
  { id: 'argentina', emoji: '🇦🇷', label: 'Argentina', desc: 'Food, football, customs, places and culture.', brief: 'Argentina: food (asado, mate, empanadas), football, customs, places to visit, Argentine culture and how to explain it in English' },
  { id: 'internacional', emoji: '🌍', label: 'International', desc: 'Other countries, cultures and world topics.', brief: 'international topics: other countries and cultures, global issues, living abroad, comparing countries' },
  { id: 'decada', emoji: '📅', label: 'This decade', desc: 'How the world has changed in the 2020s.', brief: 'the 2020s: how life, work, technology and culture have changed during this decade (remote work, AI, social media, the pandemic years, new habits)' },
  { id: 'ahora', emoji: '🔥', label: 'Right now', desc: "What's happening today: trends and your life.", brief: "what's happening right now: current trends, what the student is into lately, their week, recent news THEY bring up (you may not know the latest news, so ask them about it instead of inventing facts)" },
] as const;
export type TopicId = (typeof TOPICS)[number]['id'];

export interface Correction { said: string; better: string; why: string }
export interface Turn { role: 'tutor' | 'me'; text: string; es?: string; correction?: Correction | null }
export interface Report {
  score: number; fluency: number; grammar: number; vocabulary: number;
  summary: string; tip: string;
  mistakes: Correction[]; words: { en: string; es: string; example: string }[];
}

const persona = (brief: string) => `You are Jake, an English conversation partner for a Spanish-speaking (Argentine) student at B1–B2 level.
Personality: a smooth, charming, cocky "fuckboy" type — confident, flirty, teasing, laid-back and funny. You flirt playfully (cheeky compliments, "babe", "trouble", a wink in your words), use casual modern slang ("no way", "lowkey", "for real", "vibes", "that's wild"), tease the student when they're shy and hype them up when they do well. Never explicit, never sexual, never rude. Every reply should feel different: react to the specifics of what they said, share a quick opinion or mini-story of your own, and vary how you start your sentences.
Topic of this conversation: ${brief}.
Rules:
- This is a SPOKEN conversation: reply in 1–3 short sentences (max ~40 words) and almost always end with a question that keeps the conversation going.
- Use natural B1–B2 English. No lists, no markdown, no emojis (your reply is read aloud).
- Stay on the topic, but follow the student's lead inside it.
- If the student's last message has a grammar or vocabulary mistake, give ONE correction (the most useful). If it was fine, correction is null. Ignore small punctuation/capitalisation issues and speech-recognition glitches.
- Reply ONLY with JSON, no other text:
{"reply": "<what you say>", "translation": "<reply translated to Rioplatense Spanish>", "correction": null | {"said": "<the wrong part>", "better": "<corrected version>", "why": "<very short explanation in simple English>"}}`;

function parseJson<T>(text: string): T {
  const start = text.indexOf('{'), end = text.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('The AI answered in an unexpected format.');
  return JSON.parse(text.slice(start, end + 1)) as T;
}

/** Which AI the conversation uses: Claude (paid key) first, then Google Gemini (free key). */
export const conversationAi = (s: Settings): 'claude' | 'gemini' | null =>
  s.aiProvider === 'anthropic' && s.aiKey ? 'claude' : s.geminiKey ? 'gemini' : null;

const GEMINI_MODELS = ['gemini-flash-latest', 'gemini-2.5-flash', 'gemini-2.0-flash'];

/** Google Gemini (free tier) through its REST API; the key goes in a header, never in the URL. */
export async function callGemini(key: string, system: string, messages: { role: 'user' | 'assistant'; content: string }[], maxTokens: number, json = true): Promise<string> {
  const contents = messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }));
  let lastErr = '';
  for (const model of GEMINI_MODELS) {
    for (const thinking of [true, false]) {
      const body = {
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: {
          temperature: 1, topP: 0.95, maxOutputTokens: maxTokens,
          ...(json ? { responseMimeType: 'application/json' } : {}),
          ...(thinking ? { thinkingConfig: { thinkingBudget: 0 } } : {}),
        },
      };
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key }, body: JSON.stringify(body),
      });
      if (res.ok) {
        const j = await res.json() as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
        const text = j.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';
        if (text) return text;
        lastErr = 'The AI gave an empty answer. Try saying it another way.';
        break;
      }
      const err = await res.json().catch(() => ({})) as { error?: { message?: string; status?: string } };
      lastErr = err.error?.message ?? `Gemini error ${res.status}`;
      if (res.status === 400 && /api key|API_KEY/i.test(lastErr)) throw new Error('The Gemini key is not valid. Check it in Settings.');
      if (res.status === 403) throw new Error('The Gemini key is not valid or the API is not enabled. Check it in Settings.');
      if (res.status === 429) throw new Error('Gemini free limit reached for now. Wait a minute and try again.');
      if (res.status === 400 && thinking) continue; // this model doesn't accept the thinking setting: try without it
      break; // 404 (model not available) or other error: try the next model
    }
  }
  throw new Error(lastErr || 'Gemini is not available right now.');
}

async function call(settings: Settings, system: string, messages: { role: 'user' | 'assistant'; content: string }[], maxTokens: number): Promise<string> {
  if (conversationAi(settings) === 'gemini') return callGemini(settings.geminiKey!, system, messages, maxTokens);
  const { default: Anthropic } = await import('@anthropic-ai/sdk');
  const client = new Anthropic({ apiKey: settings.aiKey, dangerouslyAllowBrowser: true });
  const res = await client.beta.messages.create({
    model: settings.aiModel || 'claude-opus-5-5',
    max_tokens: maxTokens,
    system,
    output_config: { effort: 'low' },
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    messages,
  });
  if (res.stop_reason === 'refusal') throw new Error("The AI couldn't answer that. Try saying it another way.");
  return res.content.map((b) => (b.type === 'text' ? b.text : '')).join('');
}

/** History as the model sees it: the tutor's lines are its own JSON answers. */
function toMessages(turns: Turn[]) {
  const msgs: { role: 'user' | 'assistant'; content: string }[] = [{ role: 'user', content: '(The student just joined. Greet them and open the conversation with a question.)' }];
  for (const t of turns) {
    msgs.push(t.role === 'tutor'
      ? { role: 'assistant', content: JSON.stringify({ reply: t.text, translation: t.es ?? '', correction: null }) }
      : { role: 'user', content: t.text });
  }
  return msgs;
}

export async function nextTurn(settings: Settings, topic: TopicId, turns: Turn[]): Promise<{ reply: string; translation: string; correction: Correction | null }> {
  const brief = TOPICS.find((t) => t.id === topic)!.brief;
  const text = await call(settings, persona(brief), toMessages(turns), 1200);
  const r = parseJson<{ reply: string; translation?: string; correction?: Correction | null }>(text);
  const c = r.correction && r.correction.better && r.correction.said ? r.correction : null;
  return { reply: String(r.reply ?? '').trim(), translation: String(r.translation ?? ''), correction: c };
}

export async function finalReport(settings: Settings, topic: TopicId, turns: Turn[]): Promise<Report> {
  const label = TOPICS.find((t) => t.id === topic)!.label;
  const transcript = turns.map((t) => `${t.role === 'tutor' ? 'Tutor' : 'Student'}: ${t.text}`).join('\n');
  const system = `You evaluate a Spanish-speaking student's spoken English (B1–B2) from a conversation transcript (topic: ${label}). The student's lines come from speech recognition, so ignore punctuation and obvious recognition glitches.
Reply ONLY with JSON:
{"score": <1-10 overall>, "fluency": <1-10>, "grammar": <1-10>, "vocabulary": <1-10>,
 "summary": "<2-3 sentences in simple English: how they did>",
 "tip": "<one concrete tip in simple English for next time>",
 "mistakes": [{"said": "...", "better": "...", "why": "<short, simple English>"}],   // up to 6, only real mistakes the STUDENT made
 "words": [{"en": "...", "es": "<short meaning in simple English>", "example": "<short English example sentence using it>"}]}   // up to 6 useful words or expressions from the conversation worth learning
Be fair and encouraging, but honest. If the student said very little, score accordingly.`;
  const text = await call(settings, system, [{ role: 'user', content: transcript }], 2000);
  const r = parseJson<Report>(text);
  const n = (x: unknown) => Math.max(1, Math.min(10, Math.round(Number(x) || 1)));
  return {
    score: n(r.score), fluency: n(r.fluency), grammar: n(r.grammar), vocabulary: n(r.vocabulary),
    summary: String(r.summary ?? ''), tip: String(r.tip ?? ''),
    mistakes: Array.isArray(r.mistakes) ? r.mistakes.filter((m) => m?.said && m?.better).slice(0, 6) : [],
    words: Array.isArray(r.words) ? r.words.filter((w) => w?.en && w?.es).map((w) => ({ en: w.en, es: w.es, example: w.example || w.en })).slice(0, 6) : [],
  };
}
