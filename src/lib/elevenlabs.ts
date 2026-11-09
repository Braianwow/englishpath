/**
 * ElevenLabs text-to-speech, called directly from the browser with the learner's own key.
 * Docs: https://elevenlabs.io/docs/api-reference/text-to-speech/convert
 */
const API = 'https://api.elevenlabs.io/v1';

export interface ElevenVoice {
  voice_id: string;
  name: string;
  category?: string;
  preview_url?: string;
  labels?: { gender?: string; accent?: string; age?: string; description?: string; descriptive?: string; use_case?: string };
}

export class ElevenError extends Error {
  constructor(public status: number, message: string) { super(message); }
}

function explain(status: number, body: string): string {
  if (status === 401) return 'The ElevenLabs key is not valid.';
  if (status === 402 || /quota|credits/i.test(body)) return 'Your ElevenLabs account has run out of credits.';
  if (status === 429) return 'ElevenLabs is limiting requests. Wait a moment.';
  return `ElevenLabs returned an error (${status}).`;
}

export async function listVoices(key: string): Promise<ElevenVoice[]> {
  const r = await fetch(`${API}/voices`, { headers: { 'xi-api-key': key } });
  if (!r.ok) throw new ElevenError(r.status, explain(r.status, await r.text()));
  const data = (await r.json()) as { voices: ElevenVoice[] };
  // Male voices first, then the rest
  return data.voices.sort((a, b) => Number(b.labels?.gender === 'male') - Number(a.labels?.gender === 'male') || a.name.localeCompare(b.name));
}

const cache = new Map<string, string>(); // key → object URL
let audio: HTMLAudioElement | null = null;
let token = 0;

export function stopEleven() {
  token++;
  if (audio) { audio.pause(); audio.onended = null; audio = null; }
}

export async function synthesize(text: string, key: string, voiceId: string, model: string, speed: number): Promise<string> {
  const k = `${voiceId}|${model}|${speed.toFixed(2)}|${text}`;
  const hit = cache.get(k);
  if (hit) return hit;
  const r = await fetch(`${API}/text-to-speech/${encodeURIComponent(voiceId)}?output_format=mp3_44100_128`, {
    method: 'POST',
    headers: { 'xi-api-key': key, 'Content-Type': 'application/json', Accept: 'audio/mpeg' },
    body: JSON.stringify({
      text,
      model_id: model,
      // a bit less stable + more style = more expressive, relaxed delivery
      voice_settings: { stability: 0.38, similarity_boost: 0.8, style: 0.4, use_speaker_boost: true, speed: Math.min(1.2, Math.max(0.7, speed)) },
    }),
  });
  if (!r.ok) throw new ElevenError(r.status, explain(r.status, await r.text()));
  const url = URL.createObjectURL(await r.blob());
  cache.set(k, url);
  if (cache.size > 80) { const first = cache.keys().next().value!; URL.revokeObjectURL(cache.get(first)!); cache.delete(first); }
  return url;
}

/** Plays the text. Rejects with ElevenError so the caller can fall back and show why. */
export async function speakEleven(text: string, key: string, voiceId: string, model: string, speed: number, onEnd?: () => void): Promise<void> {
  stopEleven();
  const my = token;
  const url = await synthesize(text, key, voiceId, model, speed);
  if (my !== token) return;
  const a = new Audio(url);
  audio = a;
  a.onended = () => { if (audio === a) audio = null; onEnd?.(); };
  await a.play();
}
