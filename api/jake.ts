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

// Node.js runtime (Vercel's default): process.env holds the project's environment variables.
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

export default async function handler(req: Request): Promise<Response> {
  const headers = cors(req.headers.get('origin'));
  if (req.method === 'OPTIONS') return new Response(null, { status: 204, headers });
  const key = geminiKey();
  if (req.method === 'GET') {
    // diagnosis: only the NAMES of key-like variables, never their values
    const names = new URL(req.url).searchParams.has('diag') ? Object.keys(process.env).filter((k) => /gemini|google|api_?key/i.test(k)) : undefined;
    return json({ ok: !!key, ...(names ? { names } : {}) }, 200, headers);
  }
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405, headers);
  if (!key) return json({ error: 'Jake is not set up on the server yet.' }, 503, headers);

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
  if (limited(ip)) return json({ error: "You're talking a lot! Take a short break and try again in a minute." }, 429, headers);

  let body: { kind?: string; topic?: string; turns?: { role?: string; text?: string }[] };
  try { body = await req.json(); } catch { return json({ error: 'Bad request' }, 400, headers); }
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
    return json({ error: friendly }, 502, headers);
  }
}


// Web-standard handlers for Vercel's Node.js runtime
export const GET = handler;
export const POST = handler;
export const OPTIONS = handler;
