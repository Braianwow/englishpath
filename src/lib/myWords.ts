import type { CardState, MyWord } from '../types';
import { isDue } from './srs';

export const myCardId = (id: string) => `my:${id}`;

export type ParsedLine = { word: string; sentence: string; meaning: string } | { error: string; line: number };

/**
 * Parses lines written as `palabra = oración = significado`.
 * Blank lines are ignored; a line without exactly three non-empty parts is reported.
 */
export function parseWordLines(text: string): ParsedLine[] {
  const out: ParsedLine[] = [];
  text.split(/\r?\n/).forEach((raw, i) => {
    const line = raw.trim();
    if (!line) return;
    const parts = line.split('=').map((s) => s.trim());
    if (parts.length !== 3 || parts.some((s) => !s)) {
      out.push({ error: `Line ${i + 1}: it must be "word = sentence = meaning"`, line: i + 1 });
      return;
    }
    const [word, sentence, meaning] = parts;
    out.push({ word, sentence, meaning });
  });
  return out;
}

/** Splits the sentence so the word (any casing, with simple endings like -s/-ed/-ing) can be highlighted. */
export function highlightParts(sentence: string, word: string): { text: string; hit: boolean }[] {
  const w = word.trim();
  if (!w) return [{ text: sentence, hit: false }];
  const esc = w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // split() with a capture group puts the matches at the odd positions
  return sentence.split(new RegExp(`(\\b${esc}[a-z]*)`, 'i'))
    .map((text, i) => ({ text, hit: i % 2 === 1 }))
    .filter((p) => p.text);
}

/** Review order: due cards first (oldest due first), then words never reviewed. */
export function myQueue(words: MyWord[], cards: Record<string, CardState>, now = Date.now()): string[] {
  const due = words.filter((w) => isDue(cards[myCardId(w.id)], now)).sort((a, b) => cards[myCardId(a.id)].due - cards[myCardId(b.id)].due);
  const fresh = words.filter((w) => { const c = cards[myCardId(w.id)]; return !c || c.reps + c.lapses === 0; }).sort((a, b) => a.at - b.at);
  return [...due, ...fresh].map((w) => w.id);
}
