import { describe, expect, it } from 'vitest';
import { checkSentence, localReport, localTurn } from './freeTutor';
import type { Turn } from './conversation';

describe('free conversation mode', () => {
  it('corrects common mistakes and leaves good sentences alone', () => {
    expect(checkSentence('I have 25 years')?.better).toBe("I'm 25 years old");
    expect(checkSentence('My sister don’t like it')).toBeNull(); // curly apostrophe is not the rule's target
    expect(checkSentence("She don't like football")?.better).toBe("She doesn't");
    expect(checkSentence('Does she like football?')).toBeNull();
    expect(checkSentence('Yesterday I go to the beach')?.better).toBe('Yesterday I went');
    expect(checkSentence('I went to the beach with my friends.')).toBeNull();
  });
  it('opens, asks the next question and grades', () => {
    const open = localTurn('viajes', []);
    expect(open.reply).toMatch(/trip/);
    const turns: Turn[] = [{ role: 'tutor', text: open.reply }, { role: 'me', text: 'I went to Bariloche with my family because we love the mountains and the lakes.' }];
    const next = localTurn('viajes', turns);
    expect(next.correction).toBeNull();
    expect(next.reply).toMatch(/\?/);
    const r = localReport('viajes', [...turns, { role: 'tutor', text: next.reply }]);
    expect(r.score).toBeGreaterThanOrEqual(1);
    expect(r.words.length).toBeGreaterThan(0);
  });
});
