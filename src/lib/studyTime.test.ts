import { describe, expect, it } from 'vitest';
import { fmtClock, sectionFor } from './studyTime';
import { streak } from './gamification';
import { addDays, todayKey } from './dates';
import type { ProgressState } from '../types';

const day = (date: string, minutes: number) => ({ date, xp: 50, minutes, exercises: 5, correct: 5, cards: 3, lessons: 1 });
const state = (days: [number, number][]): ProgressState => {
  const t = todayKey();
  return { version: 1, createdAt: 0, xp: 0, units: {}, exercises: {}, mistakes: {}, cards: {}, exams: [], achievements: {}, readings: {}, studyPlanChecks: {},
    days: Object.fromEntries(days.map(([off, m]) => [addDays(t, off), day(addDays(t, off), m)])) };
};

describe('study time & streak', () => {
  it('maps pages to sections', () => {
    expect(sectionFor('/learn/u7')).toBe('grammar');
    expect(sectionFor('/exam/vocab')).toBe('vocabulary');
    expect(sectionFor('/exam/module/m1')).toBe('grammar');
    expect(sectionFor('/readings/r1')).toBe('reading');
    expect(sectionFor('/')).toBeNull();
    expect(sectionFor('/progress')).toBeNull();
  });

  it('formats the clock', () => {
    expect(fmtClock(1800)).toBe('30:00');
    expect(fmtClock(65)).toBe('1:05');
    expect(fmtClock(3725)).toBe('1:02:05');
  });

  it('only days with 2 hours count for the streak', () => {
    const s = state([[-3, 130], [-2, 125], [-1, 120]]);
    expect(streak(s).current).toBe(3);
    expect(streak(state([[-2, 130], [-1, 90]])).current).toBe(0); // yesterday short → streak lost
  });

  it('today keeps the streak alive until it is over, and adds to it at 120 min', () => {
    const s = state([[-1, 150], [0, 40]]);
    const st = streak(s);
    expect(st.current).toBe(1);
    expect(st.activeToday).toBe(false);
    expect(st.missingMin).toBe(80);
    expect(streak(s, 121).current).toBe(2);
  });
});
