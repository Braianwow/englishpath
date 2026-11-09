import type { ExMC, ProgressState, VocabWord } from '../types';
import type { KeyedExercise } from '../content';
import { VOCAB } from '../content/vocab';
import { shuffle } from './grade';

function distractors(w: VocabWord, field: 'en' | 'es', n = 3): string[] {
  const samePos = VOCAB.filter((x) => x.id !== w.id && x.pos === w.pos && x[field] !== w[field]);
  const pool = samePos.length >= n ? samePos : VOCAB.filter((x) => x.id !== w.id && x[field] !== w[field]);
  return shuffle(pool).slice(0, n).map((x) => x[field]);
}

/** Exercises built from verified vocabulary data (meaning, reverse meaning, word in context). */
export function vocabExercise(w: VocabWord, kind: 0 | 1 | 2): KeyedExercise {
  let ex: ExMC;
  if (kind === 2 && new RegExp(`\\b${w.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i').test(w.ex)) {
    const q = w.ex.replace(new RegExp(`\\b${w.en.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'i'), '___');
    const opts = shuffle([w.en, ...distractors(w, 'en')]);
    ex = { t: 'mc', kind: 'context', q, opts, a: opts.indexOf(w.en), why: `“${w.en}” significa “${w.es}”.`, more: w.ex };
  } else if (kind === 1) {
    const opts = shuffle([w.en, ...distractors(w, 'en')]);
    ex = { t: 'mc', q: `¿Cómo se dice “${w.es}” en inglés?`, opts, a: opts.indexOf(w.en), why: `${w.en} /${w.ipa}/ = ${w.es}.`, more: w.ex };
  } else {
    const opts = shuffle([w.es, ...distractors(w, 'es')]);
    ex = { t: 'mc', kind: 'tr-en-es', q: `¿Qué significa “${w.en}”?`, opts, a: opts.indexOf(w.es), why: `${w.en} /${w.ipa}/ = ${w.es}.`, more: w.ex };
  }
  return { key: `v:${w.id}:${kind}`, unitId: null, ex };
}

export function buildVocabTest(s: ProgressState, cat: string | null, n = 15): KeyedExercise[] {
  let pool = VOCAB.filter((w) => !cat || w.cat === cat);
  const studied = pool.filter((w) => s.cards[w.id]);
  if (!cat && studied.length >= 8) pool = studied;
  // words that are difficult or seen first
  const sorted = shuffle(pool).sort((a, b) => Number(!!s.cards[b.id]?.difficult) - Number(!!s.cards[a.id]?.difficult));
  return sorted.slice(0, n).map((w, i) => vocabExercise(w, (i % 3) as 0 | 1 | 2));
}
