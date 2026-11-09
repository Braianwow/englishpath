import type { Settings } from '../types';

/** Conversation topics chosen by the learner. */
export const TOPICS = [
  { id: 'viajes', emoji: '✈️', label: 'Viajes', desc: 'Destinos, aeropuertos, anécdotas y planes.', brief: 'travel: trips, destinations, airports, travel stories, dream holidays, planning a trip' },
  { id: 'informatica', emoji: '💻', label: 'Informática', desc: 'Tecnología, programación, apps, IA y gadgets.', brief: 'computers and tech: programming, apps, gadgets, the internet, artificial intelligence, gaming setups' },
  { id: 'farandula', emoji: '🎬', label: 'Farándula', desc: 'Famosos, series, música, chismes y redes.', brief: 'showbiz and celebrity gossip: famous people, TV series, music, influencers, social media drama (talk in general terms; never make up specific scandals about real people)' },
  { id: 'argentina', emoji: '🇦🇷', label: 'Argentina', desc: 'Comida, fútbol, costumbres, lugares y cultura.', brief: 'Argentina: food (asado, mate, empanadas), football, customs, places to visit, Argentine culture and how to explain it in English' },
  { id: 'internacional', emoji: '🌍', label: 'Internacional', desc: 'Otros países, culturas y temas del mundo.', brief: 'international topics: other countries and cultures, global issues, living abroad, comparing countries' },
  { id: 'decada', emoji: '📅', label: 'Esta década', desc: 'Cómo cambió el mundo en los años 2020.', brief: 'the 2020s: how life, work, technology and culture have changed during this decade (remote work, AI, social media, the pandemic years, new habits)' },
  { id: 'ahora', emoji: '🔥', label: 'De ahora', desc: 'Lo que está pasando hoy: tendencias y tu vida.', brief: "what's happening right now: current trends, what the student is into lately, their week, recent news THEY bring up (you may not know the latest news, so ask them about it instead of inventing facts)" },
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
Personality: a charming, cocky, flirty-but-respectful "fuckboy" type — confident, playful, teasing, laid-back, uses casual modern English ("no way", "lowkey", "for real", "babe" occasionally) but stays clear and never sexual or rude. You make the student feel like talking.
Topic of this conversation: ${brief}.
Rules:
- This is a SPOKEN conversation: reply in 1–3 short sentences (max ~40 words) and almost always end with a question that keeps the conversation going.
- Use natural B1–B2 English. No lists, no markdown, no emojis (your reply is read aloud).
- Stay on the topic, but follow the student's lead inside it.
- If the student's last message has a grammar or vocabulary mistake, give ONE correction (the most useful). If it was fine, correction is null. Ignore small punctuation/capitalisation issues and speech-recognition glitches.
- Reply ONLY with JSON, no other text:
{"reply": "<what you say>", "translation": "<reply translated to Rioplatense Spanish>", "correction": null | {"said": "<the wrong part>", "better": "<corrected version>", "why": "<very short explanation in Spanish>"}}`;

function parseJson<T>(text: string): T {
  const start = text.indexOf('{'), end = text.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('La IA respondió en un formato inesperado.');
  return JSON.parse(text.slice(start, end + 1)) as T;
}

async function call(settings: Settings, system: string, messages: { role: 'user' | 'assistant'; content: string }[], maxTokens: number): Promise<string> {
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
  if (res.stop_reason === 'refusal') throw new Error('La IA no pudo responder a eso. Probá decirlo de otra forma.');
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
 "summary": "<2-3 sentences in Rioplatense Spanish: how they did>",
 "tip": "<one concrete tip in Spanish for next time>",
 "mistakes": [{"said": "...", "better": "...", "why": "<short, Spanish>"}],   // up to 6, only real mistakes the STUDENT made
 "words": [{"en": "...", "es": "...", "example": "<short English example sentence using it>"}]}   // up to 6 useful words or expressions from the conversation worth learning
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
