import { useSyncExternalStore } from 'react';
import type { Correction, TopicId, Turn } from './conversation';
import { TOPICS } from './conversation';
import { checkSentence } from './freeTutor';

/**
 * Free AI for the conversation with Jake: a small model (Qwen2.5-1.5B) running in the browser
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
  getWorker().postMessage({ type: 'load' });
}

export function stopLlm() {
  try { localStorage.removeItem(ON_KEY); } catch { /* ignore */ }
  worker?.terminate(); worker = null;
  setStatus({ state: 'off', progress: 0 });
}

function chat(messages: { role: 'system' | 'user' | 'assistant'; content: string }[], maxTokens: number): Promise<string> {
  const id = nextId++;
  return new Promise((resolve, reject) => {
    pending.set(id, (r) => (r.error ? reject(new Error(r.error)) : resolve(r.text)));
    getWorker().postMessage({ type: 'chat', id, messages, maxTokens });
  });
}

const persona = (brief: string) => `You are Jake, a friendly, playful and confident English conversation partner (casual modern English, never rude) talking with a B1 student. Topic: ${brief}.
The student's last message may contain grammar mistakes. Answer in this exact format and nothing else:
CORRECTION: <the student's last message rewritten with correct grammar, or NONE if it is already correct>
REPLY: <1-2 short, natural sentences reacting to what the student said, then ONE question that keeps the conversation going on the topic>`;

/** Similar enough to be a correction (not a rewrite of a different sentence). */
function closeEnough(a: string, b: string) {
  const A = a.toLowerCase().match(/[a-z']+/g) ?? [], B = b.toLowerCase().match(/[a-z']+/g) ?? [];
  if (!A.length || !B.length) return false;
  const setB = new Set(B);
  const shared = A.filter((w) => setB.has(w)).length;
  return shared / Math.max(A.length, B.length) >= 0.6 && A.join(' ') !== B.join(' ');
}

/** Jake's next line using the in-browser model. Rule-based corrections are kept, they are reliable. */
export async function llmTurn(topic: TopicId, turns: Turn[]): Promise<{ reply: string; correction: Correction | null }> {
  const t = TOPICS.find((x) => x.id === topic)!;
  const history = turns.slice(-8).map((x) => (x.role === 'tutor'
    ? { role: 'assistant' as const, content: `REPLY: ${x.text}` }
    : { role: 'user' as const, content: x.text }));
  if (!history.length || history[0].role === 'assistant') history.unshift({ role: 'user', content: '(The student joins the chat.)' });
  const raw = await chat([{ role: 'system', content: persona(t.brief) }, ...history], 110);
  const reply = (raw.match(/REPLY:\s*([\s\S]+)/i)?.[1] ?? raw.replace(/CORRECTION:.*$/im, '')).replace(/\s+/g, ' ').trim();
  const last = [...turns].reverse().find((x) => x.role === 'me')?.text ?? '';
  let correction = last ? checkSentence(last) : null;
  if (!correction && last) {
    const fixed = raw.match(/CORRECTION:\s*(.+)/i)?.[1]?.trim().replace(/^["“]|["”]$/g, '') ?? '';
    if (fixed && !/^none\.?$/i.test(fixed) && closeEnough(last, fixed)) correction = { said: last, better: fixed, why: 'A more correct way to say it.' };
  }
  return { reply: reply || 'Tell me more!', correction };
}
