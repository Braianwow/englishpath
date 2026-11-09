import { useSyncExternalStore } from 'react';

/** Male English voices of the Kokoro model, with a short description in Spanish. */
export const AI_VOICES = [
  { id: 'am_michael', label: 'Michael', desc: 'Smooth and confident (US)' },
  { id: 'am_puck', label: 'Puck', desc: 'Cheeky and playful (US)' },
  { id: 'am_fenrir', label: 'Fenrir', desc: 'Deep, bad-boy vibe (US)' },
  { id: 'am_onyx', label: 'Onyx', desc: 'Deep and calm (US)' },
  { id: 'am_eric', label: 'Eric', desc: 'Relaxed (US)' },
  { id: 'am_liam', label: 'Liam', desc: 'Young (US)' },
  { id: 'bm_george', label: 'George', desc: 'British, charming' },
  { id: 'bm_fable', label: 'Fable', desc: 'British, storyteller' },
  { id: 'bm_lewis', label: 'Lewis', desc: 'British, deep' },
] as const;
export const DEFAULT_AI_VOICE = 'am_michael';

export type AiStatus = { state: 'idle' | 'loading' | 'ready' | 'error'; progress: number; mb: number; message?: string };

export const aiSupported = () => typeof Worker !== 'undefined' && typeof WebAssembly !== 'undefined' && typeof AudioContext !== 'undefined';

let status: AiStatus = { state: 'idle', progress: 0, mb: 0 };
const listeners = new Set<() => void>();
const setStatus = (s: Partial<AiStatus>) => { status = { ...status, ...s }; listeners.forEach((l) => l()); };
export const getAiStatus = () => status;
export function useAiStatus() {
  return useSyncExternalStore((l) => { listeners.add(l); return () => listeners.delete(l); }, getAiStatus);
}

let worker: Worker | null = null;
let nextId = 1;
const pending = new Map<number, { resolve: (v: { audio: Float32Array; sr: number }) => void; reject: (e: Error) => void }>();

function getWorker(): Worker {
  if (worker) return worker;
  worker = new Worker(new URL('./neuralTts.worker.ts', import.meta.url), { type: 'module' });
  worker.onmessage = (e: MessageEvent) => {
    const m = e.data;
    if (m.type === 'progress') setStatus({ state: 'loading', progress: m.progress, mb: m.mb });
    else if (m.type === 'ready') { setStatus({ state: 'ready', progress: 1 }); try { localStorage.setItem(CACHED_KEY, '1'); } catch { /* ignore */ } }
    else if (m.type === 'failed') setStatus({ state: 'error', message: m.message });
    else if (m.type === 'audio') { pending.get(m.id)?.resolve({ audio: m.audio, sr: m.sr }); pending.delete(m.id); }
    else if (m.type === 'error') { pending.get(m.id)?.reject(new Error(m.message)); pending.delete(m.id); }
  };
  worker.onerror = (e) => setStatus({ state: 'error', message: e.message });
  return worker;
}

const CACHED_KEY = 'ep.aiVoiceCached';
/** True once the model was downloaded on this browser (later loads come from the cache, in seconds). */
export const aiVoiceCached = () => { try { return localStorage.getItem(CACHED_KEY) === '1'; } catch { return false; } };

/** Resolves when the model finishes loading (true) or fails (false). */
export function whenAiReady(): Promise<boolean> {
  if (status.state === 'ready') return Promise.resolve(true);
  if (status.state === 'error') return Promise.resolve(false);
  return new Promise((resolve) => {
    const l = () => { if (status.state === 'ready' || status.state === 'error') { listeners.delete(l); resolve(status.state === 'ready'); } };
    listeners.add(l);
  });
}

/** Starts downloading the model (only once). */
export function loadAiVoice() {
  if (status.state === 'loading' || status.state === 'ready') return;
  setStatus({ state: 'loading', progress: 0, message: undefined });
  getWorker().postMessage({ type: 'load' });
}

// Small cache so repeating a word or sentence is instant.
const cache = new Map<string, { audio: Float32Array; sr: number }>();

function generate(text: string, voice: string, speed: number) {
  const key = `${voice}|${speed.toFixed(2)}|${text}`;
  const hit = cache.get(key);
  if (hit) return Promise.resolve(hit);
  const id = nextId++;
  return new Promise<{ audio: Float32Array; sr: number }>((resolve, reject) => {
    pending.set(id, { resolve, reject });
    getWorker().postMessage({ type: 'speak', id, text, voice, speed });
  }).then((r) => {
    cache.set(key, r);
    if (cache.size > 60) cache.delete(cache.keys().next().value!);
    return r;
  });
}

let ctx: AudioContext | null = null;
let current: AudioBufferSourceNode | null = null;
let token = 0;

export function stopAi() {
  token++;
  try { current?.stop(); } catch { /* already stopped */ }
  current = null;
}

/** Speaks with the AI voice. Resolves false if it could not (so the caller can fall back). */
export async function speakAi(text: string, voice: string, speed: number, onEnd?: () => void): Promise<boolean> {
  stopAi();
  const my = token;
  try {
    ctx ??= new AudioContext();
    if (ctx.state === 'suspended') await ctx.resume();
    const { audio, sr } = await generate(text, voice, speed);
    if (my !== token) return true; // something else started meanwhile
    const buf = ctx.createBuffer(1, audio.length, sr);
    buf.copyToChannel(new Float32Array(audio), 0);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.onended = () => { if (current === src) current = null; onEnd?.(); };
    current = src;
    src.start();
    return true;
  } catch {
    return false;
  }
}
