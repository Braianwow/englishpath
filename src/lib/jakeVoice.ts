import { SERVER } from './conversation';
import { audioAllowed, sharedAudioContext } from './neuralTts';

/**
 * Jake's human voice: Google's speech model (Gemini TTS) through EnglishPath's server,
 * read in a smooth, flirty, confident tone. If it fails (limit reached, offline…), the caller
 * falls back to the voice on the device.
 */
export const JAKE_VOICES = [
  { id: 'Algieba', desc: 'Smooth' },
  { id: 'Enceladus', desc: 'Breathy, soft' },
  { id: 'Umbriel', desc: 'Easy-going' },
  { id: 'Algenib', desc: 'Gravelly' },
  { id: 'Orus', desc: 'Firm, deep' },
  { id: 'Fenrir', desc: 'Excitable' },
] as const;

const KEY = 'ep.jakeVoice';
const OFF = 'off';
export function getJakeVoice(): string | null {
  try {
    const v = localStorage.getItem(KEY);
    if (v === OFF) return null;
    return JAKE_VOICES.some((x) => x.id === v) ? v : JAKE_VOICES[0].id;
  } catch { return JAKE_VOICES[0].id; }
}
export function setJakeVoice(v: string | null) { try { localStorage.setItem(KEY, v ?? OFF); } catch { /* ignore */ } }

const cache = new Map<string, AudioBuffer>();
let current: AudioBufferSourceNode | null = null;
let token = 0;

export function stopJake() {
  token++;
  try { current?.stop(); } catch { /* already stopped */ }
  for (const s of scheduled) { try { s.stop(); } catch { /* already stopped */ } }
  scheduled = [];
  current = null;
}

async function fetchAudio(text: string, voice: string): Promise<AudioBuffer> {
  const k = `${voice}|${text}`;
  const hit = cache.get(k);
  if (hit) return hit;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), 10000);
  try {
    const res = await fetch(SERVER, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: ctrl.signal,
      body: JSON.stringify({ kind: 'tts', text, voice }),
    });
    const j = await res.json() as { audio?: string; rate?: number; error?: string };
    if (!res.ok || !j.audio) throw new Error(j.error || 'voice not available');
    const bytes = Uint8Array.from(atob(j.audio), (c) => c.charCodeAt(0));
    const ctx = sharedAudioContext();
    let buf: AudioBuffer;
    if (bytes[0] === 0x52 && bytes[1] === 0x49 && bytes[2] === 0x46 && bytes[3] === 0x46) {
      buf = await ctx.decodeAudioData(bytes.buffer.slice(0)); // a WAV file
    } else {
      // raw 16-bit PCM
      const pcm = new Int16Array(bytes.buffer, 0, Math.floor(bytes.length / 2));
      buf = ctx.createBuffer(1, pcm.length, j.rate || 24000);
      const ch = buf.getChannelData(0);
      for (let i = 0; i < pcm.length; i++) ch[i] = pcm[i] / 32768;
    }
    cache.set(k, buf);
    if (cache.size > 30) cache.delete(cache.keys().next().value!);
    return buf;
  } finally { clearTimeout(timer); }
}

/** Splits a reply into sentences (very short ones are joined to the next) to generate them in parallel. */
export function voiceChunks(text: string): string[] {
  const parts = text.replace(/[*_#]/g, '').match(/[^.!?…]+[.!?…]+["'”’)]*\s*|[^.!?…]+$/g)?.map((s) => s.trim()).filter(Boolean) ?? [text];
  const out: string[] = [];
  for (const p of parts) {
    if (out.length && out[out.length - 1].split(/\s+/).length < 3) out[out.length - 1] += ` ${p}`;
    else out.push(p);
  }
  return out.slice(0, 4);
}

let scheduled: AudioBufferSourceNode[] = [];

/**
 * Speaks with Jake's human voice. All sentences are requested at once and played in order,
 * so Jake starts talking as soon as the first (short) sentence is ready.
 * Resolves false if not even the first sentence could be played (so the caller can use another voice).
 */
export async function speakJake(text: string, voice: string, onEnd?: () => void): Promise<boolean> {
  stopJake();
  for (const s of scheduled) { try { s.stop(); } catch { /* ignore */ } }
  scheduled = [];
  const my = token;
  let done = false;
  const finish = () => { if (!done && my === token) { done = true; onEnd?.(); } };
  try {
    if (!(await audioAllowed())) return false;
    const jobs = voiceChunks(text).map((t) => fetchAudio(t, voice));
    jobs.forEach((j) => j.catch(() => {}));
    const ctx = sharedAudioContext();
    let at = 0;
    let last: AudioBufferSourceNode | null = null;
    for (let i = 0; i < jobs.length; i++) {
      let buf: AudioBuffer;
      try { buf = await jobs[i]; } catch { if (i === 0) return false; continue; } // first failed → let the caller use another voice
      if (my !== token) return true; // something else started meanwhile
      const src = ctx.createBufferSource();
      src.buffer = buf;
      src.connect(ctx.destination);
      at = Math.max(at, ctx.currentTime + 0.02);
      src.onended = () => {
        scheduled = scheduled.filter((x) => x !== src);
        if (current === src) current = null;
        if (src === last) finish();
      };
      src.start(at);
      at += buf.duration + 0.05;
      current = src; scheduled.push(src); last = src;
    }
    if (!last) return false;
    setTimeout(finish, Math.max(0, (at - ctx.currentTime) * 1000) + 1500); // safety net
    return true;
  } catch {
    return false;
  }
}
