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

/** Resolves when the model finishes loading (true), fails, or takes longer than `maxMs` (false). */
export function whenAiReady(maxMs = 0): Promise<boolean> {
  if (status.state === 'ready') return Promise.resolve(true);
  if (status.state === 'error') return Promise.resolve(false);
  return new Promise((resolve) => {
    const l = () => { if (status.state === 'ready' || status.state === 'error') { listeners.delete(l); resolve(status.state === 'ready'); } };
    listeners.add(l);
    if (maxMs > 0) setTimeout(() => { listeners.delete(l); resolve(status.state === 'ready'); }, maxMs);
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

let scheduled: AudioBufferSourceNode[] = [];

/**
 * Browsers only allow sound after the user has touched the page. The first tap or key press
 * anywhere unlocks the audio, so later replies (and the greeting after a reload) can play.
 */
/** The shared audio context (created on first use). */
export function sharedAudioContext(): AudioContext {
  ctx ??= new AudioContext();
  return ctx;
}

export function unlockAudio() {
  try {
    ctx ??= new AudioContext();
    if (ctx.state !== 'running') ctx.resume().catch(() => {});
  } catch { /* no Web Audio */ }
}
if (typeof window !== 'undefined') {
  const once = () => unlockAudio();
  window.addEventListener('pointerdown', once, { passive: true });
  window.addEventListener('keydown', once);
}

/** True when the page is allowed to play sound right now. */
export async function audioAllowed(): Promise<boolean> {
  try {
    ctx ??= new AudioContext();
    if (ctx.state === 'running') return true;
    await Promise.race([ctx.resume(), new Promise((r) => setTimeout(r, 300))]);
    return (ctx.state as string) === 'running';
  } catch { return false; }
}

export function stopAi() {
  token++;
  for (const s of [...scheduled, ...(current ? [current] : [])]) { try { s.stop(); } catch { /* already stopped */ } }
  scheduled = [];
  current = null;
}

/** Splits a reply into sentences so the first one can start playing while the rest is generated. */
function sentences(text: string): string[] {
  const parts = text.match(/[^.!?…]+[.!?…]+["'”’)]*\s*|[^.!?…]+$/g)?.map((s) => s.trim()).filter(Boolean) ?? [text];
  // join very short pieces ("Nice." / "Why?") to the next one so the voice doesn't sound choppy
  const out: string[] = [];
  for (const p of parts) {
    if (out.length && out[out.length - 1].split(' ').length < 4) out[out.length - 1] += ` ${p}`;
    else out.push(p);
  }
  return out;
}

const withTimeout = <T,>(p: Promise<T>, ms: number) =>
  Promise.race([p, new Promise<T>((_, rej) => setTimeout(() => rej(new Error('timeout')), ms))]);

/**
 * Speaks with the AI voice. Long replies are generated sentence by sentence: the first sentence
 * starts playing as soon as it is ready while the next ones are generated in the background.
 * A sentence that fails is skipped; `onEnd` is always called exactly once.
 * Resolves false if nothing could be played (so the caller can fall back to another voice).
 */
export async function speakAi(text: string, voice: string, speed: number, onEnd?: () => void): Promise<boolean> {
  stopAi();
  const my = token;
  let ended = false;
  const finish = () => { if (!ended && my === token) { ended = true; onEnd?.(); } };
  try {
    if (!(await audioAllowed())) return false; // sound blocked until the user taps: let the caller fall back
    const c = ctx!;
    const parts = sentences(text);
    const jobs = parts.map((p, i) => withTimeout(generate(p, voice, speed), 10000 + i * 4000)); // queued in order in the worker
    jobs.forEach((j) => j.catch(() => {}));
    let at = 0;
    let lastSrc: AudioBufferSourceNode | null = null;
    for (let i = 0; i < jobs.length; i++) {
      let res: { audio: Float32Array; sr: number };
      try { res = await jobs[i]; } catch { continue; } // skip a sentence that failed
      if (my !== token) return true; // something else started meanwhile
      const buf = c.createBuffer(1, res.audio.length, res.sr);
      buf.copyToChannel(new Float32Array(res.audio), 0);
      const src = c.createBufferSource();
      src.buffer = buf;
      src.connect(c.destination);
      at = Math.max(at, c.currentTime + 0.02);
      src.onended = () => {
        scheduled = scheduled.filter((x) => x !== src);
        if (current === src) current = null;
        if (src === lastSrc) finish();
      };
      current = src;
      scheduled.push(src);
      src.start(at);
      at += buf.duration + 0.12; // small natural pause between sentences
      lastSrc = src;
    }
    if (!lastSrc) return false; // nothing could be generated
    // safety net: if the browser never fires "ended", don't leave the conversation waiting
    const waitMs = Math.max(0, (at - c.currentTime) * 1000) + 1500;
    setTimeout(finish, waitMs);
    return true;
  } catch {
    return false;
  }
}
