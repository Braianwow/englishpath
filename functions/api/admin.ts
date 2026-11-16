/**
 * Admin only (emails in the ADMIN_EMAILS variable).
 * GET  /api/admin → { users: [...] } every learner with a summary of their progress
 * POST /api/admin { action: 'deliver', userId, blockEnd, delivered } → marks a book prize as delivered (or not)
 */
import { currentUser, isAdmin, json, sameOrigin, type Ctx } from '../../server/accounts';
import { streak } from '../../src/lib/gamification';
import { prizeBlocks } from '../../src/lib/prize';
import { addDays, todayKey } from '../../src/lib/dates';
import { dayMinutes, totalSecs } from '../../src/lib/studyTime';
import type { DayLog, ProgressState } from '../../src/types';

async function guard(ctx: Ctx) {
  const user = await currentUser(ctx.request, ctx.env.DB);
  if (!user) return { error: json({ error: 'Sign in first.' }, 401) };
  if (!isAdmin(ctx.env, user.email)) return { error: json({ error: 'Not allowed.' }, 403) };
  return { user };
}

type Row = { id: number; email: string; created_at: number; data: string | null; updated_at: number | null };
type Prize = { user_id: number; block_end: string; earned_at: number; delivered: number };

function summary(r: Row, prizes: Prize[]) {
  let p: Partial<ProgressState> = {};
  try { p = (JSON.parse(r.data ?? '{}') as { progress?: Partial<ProgressState> }).progress ?? {}; } catch { /* ignore */ }
  const days: Record<string, DayLog> = p.days ?? {};
  const units = Object.values(p.units ?? {});
  const st = streak({ ...(p as ProgressState), days });
  const dayKeys = Object.keys(days).filter((k) => dayMinutes(days[k]) > 0).sort();
  const today = todayKey();
  // minutes per section over the whole history
  const sections: Record<string, number> = {};
  for (const d of Object.values(days)) for (const [k, v] of Object.entries(d.secs ?? {})) sections[k] = (sections[k] ?? 0) + v;
  return {
    id: r.id,
    email: r.email,
    createdAt: r.created_at,
    savedAt: r.updated_at,
    xp: p.xp ?? 0,
    unitsCompleted: units.filter((u) => u.completed).length,
    unitsStarted: units.filter((u) => (u.step ?? 0) > 0 || u.completed).length,
    mistakes: Object.keys(p.mistakes ?? {}).length,
    cardsLearned: Object.values(p.cards ?? {}).filter((c) => c.learned || (c.reps ?? 0) >= 2).length,
    myWords: Object.keys(p.myWords ?? {}).length,
    readings: Object.keys(p.readings ?? {}).length,
    exams: (p.exams ?? []).length,
    streak: st.current,
    bestStreak: st.best,
    activeDays: dayKeys.length,
    lastDay: dayKeys[dayKeys.length - 1] ?? null,
    totalMinutes: Object.values(days).reduce((a, d) => a + dayMinutes(d), 0),
    sectionMinutes: Object.fromEntries(Object.entries(sections).map(([k, v]) => [k, Math.round(v / 60)])),
    last7: Array.from({ length: 7 }, (_, i) => { const k = addDays(today, i - 6); return { date: k, minutes: dayMinutes(days[k]), secs: totalSecs(days[k]?.secs) }; }),
    prizesEarned: prizeBlocks(days).length,
    prizes: prizes.filter((x) => x.user_id === r.id).map((x) => ({ blockEnd: x.block_end, earnedAt: x.earned_at, delivered: !!x.delivered })),
  };
}

export async function onRequestGet(ctx: Ctx) {
  const g = await guard(ctx);
  if (g.error) return g.error;
  const db = ctx.env.DB;
  const rows = await db.prepare('SELECT u.id AS id, u.email AS email, u.created_at AS created_at, p.data AS data, p.updated_at AS updated_at FROM users u LEFT JOIN progress p ON p.user_id = u.id ORDER BY COALESCE(p.updated_at, u.created_at) DESC').all<Row>();
  const prizes = await db.prepare('SELECT user_id, block_end, earned_at, delivered FROM prizes').all<Prize>();
  return json({ users: rows.results.map((r) => summary(r, prizes.results)) });
}

export async function onRequestPost(ctx: Ctx) {
  if (!sameOrigin(ctx.request)) return json({ error: 'Not allowed.' }, 403);
  const g = await guard(ctx);
  if (g.error) return g.error;
  let body: { action?: string; userId?: unknown; blockEnd?: unknown; delivered?: unknown };
  try { body = await ctx.request.json(); } catch { return json({ error: 'Bad request.' }, 400); }
  if (body.action === 'deliver' && typeof body.userId === 'number' && typeof body.blockEnd === 'string') {
    await ctx.env.DB.prepare('UPDATE prizes SET delivered = ? WHERE user_id = ? AND block_end = ?')
      .bind(body.delivered === false ? 0 : 1, body.userId, body.blockEnd).run();
    return json({ ok: true });
  }
  return json({ error: 'Bad request.' }, 400);
}
