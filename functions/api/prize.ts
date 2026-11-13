/**
 * Physical-book prizes (7 days in a row reaching the daily goal).
 * GET  /api/prize → { prizes: [{ blockEnd, earnedAt, delivered }] }
 * POST /api/prize → records any prize the learner has earned, checked against the progress saved on the
 *                   server (so nobody can claim one without the study history), and returns the list.
 */
import { currentUser, json, sameOrigin, type Ctx } from '../../server/accounts';
import { prizeBlocks } from '../../src/lib/prize';
import type { DayLog } from '../../src/types';

async function list(ctx: Ctx, userId: number) {
  const r = await ctx.env.DB.prepare('SELECT block_end, earned_at, delivered FROM prizes WHERE user_id = ? ORDER BY block_end')
    .bind(userId).all<{ block_end: string; earned_at: number; delivered: number }>();
  return r.results.map((p) => ({ blockEnd: p.block_end, earnedAt: p.earned_at, delivered: !!p.delivered }));
}

export async function onRequestGet(ctx: Ctx) {
  const user = await currentUser(ctx.request, ctx.env.DB);
  if (!user) return json({ error: 'Sign in first.' }, 401);
  return json({ prizes: await list(ctx, user.id) });
}

export async function onRequestPost(ctx: Ctx) {
  const { request, env } = ctx;
  if (!sameOrigin(request)) return json({ error: 'Not allowed.' }, 403);
  const user = await currentUser(request, env.DB);
  if (!user) return json({ error: 'Sign in first.' }, 401);
  const row = await env.DB.prepare('SELECT data FROM progress WHERE user_id = ?').bind(user.id).first<{ data: string }>();
  let days: Record<string, DayLog> = {};
  try { days = (JSON.parse(row?.data ?? '{}') as { progress?: { days?: Record<string, DayLog> } }).progress?.days ?? {}; } catch { /* no history */ }
  const ends = prizeBlocks(days).slice(-100);
  const now = Date.now();
  if (ends.length) {
    await env.DB.batch(ends.map((e) => env.DB.prepare('INSERT OR IGNORE INTO prizes (user_id, block_end, earned_at, delivered) VALUES (?, ?, ?, 0)').bind(user.id, e, now)));
  }
  return json({ prizes: await list(ctx, user.id) });
}
