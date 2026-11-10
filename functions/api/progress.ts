/**
 * The signed-in learner's saved progress.
 * GET /api/progress           → { data, updatedAt } | { data: null }
 * PUT /api/progress { data }  → { updatedAt }
 */
import { currentUser, json, sameOrigin, type Ctx } from '../../server/accounts';

const MAX_BYTES = 2_000_000;

export async function onRequestGet({ request, env }: Ctx) {
  const user = await currentUser(request, env.DB);
  if (!user) return json({ error: 'Sign in first.' }, 401);
  const row = await env.DB.prepare('SELECT data, updated_at FROM progress WHERE user_id = ?').bind(user.id).first<{ data: string; updated_at: number }>();
  return json(row ? { data: JSON.parse(row.data), updatedAt: row.updated_at } : { data: null });
}

export async function onRequestPut({ request, env }: Ctx) {
  if (!sameOrigin(request)) return json({ error: 'Not allowed.' }, 403);
  const user = await currentUser(request, env.DB);
  if (!user) return json({ error: 'Sign in first.' }, 401);
  const text = await request.text();
  if (text.length > MAX_BYTES) return json({ error: 'Your progress is too large to save.' }, 413);
  let body: { data?: { progress?: { version?: number } } };
  try { body = JSON.parse(text); } catch { return json({ error: 'Bad request.' }, 400); }
  if (!body.data?.progress?.version) return json({ error: 'Bad request.' }, 400);
  const now = Date.now();
  await env.DB.prepare('INSERT INTO progress (user_id, data, updated_at) VALUES (?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET data = excluded.data, updated_at = excluded.updated_at')
    .bind(user.id, JSON.stringify(body.data), now).run();
  return json({ updatedAt: now });
}
