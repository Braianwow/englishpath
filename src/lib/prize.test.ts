import { describe, expect, it } from 'vitest';
import { prizeBlocks } from './prize';
import { addDays } from './dates';
import type { DayLog } from '../types';

const START = '2026-03-01';
/** Days (0 = START, 1 = the next day…) with the given minutes. */
function days(offsets: number[], minutes = 125): Record<string, DayLog> {
  return Object.fromEntries(offsets.map((o) => {
    const k = addDays(START, o);
    return [k, { date: k, xp: 0, minutes, exercises: 0, correct: 0, cards: 0, lessons: 0 }];
  }));
}
const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

describe('physical book prize', () => {
  it('no prize before 7 days in a row', () => {
    expect(prizeBlocks(days(range(0, 5)))).toEqual([]);
  });
  it('one prize on the 7th day in a row, dated that day', () => {
    expect(prizeBlocks(days(range(0, 6)))).toEqual([addDays(START, 6)]);
  });
  it('a broken run starts again', () => {
    expect(prizeBlocks(days([...range(0, 3), ...range(5, 10)]))).toEqual([]);
    expect(prizeBlocks(days([...range(0, 6), ...range(8, 14)]))).toEqual([addDays(START, 6), addDays(START, 14)]);
  });
  it('14 days in a row = two prizes', () => {
    expect(prizeBlocks(days(range(0, 13)))).toHaveLength(2);
  });
  it('days under the daily goal do not count', () => {
    expect(prizeBlocks(days(range(0, 6), 30))).toEqual([]);
  });
  it("today's live minutes can complete the week", () => {
    expect(prizeBlocks(days(range(0, 5)), { date: addDays(START, 6), minutes: 200 })).toEqual([addDays(START, 6)]);
  });
});
