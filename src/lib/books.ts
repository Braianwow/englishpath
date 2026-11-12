import type { ProgressState } from '../types';
import { addDays, todayKey } from './dates';
import { DAILY_GOAL_MIN, dayMinutes } from './studyTime';

/** Weekly streak reward: every 7 days in a row (2 hours a day) earns a book. */
export const STREAK_FOR_BOOK = 7;

/**
 * How many books the learner has earned: each run of consecutive 2-hour days earns one book
 * per full 7 days. Worked out from the study history, so it is saved with the progress.
 */
export function booksEarned(s: ProgressState, todayMinutes?: number): number {
  const today = todayKey();
  const minutes = (k: string) => (k === today && todayMinutes !== undefined ? Math.max(todayMinutes, dayMinutes(s.days[k])) : dayMinutes(s.days[k]));
  const active = [...new Set([...Object.keys(s.days), today])].filter((k) => minutes(k) >= DAILY_GOAL_MIN).sort();
  let total = 0, run = 0, prev = '';
  for (const k of active) {
    run = prev && addDays(prev, 1) === k ? run + 1 : 1;
    if (run % STREAK_FOR_BOOK === 0) total++;
    prev = k;
  }
  return total;
}
