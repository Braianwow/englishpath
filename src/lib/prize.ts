import type { DayLog } from '../types';
import { addDays } from './dates';
import { DAILY_GOAL_MIN, dayMinutes } from './studyTime';

/**
 * Streak prize: a physical book (delivered in person) for every 7 days in a row reaching the daily goal.
 * Pure functions, shared by the app and the server (the server checks them against the saved history).
 */
export const PRIZE_STREAK = 7;

/**
 * The last day of each completed block of 7 consecutive goal days, oldest first.
 * `live` lets the app count today's minutes before they are saved.
 */
export function prizeBlocks(days: Record<string, DayLog | undefined>, live?: { date: string; minutes: number }): string[] {
  const minutes = (k: string) => (live && k === live.date ? Math.max(live.minutes, dayMinutes(days[k])) : dayMinutes(days[k]));
  const keys = [...new Set([...Object.keys(days), ...(live ? [live.date] : [])])]
    .filter((k) => /^\d{4}-\d{2}-\d{2}$/.test(k) && minutes(k) >= DAILY_GOAL_MIN)
    .sort();
  const ends: string[] = [];
  let run = 0, prev = '';
  for (const k of keys) {
    run = prev && addDays(prev, 1) === k ? run + 1 : 1;
    if (run % PRIZE_STREAK === 0) ends.push(k);
    prev = k;
  }
  return ends;
}
