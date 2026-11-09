import type { Module } from '../types';

const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => `u${a + i}`);

/**
 * The 16 sections of English Grammar in Use (5th ed., Raymond Murphy), in the
 * order of the book's Contents. The book itself says units are not ordered by
 * difficulty; the "recommended path" in `path.ts` suggests a learning order.
 */
export const MODULES: Module[] = [
  { id: 'm1', title: 'Present and past', es: 'Presente y pasado', color: 'indigo', units: range(1, 6), desc: 'Presente simple y continuo, pasado simple y continuo.' },
  { id: 'm2', title: 'Present perfect and past', es: 'Presente perfecto y pasado', color: 'violet', units: range(7, 18), desc: 'Present perfect simple y continuo, for/since, past perfect, have got, used to.' },
  { id: 'm3', title: 'Future', es: 'Futuro', color: 'sky', units: range(19, 25), desc: 'Presentes con valor de futuro, going to, will/shall, futuro continuo y perfecto.' },
  { id: 'm4', title: 'Modals', es: 'Verbos modales', color: 'emerald', units: range(26, 37), desc: 'can, could, must, may, might, have to, should, had better, would y peticiones.' },
  { id: 'm5', title: 'if and wish', es: 'Condicionales y wish', color: 'amber', units: range(38, 41), desc: 'Condicionales reales, irreales y en pasado; wish.' },
  { id: 'm6', title: 'Passive', es: 'Voz pasiva', color: 'rose', units: range(42, 46), desc: 'Voz pasiva en todos los tiempos, it is said that…, have something done.' },
  { id: 'm7', title: 'Reported speech', es: 'Estilo indirecto', color: 'orange', units: range(47, 48), desc: 'Contar lo que otra persona dijo.' },
  { id: 'm8', title: 'Questions and auxiliary verbs', es: 'Preguntas y auxiliares', color: 'teal', units: range(49, 52), desc: 'Formación de preguntas, preguntas indirectas, auxiliares y question tags.' },
  { id: 'm9', title: '-ing and to …', es: '-ing y to + infinitivo', color: 'cyan', units: range(53, 68), desc: 'Verbos seguidos de -ing o to, preposición + -ing, cláusulas -ing.' },
  { id: 'm10', title: 'Articles and nouns', es: 'Artículos y sustantivos', color: 'lime', units: range(69, 81), desc: 'Contables e incontables, a/an/the, nombres con y sin the, plurales, posesivo.' },
  { id: 'm11', title: 'Pronouns and determiners', es: 'Pronombres y determinantes', color: 'fuchsia', units: range(82, 91), desc: 'Reflexivos, some/any, no/none, much/many, all/most, both/either, each/every.' },
  { id: 'm12', title: 'Relative clauses', es: 'Oraciones de relativo', color: 'pink', units: range(92, 97), desc: 'who/that/which, whose/whom/where, cláusulas explicativas y participios.' },
  { id: 'm13', title: 'Adjectives and adverbs', es: 'Adjetivos y adverbios', color: 'yellow', units: range(98, 112), desc: 'Adjetivos -ing/-ed, orden, adverbios, so/such, enough/too, comparativos, orden de palabras.' },
  { id: 'm14', title: 'Conjunctions and prepositions', es: 'Conectores', color: 'blue', units: range(113, 120), desc: 'although, in case, unless, as, like, during/while, by/until.' },
  { id: 'm15', title: 'Prepositions', es: 'Preposiciones', color: 'green', units: range(121, 136), desc: 'at/on/in de tiempo y lugar, to/into, by, sustantivo/adjetivo/verbo + preposición.' },
  { id: 'm16', title: 'Phrasal verbs', es: 'Phrasal verbs', color: 'purple', units: range(137, 145), desc: 'Verbos frasales con in/out, on/off, up/down, away/back.' },
];

export const moduleOf = (unitId: string) => MODULES.find((m) => m.units.includes(unitId));

/** Tailwind classes per module colour (listed literally so Tailwind keeps them). */
export const COLOR: Record<string, { bg: string; text: string; soft: string; ring: string; bar: string }> = {
  indigo: { bg: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-300', soft: 'bg-indigo-50 dark:bg-indigo-500/10', ring: 'ring-indigo-200 dark:ring-indigo-500/30', bar: 'bg-indigo-500' },
  violet: { bg: 'bg-violet-500', text: 'text-violet-600 dark:text-violet-300', soft: 'bg-violet-50 dark:bg-violet-500/10', ring: 'ring-violet-200 dark:ring-violet-500/30', bar: 'bg-violet-500' },
  sky: { bg: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-300', soft: 'bg-sky-50 dark:bg-sky-500/10', ring: 'ring-sky-200 dark:ring-sky-500/30', bar: 'bg-sky-500' },
  emerald: { bg: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-300', soft: 'bg-emerald-50 dark:bg-emerald-500/10', ring: 'ring-emerald-200 dark:ring-emerald-500/30', bar: 'bg-emerald-500' },
  amber: { bg: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-300', soft: 'bg-amber-50 dark:bg-amber-500/10', ring: 'ring-amber-200 dark:ring-amber-500/30', bar: 'bg-amber-500' },
  rose: { bg: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-300', soft: 'bg-rose-50 dark:bg-rose-500/10', ring: 'ring-rose-200 dark:ring-rose-500/30', bar: 'bg-rose-500' },
  orange: { bg: 'bg-orange-500', text: 'text-orange-600 dark:text-orange-300', soft: 'bg-orange-50 dark:bg-orange-500/10', ring: 'ring-orange-200 dark:ring-orange-500/30', bar: 'bg-orange-500' },
  teal: { bg: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-300', soft: 'bg-teal-50 dark:bg-teal-500/10', ring: 'ring-teal-200 dark:ring-teal-500/30', bar: 'bg-teal-500' },
  cyan: { bg: 'bg-cyan-500', text: 'text-cyan-600 dark:text-cyan-300', soft: 'bg-cyan-50 dark:bg-cyan-500/10', ring: 'ring-cyan-200 dark:ring-cyan-500/30', bar: 'bg-cyan-500' },
  lime: { bg: 'bg-lime-500', text: 'text-lime-700 dark:text-lime-300', soft: 'bg-lime-50 dark:bg-lime-500/10', ring: 'ring-lime-200 dark:ring-lime-500/30', bar: 'bg-lime-500' },
  fuchsia: { bg: 'bg-fuchsia-500', text: 'text-fuchsia-600 dark:text-fuchsia-300', soft: 'bg-fuchsia-50 dark:bg-fuchsia-500/10', ring: 'ring-fuchsia-200 dark:ring-fuchsia-500/30', bar: 'bg-fuchsia-500' },
  pink: { bg: 'bg-pink-500', text: 'text-pink-600 dark:text-pink-300', soft: 'bg-pink-50 dark:bg-pink-500/10', ring: 'ring-pink-200 dark:ring-pink-500/30', bar: 'bg-pink-500' },
  yellow: { bg: 'bg-yellow-500', text: 'text-yellow-700 dark:text-yellow-300', soft: 'bg-yellow-50 dark:bg-yellow-500/10', ring: 'ring-yellow-200 dark:ring-yellow-500/30', bar: 'bg-yellow-500' },
  blue: { bg: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-300', soft: 'bg-blue-50 dark:bg-blue-500/10', ring: 'ring-blue-200 dark:ring-blue-500/30', bar: 'bg-blue-500' },
  green: { bg: 'bg-green-500', text: 'text-green-600 dark:text-green-300', soft: 'bg-green-50 dark:bg-green-500/10', ring: 'ring-green-200 dark:ring-green-500/30', bar: 'bg-green-500' },
  purple: { bg: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-300', soft: 'bg-purple-50 dark:bg-purple-500/10', ring: 'ring-purple-200 dark:ring-purple-500/30', bar: 'bg-purple-500' },
};
