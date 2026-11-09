import type { Exercise, GrammarUnit } from '../types';
import { buildUnit, type UnitSrc } from './dsl';
import { MODULES } from './modules';
import { CUADERNILLO } from './cuadernillo';
import { SETS } from './sets';
import { S1 } from './stories/u1';
import { S2 } from './stories/u2';
import { S3 } from './stories/u3';
import { S4 } from './stories/u4';

/** Story line for each authored exercise of each unit (same order as the exercises). */
export const UNIT_STORIES: Record<number, string[]> = { ...S1, ...S2, ...S3, ...S4 };
import { m01 } from './units/m01';
import { m02 } from './units/m02';
import { m03 } from './units/m03';
import { m04 } from './units/m04';
import { m05 } from './units/m05';
import { m06 } from './units/m06';
import { m07 } from './units/m07';
import { m08 } from './units/m08';
import { m09 } from './units/m09';
import { m10 } from './units/m10';
import { m11 } from './units/m11';
import { m12 } from './units/m12';
import { m13 } from './units/m13';
import { m14 } from './units/m14';
import { m15 } from './units/m15';
import { m16 } from './units/m16';

/** In "tap the wrong word" items the sentence may be correct, so the story must not say there is a mistake. */
const neutral = (s: string) => s.replace(/,? pero (se equivoca|lo dice mal|arma mal la pregunta|contesta mal|se equivoca al decirlo)/g, '');

const SOURCES: UnitSrc[][] = [m01, m02, m03, m04, m05, m06, m07, m08, m09, m10, m11, m12, m13, m14, m15, m16];

export const UNITS: GrammarUnit[] = SOURCES.flatMap((list, i) => list.map((u) => {
  const unit = buildUnit(u, MODULES[i].id);
  const story = UNIT_STORIES[u.n] ?? [];
  return { ...unit, ex: unit.ex.map((e, j) => (story[j] ? { ...e, sit: e.t === 'spot' ? neutral(story[j]) : story[j] } : e)), cuad: CUADERNILLO[u.n], sets: SETS[u.n] };
}))
  .sort((a, b) => a.n - b.n);
export const UNIT_BY_ID: Record<string, GrammarUnit> = Object.fromEntries(UNITS.map((u) => [u.id, u]));
export const getUnit = (id: string) => UNIT_BY_ID[id];

/** Recommended learning path = book order (units are self-contained; prerequisites are shown as hints). */
export const PATH: string[] = MODULES.flatMap((m) => m.units).filter((id) => UNIT_BY_ID[id]);

export interface KeyedExercise { key: string; unitId: string | null; ex: Exercise; generated?: boolean }

/** Authored exercises plus exercises generated from the unit's own (verified) examples and error list. */
export function unitPool(u: GrammarUnit): KeyedExercise[] {
  const authored = u.ex.map((ex, i) => ({ key: `${u.id}:${i}`, unitId: u.id, ex }));
  const fromErrors: KeyedExercise[] = u.errors.map(([wrong, right, note], i) => ({
    key: `${u.id}:gf${i}`, unitId: u.id, generated: true,
    ex: { t: 'fix', q: wrong, a: [right.replace(/[.!?]$/, '')], why: note, d: 2 },
  }));
  const sentences = [...u.aff, ...u.neg, ...u.q].filter((e) => {
    const n = e.en.split(' ').length;
    return n >= 4 && n <= 12 && !/[/…→'"‘’“”–—]|\(|\b[A-Z]\b:/.test(e.en.replace(/\b\w+'\w+\b/g, 'x'));
  });
  const fromExamples: KeyedExercise[] = sentences.map((e, i) => ({
    key: `${u.id}:go${i}`, unitId: u.id, generated: true,
    ex: { t: 'order', a: [e.en], es: e.es, why: e.es ? `Significa: “${e.es}”.` : 'Oración modelo de la unidad.', d: 1 },
  }));
  const cuad: KeyedExercise[] = u.cuad ? [{ key: `${u.id}:cuad`, unitId: u.id, ex: u.cuad }] : [];
  const sets: KeyedExercise[] = (u.sets ?? []).flatMap((s) => s.ex.map((ex, i) => ({ key: `${u.id}:s${s.ref}.${i}`, unitId: u.id, ex })));
  // Items generated from the unit's examples and error list have no story, so they are only used when a unit has nothing else.
  const generated = [...fromErrors, ...fromExamples];
  return [...cuad, ...sets, ...authored, ...(authored.length || sets.length ? [] : generated)];
}

/**
 * Autosaved sessions keep copies of their exercises. When the content is updated, this swaps
 * each saved copy for the current version (same key). Returns null if any exercise no longer exists,
 * so the session starts again with fresh content.
 */
export function refreshSaved(items: KeyedExercise[]): KeyedExercise[] | null {
  const pools = new Map<string, Map<string, KeyedExercise>>();
  const out: KeyedExercise[] = [];
  for (const it of items) {
    if (!it.unitId || !UNIT_BY_ID[it.unitId]) { out.push(it); continue; }
    let pool = pools.get(it.unitId);
    if (!pool) { pool = new Map(unitPool(UNIT_BY_ID[it.unitId]).map((k) => [k.key, k])); pools.set(it.unitId, pool); }
    const cur = pool.get(it.key);
    if (!cur) return null;
    out.push(cur);
  }
  return out;
}

export const TAG_LABELS: Record<string, string> = {
  'present-continuous': 'Presente continuo', 'present-simple': 'Presente simple', tenses: 'Tiempos verbales', 'state-verbs': 'Verbos de estado',
  'past-simple': 'Pasado simple', 'past-continuous': 'Pasado continuo', 'irregular-verbs': 'Verbos irregulares', 'present-perfect': 'Present perfect',
  'present-perfect-continuous': 'Present perfect continuo', 'for-since': 'for / since', 'past-perfect': 'Past perfect', 'used-to': 'used to', have: 'have / have got',
  future: 'Futuro', 'going-to': 'going to', will: 'will / shall', modals: 'Modales', conditionals: 'Condicionales', wish: 'wish', passive: 'Voz pasiva',
  'reported-speech': 'Estilo indirecto', questions: 'Preguntas', auxiliaries: 'Auxiliares', 'question-tags': 'Question tags', 'ing-to': '-ing / to + infinitivo',
  prepositions: 'Preposiciones', articles: 'Artículos', nouns: 'Sustantivos', countable: 'Contables / incontables', pronouns: 'Pronombres', determiners: 'Determinantes',
  quantifiers: 'Cuantificadores', relative: 'Oraciones de relativo', adjectives: 'Adjetivos', adverbs: 'Adverbios', comparison: 'Comparativos y superlativos',
  'word-order': 'Orden de palabras', conjunctions: 'Conectores', 'phrasal-verbs': 'Phrasal verbs', time: 'Expresiones de tiempo', place: 'Lugar y posición',
};
export const tagLabel = (t: string) => TAG_LABELS[t] ?? t;
