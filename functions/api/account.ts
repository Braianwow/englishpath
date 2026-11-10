/**
 * GET  /api/account                                   → { user: { email } | null }
 * POST /api/account { action: 'register', email, password } → { user } + session cookie
 * POST /api/account { action: 'login', email, password }    → { user } + session cookie
 * POST /api/account { action: 'logout' }                    → { user: null }
 */
import { currentUser, hashPassword, json, readCookie, sameOrigin, sameText, sessionCookie, sha256, startSession, SESSION_COOKIE, type Ctx } from '../../server/accounts';

const EMAIL = /^[^\s@]{1,64}@[^\s@]{1,190}\.[^\s@]{2,}$/;
const MAX_FAILS = 8; // per email, per 15 minutes
const FAIL_WINDOW = 15 * 60000;

export async function onRequestGet({ request, env }: Ctx) {
  const user = await currentUser(request, env.DB);
  return json({ user: user ? { email: user.email } : null });
}

export async function onRequestPost({ request, env }: Ctx) {
  if (!sameOrigin(request)) return json({ error: 'Not allowed.' }, 403);
  let body: { action?: string; email?: unknown; password?: unknown };
  try { body = await request.json(); } catch { return json({ error: 'Bad request.' }, 400); }
  const db = env.DB;

  if (body.action === 'logout') {
    const token = readCookie(request, SESSION_COOKIE);
    if (token) await db.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await sha256(token)).run();
    return json({ user: null }, 200, { 'Set-Cookie': sessionCookie('', 0) });
  }

  const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : '';
  const password = typeof body.password === 'string' ? body.password : '';
  if (!EMAIL.test(email)) return json({ error: 'Enter a valid email address.' }, 400);
  if (password.length < 8 || password.length > 200) return json({ error: 'The password must have at least 8 characters.' }, 400);

  if (body.action === 'register') {
    const exists = await db.prepare('SELECT id FROM users WHERE email = ?').bind(email).first();
    if (exists) return json({ error: 'There is already an account with that email. Sign in instead.' }, 409);
    const { hash, salt } = await hashPassword(password);
    await db.prepare('INSERT INTO users (email, pass_hash, pass_salt, created_at) VALUES (?, ?, ?, ?)').bind(email, hash, salt, Date.now()).run();
    const user = await db.prepare('SELECT id FROM users WHERE email = ?').bind(email).first<{ id: number }>();
    return json({ user: { email } }, 201, { 'Set-Cookie': await startSession(db, user!.id) });
  }

  if (body.action === 'login') {
    const now = Date.now();
    const fails = await db.prepare('SELECT COUNT(*) AS n FROM login_fails WHERE email = ? AND at > ?').bind(email, now - FAIL_WINDOW).first<{ n: number }>();
    if ((fails?.n ?? 0) >= MAX_FAILS) return json({ error: 'Too many attempts. Wait 15 minutes and try again.' }, 429);
    const user = await db.prepare('SELECT id, pass_hash, pass_salt FROM users WHERE email = ?').bind(email).first<{ id: number; pass_hash: string; pass_salt: string }>();
    // hash even when the email doesn't exist, so timing doesn't reveal which emails have accounts
    const { hash } = await hashPassword(password, user?.pass_salt ?? 'AAAAAAAAAAAAAAAAAAAAAA==');
    if (!user || !sameText(hash, user.pass_hash)) {
      await db.batch([
        db.prepare('DELETE FROM login_fails WHERE at < ?').bind(now - FAIL_WINDOW),
        db.prepare('INSERT INTO login_fails (email, at) VALUES (?, ?)').bind(email, now),
      ]);
      return json({ error: 'Wrong email or password.' }, 401);
    }
    await db.prepare('DELETE FROM login_fails WHERE email = ?').bind(email).run();
    return json({ user: { email } }, 200, { 'Set-Cookie': await startSession(db, user.id) });
  }

  return json({ error: 'Bad request.' }, 400);
}
