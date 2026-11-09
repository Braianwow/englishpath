import { describe, expect, it } from 'vitest';
import { highlightParts, myQueue, parseWordLines } from './myWords';
import { newCard } from './srs';

describe('my words', () => {
  it('parses "palabra = oración = significado" lines and reports bad ones', () => {
    const r = parseWordLines('reliable = My car is reliable. = confiable\n\nborrow = Can I borrow it?\n  run out = We ran out of milk. = quedarse sin  ');
    expect(r).toEqual([
      { word: 'reliable', sentence: 'My car is reliable.', meaning: 'confiable' },
      { error: expect.stringContaining('Line 3'), line: 3 },
      { word: 'run out', sentence: 'We ran out of milk.', meaning: 'quedarse sin' },
    ]);
  });

  it('highlights the word inside the sentence, with endings and any casing', () => {
    expect(highlightParts('She borrowed it. Borrow more!', 'borrow')).toEqual([
      { text: 'She ', hit: false }, { text: 'borrowed', hit: true }, { text: ' it. ', hit: false }, { text: 'Borrow', hit: true }, { text: ' more!', hit: false },
    ]);
    expect(highlightParts('No match here', 'xyz')).toEqual([{ text: 'No match here', hit: false }]);
  });

  it('queues due cards first, then new ones', () => {
    const now = 1_000_000;
    const words = [{ id: 'a', word: 'a', sentence: 's', meaning: 'm', at: 1 }, { id: 'b', word: 'b', sentence: 's', meaning: 'm', at: 2 }, { id: 'c', word: 'c', sentence: 's', meaning: 'm', at: 3 }];
    const cards = { 'my:b': { ...newCard(), reps: 1, due: now - 10 }, 'my:c': { ...newCard(), reps: 1, due: now + 999 } };
    expect(myQueue(words, cards, now)).toEqual(['b', 'a']);
  });
});
