/**
 * Numbered exercise sets per unit (1.1, 1.2 …). They follow the structure of the
 * reference grammar — same units, same kinds of task, same grammar focus — but
 * every instruction and sentence was written for this platform.
 * Each set: [ref, instruction (Spanish), DSL lines (see ../dsl.ts)].
 */
import { parseExercise } from '../dsl';
import type { ExerciseSet } from '../../types';
import { s01 } from './s01';
import { s02 } from './s02';
import { s03 } from './s03';
import { s04 } from './s04';
import { s05 } from './s05';
import { s06 } from './s06';
import { s07 } from './s07';

export type RawSet = [string, string, string[]];

const RAW: Record<number, RawSet[]> = { ...s01, ...s02, ...s03, ...s04, ...s05, ...s06, ...s07 };

export const SETS: Record<number, ExerciseSet[]> = Object.fromEntries(
  Object.entries(RAW).map(([n, sets]) => [Number(n), sets.map(([ref, ins, lines]) => ({
    ref, ins,
    ex: lines.map((l, i) => ({ ...parseExercise(l), d: 1, src: 'set' as const, ref: `${ref} ${String.fromCharCode(97 + i)}`, ins })),
  }))]),
);
