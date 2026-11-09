import type { GrammarUnit, ProgressState } from '../types';
import { PATH, UNITS, UNIT_BY_ID, unitPool, tagLabel, type KeyedExercise } from '../content';
import { MODULES } from '../content/modules';
import { shuffle } from './grade';
import { isDue } from './srs';
import { VOCAB } from '../content/vocab';

// ───────── exercise pools ─────────
const poolCache = new Map<string, KeyedExercise[]>();
export function poolOf(u: GrammarUnit): KeyedExercise[] {
  if (!poolCache.has(u.id)) poolCache.set(u.id, unitPool(u));
  return poolCache.get(u.id)!;
}

export function exerciseByKey(key: string): KeyedExercise | null {
  const unitId = key.split(':')[0];
  const u = UNIT_BY_ID[unitId];
  if (!u) return null;
  return poolOf(u).find((k) => k.key === key) ?? null;
}

/**
 * Priority score for choosing an exercise: unseen and previously-failed items
 * come first; items answered correctly recently come last. Small random jitter
 * avoids always showing the same sequence.
 */
function priority(k: KeyedExercise, s: ProgressState): number {
  const st = s.exercises[k.key];
  let p = Math.random() * 0.6;
  if (!st) p += 2;
  else {
    if (!st.lastOk) p += 2.5;
    const acc = st.correct / st.seen;
    p += (1 - acc) * 1.5;
    const hours = (Date.now() - st.last) / 3_600_000;
    p += Math.min(1.5, hours / 48);
  }
  if (s.mistakes[k.key]) p += 1.5;
  return p;
}

export function pick(pool: KeyedExercise[], n: number, s: ProgressState): KeyedExercise[] {
  return [...pool].sort((a, b) => priority(b, s) - priority(a, s)).slice(0, n);
}

/** Avoid more than 2 consecutive exercises of the same type. */
function varied(list: KeyedExercise[]): KeyedExercise[] {
  const out: KeyedExercise[] = [];
  const rest = [...list];
  while (rest.length) {
    const lastT = out.slice(-2).map((k) => k.ex.t);
    const idx = rest.findIndex((k) => !(lastT.length === 2 && lastT[0] === k.ex.t && lastT[1] === k.ex.t));
    out.push(rest.splice(idx < 0 ? 0 : idx, 1)[0]);
  }
  return out;
}

export function buildUnitPractice(u: GrammarUnit, level: 'basic' | 'advanced', s: ProgressState): KeyedExercise[] {
  const pool = poolOf(u);
  const authored = pool.filter((k) => !k.generated && (level === 'basic' ? (k.ex.d ?? 1) === 1 : (k.ex.d ?? 1) >= 2));
  const gen = pool.filter((k) => k.generated && (level === 'basic' ? k.ex.t === 'order' : k.ex.t === 'fix'));
  const cuad = authored.filter((k) => k.ex.src === 'cuad');
  const sets = pool.filter((k) => k.ex.src === 'set');
  const own = authored.filter((k) => k.ex.src !== 'cuad' && k.ex.src !== 'set');
  // Units with numbered sets: basic practice = the booklet activity + the sets in order (1.1, 1.2 …);
  // advanced practice = the platform's other exercises.
  if (sets.length) {
    if (level === 'basic') return [...cuad, ...sets];
    const ownAll = pool.filter((k) => !k.generated && k.ex.src !== 'cuad' && k.ex.src !== 'set');
    return varied(shuffle([...ownAll, ...pick(gen, 2, s)]));
  }
  const items = [...own, ...pick(gen, 2, s)];
  // the booklet's activity always opens the basic practice
  return level === 'basic' ? [...cuad, ...shuffle(items)] : varied(shuffle(items));
}

export function buildUnitTest(u: GrammarUnit, s: ProgressState, n = 10): KeyedExercise[] {
  const pool = poolOf(u);
  const authored = pool.filter((k) => !k.generated);
  const gen = pool.filter((k) => k.generated);
  const a = pick(authored, Math.min(authored.length, n - 2), s);
  const g = pick(gen, n - a.length, s);
  return varied(shuffle([...a, ...g]));
}

function studiedUnits(s: ProgressState): GrammarUnit[] {
  return UNITS.filter((u) => (s.units[u.id]?.step ?? 0) >= 2 || (s.units[u.id]?.attempts ?? 0) > 0);
}

function spread(units: GrammarUnit[], n: number, s: ProgressState): KeyedExercise[] {
  if (!units.length) return [];
  const per = Math.max(1, Math.ceil(n / units.length));
  const all = units.flatMap((u) => pick(poolOf(u).filter((k) => !k.generated), per, s));
  return varied(shuffle(all).slice(0, n));
}

export function buildModuleExam(moduleId: string, s: ProgressState, n = 20): KeyedExercise[] {
  const m = MODULES.find((x) => x.id === moduleId);
  if (!m) return [];
  return spread(m.units.map((id) => UNIT_BY_ID[id]).filter(Boolean), n, s);
}

export function buildCumulative(s: ProgressState, n = 25): KeyedExercise[] {
  const st = studiedUnits(s);
  return spread(st.length ? st : UNITS.slice(0, 6), n, s);
}

export function buildGrammarTest(s: ProgressState, n = 15): KeyedExercise[] {
  return spread(shuffle(UNITS).slice(0, n), n, s);
}

export function buildMistakeReview(s: ProgressState, n = 12): KeyedExercise[] {
  const keys = Object.entries(s.mistakes).sort((a, b) => b[1].count - a[1].count || a[1].at - b[1].at).map(([k]) => k);
  return keys.map(exerciseByKey).filter((k): k is KeyedExercise => !!k).slice(0, n);
}

export function buildFocusPractice(unitIds: string[], s: ProgressState, n = 10): KeyedExercise[] {
  const units = unitIds.map((id) => UNIT_BY_ID[id]).filter(Boolean);
  const pool = units.flatMap((u) => poolOf(u));
  return varied(pick(pool, n, s));
}

export function buildDueReview(s: ProgressState, n = 12): { items: KeyedExercise[]; units: string[] } {
  const due = dueUnits(s).slice(0, 4);
  const items = due.flatMap((id) => pick(poolOf(UNIT_BY_ID[id]), Math.ceil(n / Math.max(1, due.length)), s));
  return { items: varied(shuffle(items).slice(0, n)), units: due };
}

// ───────── analysis ─────────
export function unitAccuracy(s: ProgressState, unitId: string): number | null {
  const u = s.units[unitId];
  if (!u || !u.attempts) return null;
  return u.correct / u.attempts;
}

export interface Weakness { unitId: string; mastery: number; mistakes: number; reason: string }

export function weakUnits(s: ProgressState): Weakness[] {
  const mistakesBy: Record<string, number> = {};
  for (const k of Object.keys(s.mistakes)) {
    const id = k.split(':')[0];
    if (UNIT_BY_ID[id]) mistakesBy[id] = (mistakesBy[id] ?? 0) + 1;
  }
  const out: Weakness[] = [];
  for (const [id, u] of Object.entries(s.units)) {
    if (!UNIT_BY_ID[id]) continue;
    const m = mistakesBy[id] ?? 0;
    const weakMastery = u.attempts >= 4 && u.mastery < 0.6;
    const failedTest = u.testAttempts > 0 && !u.completed;
    if (weakMastery || m >= 3 || failedTest) {
      out.push({
        unitId: id, mastery: u.mastery, mistakes: m,
        reason: failedTest ? 'Test not passed yet' : m >= 3 ? `${m} mistakes not fixed` : `Mastery ${Math.round(u.mastery * 100)}%`,
      });
    }
  }
  return out.sort((a, b) => a.mastery - b.mastery || b.mistakes - a.mistakes);
}

export function weakTags(s: ProgressState): { tag: string; label: string; units: string[]; errors: number }[] {
  const map = new Map<string, { units: Set<string>; errors: number }>();
  for (const k of Object.keys(s.mistakes)) {
    const u = UNIT_BY_ID[k.split(':')[0]];
    if (!u) continue;
    for (const t of u.tags) {
      if (t === 'tenses') continue;
      const e = map.get(t) ?? { units: new Set(), errors: 0 };
      e.units.add(u.id);
      e.errors += s.mistakes[k].count;
      map.set(t, e);
    }
  }
  return [...map.entries()].map(([tag, v]) => ({ tag, label: tagLabel(tag), units: [...v.units], errors: v.errors }))
    .filter((t) => t.errors >= 2).sort((a, b) => b.errors - a.errors);
}

export function dueUnits(s: ProgressState): string[] {
  const now = Date.now();
  return Object.entries(s.units).filter(([id, u]) => UNIT_BY_ID[id] && u.completed && u.nextReview <= now)
    .sort((a, b) => a[1].nextReview - b[1].nextReview).map(([id]) => id);
}

export function inProgressUnits(s: ProgressState): string[] {
  return PATH.filter((id) => { const u = s.units[id]; return u && u.step > 0 && !u.completed; });
}

export function nextUnit(s: ProgressState): string {
  const inProg = inProgressUnits(s).sort((a, b) => (s.units[b].lastStudied ?? 0) - (s.units[a].lastStudied ?? 0));
  if (inProg.length) return inProg[0];
  return PATH.find((id) => !s.units[id]?.completed) ?? PATH[0];
}

export function dueCards(s: ProgressState): string[] {
  const now = Date.now();
  return VOCAB.filter((w) => isDue(s.cards[w.id], now)).map((w) => w.id);
}

export interface Recommendation { title: string; reason: string; to: string; kind: 'mistakes' | 'weak' | 'cards' | 'continue' | 'review' | 'next' | 'start' }

export function recommendations(s: ProgressState): Recommendation[] {
  const recs: Recommendation[] = [];
  const mistakes = Object.keys(s.mistakes).length;
  const weak = weakUnits(s);
  const cards = dueCards(s).length;
  const due = dueUnits(s);
  const next = nextUnit(s);
  const nu = UNIT_BY_ID[next];
  const started = Object.keys(s.units).length > 0;

  if (!started) recs.push({ kind: 'start', title: `Start with Unit ${nu.n}: ${nu.title}`, reason: 'First lesson on the recommended path.', to: `/learn/${next}` });
  if (mistakes >= 5) recs.push({ kind: 'mistakes', title: `Fix your ${mistakes} mistakes`, reason: 'Repeating what you got wrong is the fastest way to learn it.', to: '/practice?mode=mistakes' });
  if (weak.length) {
    const w = UNIT_BY_ID[weak[0].unitId];
    recs.push({ kind: 'weak', title: `Review: ${w.title}`, reason: `${weak[0].reason}. Here is some extra practice on this topic.`, to: `/practice?mode=focus&units=${w.id}` });
  }
  if (cards >= 5) recs.push({ kind: 'cards', title: `Review ${cards} words that are due`, reason: "Cards that are due get forgotten if you don't review them today.", to: '/vocabulary?tab=review' });
  if (started && nu) {
    const st = s.units[next];
    recs.push(st && st.step > 0
      ? { kind: 'continue', title: `Continue Unit ${nu.n}: ${nu.title}`, reason: `You're on step ${Math.min(st.step + 1, 5)} of 5.`, to: `/learn/${next}` }
      : { kind: 'next', title: `Next: Unit ${nu.n} — ${nu.title}`, reason: 'Next topic on the recommended path.', to: `/learn/${next}` });
  }
  if (due.length) recs.push({ kind: 'review', title: `Spaced review of ${due.length} unit(s)`, reason: "It's time to review some topics you've passed.", to: '/practice?mode=due' });
  if (mistakes > 0 && mistakes < 5) recs.push({ kind: 'mistakes', title: `Fix your ${mistakes} mistakes`, reason: 'A short session with the exercises you got wrong.', to: '/practice?mode=mistakes' });
  return recs;
}

/**
 * Estimated level within the B1–B2 range covered by the material. Based only
 * on real performance: units passed with a mastery of at least 70 %.
 */
export function estimatedLevel(s: ProgressState): { label: string; detail: string; pct: number } {
  const mastered = Object.entries(s.units).filter(([id, u]) => UNIT_BY_ID[id] && u.completed && u.mastery >= 0.7).length;
  const pct = mastered / UNITS.length;
  const label = mastered === 0 ? 'B1 (starting)' : pct < 0.25 ? 'B1' : pct < 0.5 ? 'B1+' : pct < 0.85 ? 'B2' : 'B2+';
  return { label, pct, detail: `${mastered} of ${UNITS.length} units mastered (passed with ≥ 70% mastery)` };
}

export function overallAccuracy(s: ProgressState): number | null {
  let seen = 0, correct = 0;
  for (const e of Object.values(s.exercises)) { seen += e.seen; correct += e.correct; }
  return seen ? correct / seen : null;
}
