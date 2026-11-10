import { useSyncExternalStore } from 'react';
import type { Correction, TopicId, Turn } from './conversation';
import { TOPICS } from './conversation';
import { checkSentence, isSpanish, localTurn } from './freeTutor';

/**
 * Free AI for the conversation with Jake: a small model (Qwen2.5-0.5B) running in the browser
 * with WebGPU (localLlm.worker.ts). Optional: the learner turns it on and it downloads once.
 */
export type LlmStatus = { state: 'off' | 'loading' | 'ready' | 'error'; progress: number; mb: number; message?: string };

const ON_KEY = 'ep.llm';
let status: LlmStatus = { state: 'off', progress: 0, mb: 0 };
const listeners = new Set<() => void>();
const setStatus = (s: Partial<LlmStatus>) => { status = { ...status, ...s }; listeners.forEach((l) => l()); };
export const useLlmStatus = () => useSyncExternalStore((l) => { listeners.add(l); return () => listeners.delete(l); }, () => status);

export async function webGpuAvailable(): Promise<boolean> {
  try {
    const gpu = (navigator as unknown as { gpu?: { requestAdapter(): Promise<unknown> } }).gpu;
    return !!gpu && !!(await gpu.requestAdapter());
  } catch { return false; }
}

export const llmWanted = () => { try { return localStorage.getItem(ON_KEY) === '1'; } catch { return false; } };

let worker: Worker | null = null;
let nextId = 1;
const pending = new Map<number, (r: { text: string; error?: string }) => void>();

function getWorker() {
  if (!worker) {
    worker = new Worker(new URL('./localLlm.worker.ts', import.meta.url), { type: 'module' });
    worker.onmessage = (e: MessageEvent<{ type: string; id?: number; text?: string; error?: string; progress?: number; mb?: number; message?: string }>) => {
      const m = e.data;
      if (m.type === 'progress') setStatus({ state: 'loading', progress: m.progress ?? 0, mb: m.mb ?? 0 });
      else if (m.type === 'ready') setStatus({ state: 'ready', progress: 1 });
      else if (m.type === 'failed') { setStatus({ state: 'error', message: m.message }); worker?.terminate(); worker = null; }
      else if (m.type === 'result' && m.id) { pending.get(m.id)?.({ text: m.text ?? '', error: m.error }); pending.delete(m.id); }
    };
  }
  return worker;
}

/** Turn the free AI on (downloads the model the first time). */
export function startLlm() {
  try { localStorage.setItem(ON_KEY, '1'); } catch { /* ignore */ }
  if (status.state === 'loading' || status.state === 'ready') return;
  setStatus({ state: 'loading', progress: 0, message: undefined });
  getWorker().postMessage({ type: 'load', model: MODEL, dtype: DTYPE });
}

export function stopLlm() {
  try { localStorage.removeItem(ON_KEY); } catch { /* ignore */ }
  worker?.terminate(); worker = null;
  setStatus({ state: 'off', progress: 0 });
}

// Tested in the browser: Qwen2.5-0.5B in "q4" answers sensibly in 1–3 s on a graphics card.
// The 1.5B model ran out of memory, and the "q4f16" format produced nonsense on some graphics cards.
const MODEL = 'onnx-community/Qwen2.5-0.5B-Instruct';
const DTYPE = 'q4';

function chat(messages: { role: 'system' | 'user' | 'assistant'; content: string }[], maxTokens: number): Promise<string> {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, (r) => (r.error ? reject(new Error(r.error)) : resolve(r.text)));
    getWorker().postMessage({ type: 'chat', id, messages, maxTokens, model: MODEL, dtype: DTYPE });
  });
}

// The model only writes Jake's reply; corrections come from the rules (small models correct badly).
const persona = (brief: string) => `You are Jake, a smooth, cocky, flirty and funny English conversation partner chatting with a B1 student about ${brief}. Use casual slang and playful teasing (never rude or sexual). Reply in 1-2 short sentences that react to the details of what the student just said, add your own quick opinion, then ask the student ONE question about the topic. If the student asks you something, answer it briefly first. Always write in English. Only write your reply.`;

/** The reply text, without labels, quotes or extra lines; at most three sentences. */
export function parseReply(raw: string): string {
  const text = raw.replace(/^\s*(REPLY|Jake)\s*:\s*/i, '').replace(/CORRECTION:[^\n]*\n?/gi, '').split(/\n\s*\n/)[0];
  const clean = text.replace(/\s+/g, ' ').replace(/^["“]|["”]$/g, '').trim();
  const sentences = clean.match(/[^.!?]+[.!?]+["”']?|[^.!?]+$/g) ?? [clean];
  return sentences.slice(0, 3).map((x) => x.trim()).join(' ');
}

/** Jake's next line using the in-browser model, with the rule-based correction of the learner's line. */
export async function llmTurn(topic: TopicId, turns: Turn[]): Promise<{ reply: string; correction: Correction | null }> {
  const script = localTurn(topic, turns);
  const last = [...turns].reverse().find((x) => x.role === 'me')?.text ?? '';
  // Spanish or nothing to answer yet: the script handles it (it keeps the chat going in English)
  if (!last || isSpanish(last)) return script;
  const t = TOPICS.find((x) => x.id === topic)!;
  const history = turns.slice(-8).map((x) => (x.role === 'tutor'
    ? { role: 'assistant' as const, content: x.text.replace(/^(Quick tip|Small thing|Just so you know):[^.]*\.\s*/, '') }
    : { role: 'user' as const, content: x.text }));
  const reply = parseReply(await chat([{ role: 'system', content: persona(t.brief) }, ...history], 70));
  if (reply.split(' ').length < 3 || isSpanish(reply)) return script;
  const correction = script.correction ?? checkSentence(last);
  const tip = correction ? `Quick tip: we say “${correction.better}”. ` : '';
  return { reply: tip + reply, correction };
}
