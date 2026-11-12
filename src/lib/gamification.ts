import type { ProgressState } from '../types';
import { addDays, todayKey } from './dates';
import { DAILY_GOAL_MIN, dayMinutes } from './studyTime';

export const XP = { correct: 10, testCorrect: 12, lessonStep: 5, unitPassed: 50, card: 2 } as const;

/** Learner level from XP: each level needs 100 XP more than the previous one. */
export function levelInfo(xp: number) {
  let level = 1, need = 100, acc = 0;
  while (xp >= acc + need) { acc += need; level++; need += 100; }
  return { level, into: xp - acc, need, pct: (xp - acc) / need };
}

/**
 * A day counts for the streak only with at least 1.5 hours of study (in any sections).
 * Today does not break the streak until it is over: if today is not done yet,
 * the streak shown is the one up to yesterday.
 */
export function streak(s: ProgressState, todayMinutes?: number): { current: number; best: number; activeToday: boolean; todayMin: number; missingMin: number } {
  const today = todayKey();
  const minutesOf = (k: string) => (k === today && todayMinutes !== undefined ? Math.max(todayMinutes, dayMinutes(s.days[k])) : dayMinutes(s.days[k]));
  const active = (k: string) => minutesOf(k) >= DAILY_GOAL_MIN;
  const activeToday = active(today);
  const todayMin = minutesOf(today);
  let cur = 0;
  let k = activeToday ? today : addDays(today, -1);
  while (active(k)) { cur++; k = addDays(k, -1); }
  // best streak
  const keys = [...new Set([...Object.keys(s.days), today])].filter(active).sort();
  let best = 0, run = 0, prev = '';
  for (const key of keys) {
    run = prev && addDays(prev, 1) === key ? run + 1 : 1;
    best = Math.max(best, run);
    prev = key;
  }
  return { current: cur, best: Math.max(best, cur), activeToday, todayMin, missingMin: Math.max(0, DAILY_GOAL_MIN - todayMin) };
}

export interface Achievement { id: string; title: string; desc: string; icon: string; check: (s: ProgressState) => boolean }

const completed = (s: ProgressState) => Object.values(s.units).filter((u) => u.completed).length;
const learnedCards = (s: ProgressState) => Object.values(s.cards).filter((c) => c.learned || c.reps >= 2).length;
const totalCorrect = (s: ProgressState) => Object.values(s.exercises).reduce((a, e) => a + e.correct, 0);

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-answer', title: 'First step', desc: 'You answered your first exercise.', icon: 'Footprints', check: (s) => Object.keys(s.exercises).length >= 1 },
  { id: 'unit-1', title: 'Unit passed', desc: 'You passed your first unit test.', icon: 'BadgeCheck', check: (s) => completed(s) >= 1 },
  { id: 'unit-10', title: 'Constancia', desc: 'You passed 10 units.', icon: 'Medal', check: (s) => completed(s) >= 10 },
  { id: 'unit-50', title: 'Half the book', desc: 'You passed 50 units.', icon: 'Trophy', check: (s) => completed(s) >= 50 },
  { id: 'unit-145', title: 'Grammar complete', desc: 'You passed all 145 units.', icon: 'Crown', check: (s) => completed(s) >= 145 },
  { id: 'perfect', title: 'No mistakes', desc: 'You got 100% in a test.', icon: 'Sparkles', check: (s) => s.exams.some((e) => e.score === 100 && e.total >= 5) },
  { id: 'correct-100', title: '100 correct', desc: 'You answered 100 exercises correctly.', icon: 'Target', check: (s) => totalCorrect(s) >= 100 },
  { id: 'correct-1000', title: '1000 correct', desc: 'You answered 1000 exercises correctly.', icon: 'Rocket', check: (s) => totalCorrect(s) >= 1000 },
  { id: 'words-20', title: 'First 20 words', desc: 'You reviewed 20 words successfully.', icon: 'BookA', check: (s) => learnedCards(s) >= 20 },
  { id: 'words-100', title: 'Growing vocabulary', desc: 'You reviewed 100 words successfully.', icon: 'Library', check: (s) => learnedCards(s) >= 100 },
  { id: 'streak-3', title: '3-day streak', desc: 'You studied 1.5 hours a day for 3 days in a row.', icon: 'Flame', check: (s) => streak(s).current >= 3 },
  { id: 'streak-7', title: 'A whole week', desc: 'You studied 1.5 hours a day for 7 days in a row.', icon: 'Flame', check: (s) => streak(s).current >= 7 },
  { id: 'streak-30', title: 'A month-long habit', desc: 'You studied 1.5 hours a day for 30 days in a row.', icon: 'CalendarCheck', check: (s) => streak(s).current >= 30 },
  { id: 'fixer', title: 'Learning from mistakes', desc: 'You fixed 10 mistakes in a review session.', icon: 'Wrench', check: (s) => s.exams.filter((e) => e.kind === 'review').reduce((a, e) => a + e.correct, 0) >= 10 },
  { id: 'cumulative', title: 'Cumulative test', desc: 'You passed a module cumulative test.', icon: 'GraduationCap', check: (s) => s.exams.some((e) => (e.kind === 'module' || e.kind === 'cumulative') && e.score >= 70) },
  { id: 'reader', title: 'Lector', desc: 'You completed 3 reading texts with 70% or more.', icon: 'BookOpen', check: (s) => Object.values(s.readings).filter((r) => r.best >= 70).length >= 3 },
];

export function checkAchievements(s: ProgressState): Achievement[] {
  return ACHIEVEMENTS.filter((a) => !s.achievements[a.id] && a.check(s));
}
