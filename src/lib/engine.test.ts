import { describe, expect, it } from 'vitest';
import { matches, normalize, diffTokens } from './grade';
import { newCard, review, DAY } from './srs';
import { levelInfo } from './gamification';

describe('grading', () => {
  it('accepts contractions and full forms equally', () => {
    expect(matches("I'm working", ['I am working'])).toBe(true);
    expect(matches("She doesn't like it.", ['She does not like it'])).toBe(true);
    expect(matches("He can't swim", ['He cannot swim'])).toBe(true);
    expect(matches("I'd gone", ['I had gone'])).toBe(true);
    expect(matches("I'd go", ['I would go'])).toBe(true);
    expect(matches("It's been raining", ['It has been raining'])).toBe(true);
  });
  it('ignores case, punctuation and extra spaces', () => {
    expect(matches('  where  ARE you going ', ['Where are you going?'])).toBe(true);
  });
  it('rejects wrong grammar', () => {
    expect(matches('She work here', ['She works here'])).toBe(false);
    expect(matches('', ['x'])).toBe(false);
  });
  it('normalizes curly apostrophes', () => {
    expect(normalize('I’m')).toBe('i am');
  });
  it('diff marks missing and extra tokens', () => {
    const d = diffTokens('she work here', 'She works here');
    expect(d.some((t) => t.kind === 'missing' && t.text === 'works')).toBe(true);
    expect(d.some((t) => t.kind === 'extra' && t.text === 'work')).toBe(true);
  });
});

describe('spaced repetition', () => {
  it('grows intervals on success and resets on failure', () => {
    let c = newCard(0);
    c = review(c, 2, 0); expect(c.interval).toBe(1);
    c = review(c, 2, 0); expect(c.interval).toBe(6);
    c = review(c, 2, 0); expect(c.interval).toBeGreaterThan(6);
    const failed = review(c, 0, 0);
    expect(failed.interval).toBe(0);
    expect(failed.due).toBeLessThan(DAY);
  });
  it('marks a word difficult after two lapses', () => {
    let c = newCard(0);
    c = review(c, 0, 0); c = review(c, 0, 0);
    expect(c.difficult).toBe(true);
  });
});

describe('levels', () => {
  it('computes XP levels', () => {
    expect(levelInfo(0).level).toBe(1);
    expect(levelInfo(100).level).toBe(2);
    expect(levelInfo(299).level).toBe(2);
    expect(levelInfo(300).level).toBe(3);
  });
});
