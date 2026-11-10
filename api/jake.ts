/**
 * Jake for everyone: a Vercel function that talks to Google Gemini with EnglishPath's own key.
 * The key lives only in Vercel's environment variable GEMINI_API_KEY — never in the site or the repo.
 * The server builds Jake's instructions itself, so it can only be used to talk to Jake
 * (it is not a general-purpose proxy), and it has generous limits only to stop abuse.
 *
 * GET  /api/jake          → { ok: true } when a key is configured
 * POST /api/jake          → { kind: 'turn' | 'report', topic, turns: [{ role, text }] } → { text }
 */
import { TOPICS, callGemini, persona, reportSystem, toMessages, transcript, type Turn } from '../src/lib/jake';

export const config = { runtime: 'edge' };

// Vercel provides the project's environment variables as process.env.
declare const process: { env: Record<string, string | undefined> };

/** The key, also accepting common variants of the name in case it was saved slightly differently. */
function geminiKey(): string | undefined {
  const env = process.env;
  const name = Object.keys(env).find((k) => k.trim().toUpperCase().replace(/[\s-]+/g, '_') === 'GEMINI_API_KEY');
  return (name ? env[name] : undefined)?.trim() || undefined;
}

const ALLOWED_ORIGINS = [/^https:\/\/englishpath[\w-]*\.vercel\.app$/, /^https:\/\/braianwow\.github\.io$/, /^http:\/\/localhost(:\d+)?$/];

// Generous per-visitor limits (in memory, per server instance): far above normal daily practice.
const PER_MINUTE = 30;
const PER_DAY = 1500;
const hits = new Map<string, { minute: number; m: number; day: string; d: number }>();

function cors(origin: string | null) {
  const ok = origin && ALLOWED_ORIGINS.some((re) => re.test(origin));
  return {
    'Access-Control-Allow-Origin': ok ? origin! : 'https://englishpath-murex.vercel.app',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

const json = (body: unknown, status: number, headers: Record<string, string>) =>
  new Response(JSON.stringify(body), { status, headers: { ...headers, 'Content-Type': 'application/json' } });

function limited(ip: string): boolean {
  const now = Date.now();
  const minute = Math.floor(now / 60000), day = new Date(now).toISOString().slice(0, 10);
  const h = hits.get(ip) ?? { minute, m: 0, day, d: 0 };
  if (h.minute !== minute) { h.minute = minute; h.m = 0; }
  if (h.day !== day) { h.day = day; h.d = 0; }
  h.m++; h.d++;
  hits.set(ip, h);
  if (hits.size > 5000) hits.clear();
  return h.m > PER_MINUTE || h.d > PER_DAY;
}

/** Google's prebuilt male voices that fit Jake (smooth, breathy, easy-going, gravelly…). */
const JAKE_VOICES = ['Algieba', 'Enceladus', 'Umbriel', 'Algenib', 'Fenrir', 'Orus', 'Charon', 'Puck', 'Achird', 'Zubenelgenubi'];
const TTS_MODELS = ['gemini-3.8-flash-tts', 'gemini-2.5-flash-preview-tts', 'gemini-3.1-flash-tts-preview'];

/** Reads `text` in Jake's tone; returns 16-bit PCM audio as base64 plus its sample rate. */
async function geminiSpeech(key: string, text: string, voice: string): Promise<{ audio: string; rate: number; model: string }> {
  // short style cue in Google's documented "Say …:" form, so only the text after the colon is spoken
  const prompt = `Say in a smooth, flirty, confident way: ${text}`;
  let lastErr = '';
  for (const model of TTS_MODELS) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 12000);
    try {
      const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
        method: 'POST', signal: ctrl.signal,
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { responseModalities: ['AUDIO'], speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: voice } } } },
        }),
      });
      const j = await res.json().catch(() => ({})) as { candidates?: { content?: { parts?: { inlineData?: { data?: string; mimeType?: string } }[] } }[]; error?: { message?: string } };
      const part = j.candidates?.[0]?.content?.parts?.find((p) => p.inlineData?.data)?.inlineData;
      if (res.ok && part?.data) {
        const rate = Number(/rate=(\d+)/.exec(part.mimeType ?? '')?.[1] ?? 24000);
        return { audio: part.data, rate, model };
      }
      lastErr = `${model}: ${j.error?.message ?? res.status}`;
    } catch {
      lastErr = `${model}: took too long`;
    } finally { clearTimeout(timer); }
  }
  throw new Error(lastErr);
}

export default async function handler(req: Request): Promise<Response> {
  const headers = cors(req.headers.get('origin'));
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  const key = geminiKey();
  if (req.method === 'GET') {
    // TEMPORARY diagnosis: names of the real-time (Live) models this key can use
    if (key && new URL(req.url).searchParams.has('live')) {
      const r = await fetch('https://generativelanguage.googleapis.com/v1beta/models?pageSize=300', { headers: { 'x-goog-api-key': key } });
      const j = await r.json().catch(() => ({})) as { models?: { name: string; supportedGenerationMethods?: string[] }[] };
      return json({ live: (j.models ?? []).filter((m) => m.supportedGenerationMethods?.some((x) => /bidi/i.test(x))).map((m) => m.name.replace('models/', '')) }, 200, headers);
    }
    return json({ ok: !!key }, 200, headers);
  }
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405, headers);
  if (!key) return json({ error: 'Jake is not set up on the server yet.' }, 503, headers);

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return json({ error: "You're talking a lot! Take a short break and try again in a minute." }, 429, headers);

  let body: { kind?: string; topic?: string; turns?: { role?: string; text?: string }[]; text?: string; voice?: string };
  try { body = await req.json(); } catch { return json({ error: 'Bad request' }, 400, headers); }

  // Jake's voice: Google's speech model reads a short line with one of Jake's voices
  if (body.kind === 'tts') {
    const text = typeof body.text === 'string' ? body.text.trim().slice(0, 400) : '';
    const voice = JAKE_VOICES.includes(body.voice ?? '') ? body.voice! : JAKE_VOICES[0];
    if (!text) return json({ error: 'Bad request' }, 400, headers);
    try {
      const audio = await geminiSpeech(key, text, voice);
      return json(audio, 200, headers);
    } catch (e) {
      return json({ error: 'Voice not available right now.', detail: ((e as Error).message || '').slice(0, 300) }, 502, headers);
    }
  }

  const topic = TOPICS.find((t) => t.id === body.topic);
  if (!topic || (body.kind !== 'turn' && body.kind !== 'report') || !Array.isArray(body.turns)) return json({ error: 'Bad request' }, 400, headers);
  // only the last part of the conversation, with short lines
  const turns: Turn[] = body.turns.slice(-40)
    .filter((t) => (t.role === 'tutor' || t.role === 'me') && typeof t.text === 'string')
    .map((t) => ({ role: t.role as Turn['role'], text: t.text!.slice(0, 800) }));

  try {
    const text = body.kind === 'turn'
      ? await callGemini(key, persona(topic.brief), toMessages(turns.slice(-24)), 1200)
      : await callGemini(key, reportSystem(topic.label), [{ role: 'user', content: transcript(turns) }], 2000);
    return json({ text }, 200, headers);
  } catch (e) {
    const msg = (e as Error).message || '';
    // don't tell visitors to "check the key in Settings": the key here is the server's
    const friendly = /limit/i.test(msg) ? 'Jake is very busy right now. Try again in a minute.' : 'Jake is not available right now. Try again in a minute.';
    // detail = Google's error message (it never contains the key), useful to fix configuration problems
    return json({ error: friendly, detail: msg.slice(0, 900) }, 502, headers);
  }
}


