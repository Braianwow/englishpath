import type { Settings } from '../types';
import { TOPICS, callGemini, persona, reportSystem, toMessages, transcript, type Correction, type Msg, type Report, type TopicId, type Turn } from './jake';

export { TOPICS, callGemini };
export type { Correction, Report, TopicId, Turn };

function parseJson<T>(text: string): T {
  const start = text.indexOf('{'), end = text.lastIndexOf('}');
  if (start < 0 || end <= start) throw new Error('The AI answered in an unexpected format.');
  return JSON.parse(text.slice(start, end + 1)) as T;
}

/**
 * Which AI the conversation uses: Claude (the learner's paid key), Gemini (the learner's free key),
 * or the shared server (EnglishPath's own Gemini key, for everyone), in that order.
 */
export const conversationAi = (s: Settings, serverOk = false): 'claude' | 'gemini' | 'server' | null =>
  s.aiProvider === 'anthropic' && s.aiKey ? 'claude' : s.geminiKey ? 'gemini' : serverOk ? 'server' : null;

/** The shared server: same origin on Vercel; from GitHub Pages, the Vercel deployment. */
export const SERVER = typeof location !== 'undefined' && location.hostname.endsWith('github.io')
  ? 'https://englishpath-murex.vercel.app/api/jake' : '/api/jake';

let serverCheck: Promise<boolean> | null = null;
/** True when the shared server is online and has a key configured. */
export function serverAvailable(): Promise<boolean> {
  serverCheck ??= fetch(SERVER, { method: 'GET' })
    .then((r) => (r.ok ? r.json() : { ok: false }))
    .then((j: { ok?: boolean }) => !!j.ok)
    .catch(() => false);
  return serverCheck;
}

async function callServer(kind: 'turn' | 'report', topic: TopicId, turns: Turn[]): Promise<string> {
  const res = await fetch(SERVER, {
    method: 'POST', headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ kind, topic, turns: turns.map((t) => ({ role: t.role, text: t.text })) }),
  });
  const j = await res.json().catch(() => ({})) as { text?: string; error?: string };
  if (!res.ok || !j.text) throw new Error(j.error || 'Jake is not available right now. Try again in a minute.');
  return j.text;
}

async function call(settings: Settings, system: string, messages: Msg[], maxTokens: number): Promise<string> {
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

export async function nextTurn(settings: Settings, topic: TopicId, turns: Turn[], viaServer = false): Promise<{ reply: string; translation: string; correction: Correction | null }> {
  const brief = TOPICS.find((t) => t.id === topic)!.brief;
  const text = viaServer ? await callServer('turn', topic, turns) : await call(settings, persona(brief), toMessages(turns), 1200);
  const r = parseJson<{ reply: string; translation?: string; correction?: Correction | null }>(text);
  const c = r.correction && r.correction.better && r.correction.said ? r.correction : null;
  return { reply: String(r.reply ?? '').trim(), translation: String(r.translation ?? ''), correction: c };
}

export async function finalReport(settings: Settings, topic: TopicId, turns: Turn[], viaServer = false): Promise<Report> {
  const label = TOPICS.find((t) => t.id === topic)!.label;
  const text = viaServer ? await callServer('report', topic, turns) : await call(settings, reportSystem(label), [{ role: 'user', content: transcript(turns) }], 2000);
  const r = parseJson<Report>(text);
  const n = (x: unknown) => Math.max(1, Math.min(10, Math.round(Number(x) || 1)));
  return {
    score: n(r.score), fluency: n(r.fluency), grammar: n(r.grammar), vocabulary: n(r.vocabulary),
    summary: String(r.summary ?? ''), tip: String(r.tip ?? ''),
    mistakes: Array.isArray(r.mistakes) ? r.mistakes.filter((m) => m?.said && m?.better).slice(0, 6) : [],
    words: Array.isArray(r.words) ? r.words.filter((w) => w?.en && w?.es).map((w) => ({ en: w.en, es: w.es, example: w.example || w.en })).slice(0, 6) : [],
  };
}
