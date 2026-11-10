/**
 * Jake's prompts and the Google Gemini call, with no browser-only code, so they are shared by the app
 * and by the server function (api/jake.ts) that lets everyone talk to Jake without their own key.
 */

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

export const persona = (brief: string) => `You are Jake, an English conversation partner for a Spanish-speaking (Argentine) student at B1–B2 level.
Personality: a smooth, charming, cocky "fuckboy" type — confident, flirty, teasing, laid-back and funny. You flirt playfully (cheeky compliments, "babe", "trouble", a wink in your words), use casual modern slang ("no way", "lowkey", "for real", "vibes", "that's wild"), tease the student when they're shy and hype them up when they do well. Never explicit, never sexual, never rude. Every reply should feel different: react to the specifics of what they said, share a quick opinion or mini-story of your own, and vary how you start your sentences.
Topic of this conversation: ${brief}.
Rules:
- This is a SPOKEN conversation: reply in 1–3 short sentences (max ~40 words) and almost always end with a question that keeps the conversation going.
- Use natural B1–B2 English. No lists, no markdown, no emojis (your reply is read aloud).
- Stay on the topic, but follow the student's lead inside it.
- If the student's last message has a grammar or vocabulary mistake, give ONE correction (the most useful). If it was fine, correction is null. Ignore small punctuation/capitalisation issues and speech-recognition glitches.
- Reply ONLY with JSON, no other text:
{"reply": "<what you say>", "translation": "<reply translated to Rioplatense Spanish>", "correction": null | {"said": "<the wrong part>", "better": "<corrected version>", "why": "<very short explanation in simple English>"}}`;

export const reportSystem = (label: string) => `You evaluate a Spanish-speaking student's spoken English (B1–B2) from a conversation transcript (topic: ${label}). The student's lines come from speech recognition, so ignore punctuation and obvious recognition glitches.
Reply ONLY with JSON:
{"score": <1-10 overall>, "fluency": <1-10>, "grammar": <1-10>, "vocabulary": <1-10>,
 "summary": "<2-3 sentences in simple English: how they did>",
 "tip": "<one concrete tip in simple English for next time>",
 "mistakes": [{"said": "...", "better": "...", "why": "<short, simple English>"}],   // up to 6, only real mistakes the STUDENT made
 "words": [{"en": "...", "es": "<short meaning in simple English>", "example": "<short English example sentence using it>"}]}   // up to 6 useful words or expressions from the conversation worth learning
Be fair and encouraging, but honest. If the student said very little, score accordingly.`;

export type Msg = { role: 'user' | 'assistant'; content: string };

/** History as the model sees it: the tutor's lines are its own JSON answers. */
export function toMessages(turns: Turn[]): Msg[] {
  const msgs: Msg[] = [{ role: 'user', content: '(The student just joined. Greet them and open the conversation with a question.)' }];
  for (const t of turns) {
    msgs.push(t.role === 'tutor'
      ? { role: 'assistant', content: JSON.stringify({ reply: t.text, translation: t.es ?? '', correction: null }) }
      : { role: 'user', content: t.text });
  }
  return msgs;
}

export const transcript = (turns: Turn[]) => turns.map((t) => `${t.role === 'tutor' ? 'Tutor' : 'Student'}: ${t.text}`).join('\n');

// Google retires models often: the first one is the one Google recommends today, the rest are fallbacks.
// When one is busy (503) or out of free quota (429), the next one usually isn't: lite models are rarely busy.
// Measured: flash-lite answers in ~1 s with good replies, while the big flash models are often busy (503).
const GEMINI_MODELS = ['gemini-flash-lite-latest', 'gemini-3.5-flash-lite', 'gemini-3.8-flash', 'gemini-3.5-flash', 'gemini-3.6-flash', 'gemini-3.7-flash'];

/** Google Gemini (free tier) through its REST API; the key goes in a header, never in the URL. */
export async function callGemini(key: string, system: string, messages: Msg[], maxTokens: number, json = true): Promise<string> {
  const contents = messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] }));
  let lastErr = '';
  const attempts: string[] = [];
  const started = Date.now();
  // As little "thinking" as possible so Jake answers fast: Gemini 3 uses thinkingLevel, 2.5 uses thinkingBudget.
  const thinkingOptions: (Record<string, unknown> | null)[] = [{ thinkingLevel: 'low' }, { thinkingBudget: 0 }, null];
  for (const model of GEMINI_MODELS) {
    for (let t = 0; t < thinkingOptions.length; t++) {
      const thinking = thinkingOptions[t];
      const body = {
        systemInstruction: { parts: [{ text: system }] },
        contents,
        generationConfig: {
          temperature: 1, topP: 0.95, maxOutputTokens: maxTokens,
          ...(json ? { responseMimeType: 'application/json' } : {}),
          ...(thinking ? { thinkingConfig: thinking } : {}),
        },
      };
      // never hang: give up on one attempt after 15 s (and on everything after 22 s)
      const left = 22000 - (Date.now() - started);
      if (left < 2000) throw new Error(`${lastErr || 'Gemini took too long to answer.'} [${attempts.join(' | ')}]`);
      const t0 = Date.now();
      const ctrl = new AbortController();
      const timer = setTimeout(() => ctrl.abort(), Math.min(6000, left));
      let res: Response;
      try {
        res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
          method: 'POST', headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key }, body: JSON.stringify(body), signal: ctrl.signal,
        });
      } catch {
        lastErr = `${model}: took too long to answer`;
        attempts.push(`${model}/${t}: timeout after ${Date.now() - t0} ms`);
        break; // try the next model
      } finally { clearTimeout(timer); }
      attempts.push(`${model}/${t}: ${res.status} in ${Date.now() - t0} ms`);
      if (res.ok) {
        const j = await res.json() as { candidates?: { content?: { parts?: { text?: string }[] } }[] };
        const text = j.candidates?.[0]?.content?.parts?.map((p) => p.text ?? '').join('') ?? '';
        if (text) return text;
        lastErr = 'The AI gave an empty answer. Try saying it another way.';
        break;
      }
      const err = await res.json().catch(() => ({})) as { error?: { message?: string; status?: string } };
      lastErr = `${model}: ${err.error?.message ?? `Gemini error ${res.status}`}`;
      attempts[attempts.length - 1] += ` (${(err.error?.message ?? '').slice(0, 80)})`;
      if (res.status === 400 && /api key|API_KEY/i.test(lastErr)) throw new Error('The Gemini key is not valid. Check it in Settings.');
      if (res.status === 403) throw new Error('The Gemini key is not valid or the API is not enabled. Check it in Settings.');
      if (res.status === 429) { lastErr = 'Gemini free limit reached for now. Wait a minute and try again.'; break; } // try the next model
      if (res.status === 400 && thinking) continue; // this model doesn't accept this thinking setting: try the next one
      break; // 404 (model not available) or other error: try the next model
    }
  }
  throw new Error(`${lastErr || 'Gemini is not available right now.'} [${attempts.join(' | ')}]`);
}

/** Jake for a real-time VOICE conversation (Gemini Live): he hears the student and answers out loud. */
export const livePersona = (brief: string) => `You are Jake, an English conversation partner for a Spanish-speaking (Argentine) student at B1–B2 level, talking by VOICE in real time.
Personality: a smooth, charming, cocky "fuckboy" type — confident, flirty, teasing, laid-back and funny. Flirt playfully (cheeky compliments, "babe", "trouble"), use casual modern slang ("no way", "lowkey", "for real", "vibes"), tease them when they're shy and hype them up when they do well. Speak in a relaxed, low, confident, slightly playful voice. Never explicit, never sexual, never rude.
Topic of this conversation: ${brief}.
Rules:
- Always speak English only, even if the student speaks Spanish (then gently encourage them to try in English).
- Keep each turn short: 1–3 sentences, and usually end with a question that keeps the conversation going.
- React to the specifics of what they said and share quick opinions or mini-stories of your own; follow their lead inside the topic.
- If they make a clear grammar or vocabulary mistake, correct ONE thing casually and briefly inside your answer (e.g. "Quick tip, babe: it's 'I went', not 'I go'.") and keep going. Don't correct tiny slips or pronunciation.
- Start by greeting the student and opening the topic with a question.`;
