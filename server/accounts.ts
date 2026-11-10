/**
 * Shared helpers for EnglishPath's account API (Cloudflare Pages Functions + D1).
 * Minimal local types so no extra packages are needed.
 */
export interface D1Result<T> { results: T[] }
export interface D1Stmt {
  bind(...v: unknown[]): D1Stmt;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<D1Result<T>>;
  run(): Promise<unknown>;
}
export interface D1Database { prepare(sql: string): D1Stmt; batch(s: D1Stmt[]): Promise<unknown> }
export interface Env { DB: D1Database }
export interface Ctx { request: Request; env: Env }

export const SESSION_COOKIE = 'ep_session';
export const SESSION_DAYS = 60;

export const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', ...headers } });

const b64 = (buf: ArrayBuffer | Uint8Array) => btoa(String.fromCharCode(...new Uint8Array(buf instanceof Uint8Array ? buf : new Uint8Array(buf))));
const fromB64 = (s: string) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));

export async function sha256(text: string): Promise<string> {
  return b64(await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text)));
}

// Cloudflare Workers allow at most 100,000 PBKDF2 iterations.
const ITERATIONS = 100000;
export async function hashPassword(password: string, saltB64?: string): Promise<{ hash: string; salt: string }> {
  const salt = saltB64 ? fromB64(saltB64) : crypto.getRandomValues(new Uint8Array(16));
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(password), 'PBKDF2', false, ['deriveBits']);
  const bits = await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITERATIONS }, key, 256);
  return { hash: b64(bits), salt: b64(salt) };
}

/** Constant-time comparison, so response timing doesn't reveal how much of a hash matched. */
export function sameText(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let d = 0;
  for (let i = 0; i < a.length; i++) d |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return d === 0;
}

export function readCookie(req: Request, name: string): string | null {
  const c = req.headers.get('cookie') ?? '';
  for (const part of c.split(';')) {
    const [k, ...v] = part.trim().split('=');
    if (k === name) return decodeURIComponent(v.join('='));
  }
  return null;
}

export function sessionCookie(token: string, maxAge: number): string {
  return `${SESSION_COOKIE}=${token}; Path=/; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;
}

/** Creates a session for the user and returns the Set-Cookie header value. */
export async function startSession(db: D1Database, userId: number): Promise<string> {
  const token = b64(crypto.getRandomValues(new Uint8Array(32))).replace(/[+/=]/g, (c) => ({ '+': '-', '/': '_', '=': '' }[c]!));
  const now = Date.now();
  await db.batch([
    db.prepare('DELETE FROM sessions WHERE expires_at < ?').bind(now),
    db.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)').bind(await sha256(token), userId, now + SESSION_DAYS * 86400000),
  ]);
  return sessionCookie(token, SESSION_DAYS * 86400);
}

/** The signed-in user for this request, or null. */
export async function currentUser(req: Request, db: D1Database): Promise<{ id: number; email: string } | null> {
  const token = readCookie(req, SESSION_COOKIE);
  if (!token || token.length > 100) return null;
  return db.prepare('SELECT u.id AS id, u.email AS email FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ?')
    .bind(await sha256(token), Date.now()).first<{ id: number; email: string }>();
}

/** Only accept writes from the site itself (blocks other websites from posting with the visitor's cookie). */
export function sameOrigin(req: Request): boolean {
  const origin = req.headers.get('origin');
  return !origin || origin === new URL(req.url).origin;
}
