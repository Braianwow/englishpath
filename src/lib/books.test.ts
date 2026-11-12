import { describe, expect, it } from 'vitest';
import { booksEarned } from './books';
import { emptyProgress } from '../store/progress';
import { addDays, todayKey } from './dates';
import type { ProgressState } from '../types';

/** Progress where each of the given days (0 = today, 1 = yesterday…) had 2 hours of study. */
function withDays(back: number[], minutes = 125): ProgressState {
  const s = emptyProgress();
  for (const b of back) {
    const k = addDays(todayKey(), -b);
    s.days[k] = { date: k, xp: 0, minutes, exercises: 0, correct: 0, cards: 0, lessons: 0 };
  }
  return s;
}
const range = (from: number, to: number) => Array.from({ length: to - from + 1 }, (_, i) => from + i);

describe('streak books', () => {
  it('no book before 7 days in a row', () => {
    expect(booksEarned(withDays(range(1, 6)))).toBe(0);
  });
  it('one book at 7 days in a row', () => {
    expect(booksEarned(withDays(range(1, 7)))).toBe(1);
  });
  it('two books at 14 days, and broken runs count separately', () => {
    expect(booksEarned(withDays(range(1, 14)))).toBe(2);
    expect(booksEarned(withDays([...range(1, 7), ...range(9, 15)]))).toBe(2);
    expect(booksEarned(withDays([...range(1, 4), ...range(6, 9)]))).toBe(0);
  });
  it('days under 2 hours do not count', () => {
    expect(booksEarned(withDays(range(1, 7), 60))).toBe(0);
  });
  it("today's live minutes complete the week", () => {
    expect(booksEarned(withDays(range(1, 6)), 120)).toBe(1);
  });
});
