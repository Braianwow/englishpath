/**
 * Compact authoring format for grammar units. Keeps 145 units readable and
 * reviewable. Every string is parsed (and validated by tests) into typed objects.
 *
 * Exercise lines — first char = type, optional digit = difficulty (1 default, 2 harder):
 *   ?  multiple choice     "? She ___ tea every day. | drink | *drinks | is drinking >> why"
 *   _  gap (fill in)       "_ I ___ (not/know) him. = don't know ; do not know >> why"   (several gaps: answers joined with " / ")
 *   o  order words         "o She has lived here since 2019. ; Since 2019 she has lived here. >> why"
 *   t  translate ES→EN     "t Estoy cansado. = I'm tired >> why"
 *   e  translate EN→ES (mc)"e I've been waiting for ages. | *Hace siglos que espero. | Esperé siglos. >> why"
 *   f  fix the sentence    "f I am knowing her. = I know her >> why"
 *   s  spot the error      "s She [don't] like coffee. = doesn't >> why"   (no brackets → sentence is correct)
 *   m  match pairs         "m afraid = of ; good = at ; interested = in >> why"
 *   b  build sentence      "b yesterday / I / go / cinema = I went to the cinema yesterday ; Yesterday I went to the cinema >> why"
 *   d  dialogue (mc)       "d A: Where's Tom? B: He ___ a shower. | has | *'s having >> why"
 * Optional extra example: append " ++ another example".
 */
import type { Example, Exercise, GrammarUnit, Difficulty } from '../types';

export interface UnitSrc {
  n: number;
  t: string;
  es: string;
  tags: string[];
  pre?: number[];
  goals: string[];
  x: string;
  form?: string[][];
  uses: string[];
  aff: string[];
  neg?: string[];
  q?: string[];
  err: string[];
  cmp?: { w: number[]; x: string };
  ex: string[];
}

const ex2 = (s: string): Example => {
  const [en, es] = s.split('|').map((p) => p.trim());
  return es ? { en, es } : { en };
};

function splitWhy(body: string) {
  const [main, rest = ''] = body.split(' >> ');
  const [why, more] = rest.split(' ++ ');
  return { main: main.trim(), why: (why || '').trim(), more: more?.trim() };
}

const alts = (s: string) => s.split(' ; ').map((x) => x.trim()).filter(Boolean);

export function parseExercise(line: string): Exercise {
  // optional situation shown above the item: "… >> why @@ context"
  const [body, ctx] = line.split(' @@ ');
  line = body;
  const type = line[0];
  let i = 1;
  let d: Difficulty = 1;
  if (/[123]/.test(line[1])) { d = Number(line[1]) as Difficulty; i = 2; }
  const { main, why, more } = splitWhy(line.slice(i).trim());
  const base = { why, more, d, ...(ctx ? { sit: ctx.trim() } : {}) };
  switch (type) {
    case '?':
    case 'e':
    case 'd': {
      const parts = main.split(' | ').map((p) => p.trim());
      const q = parts.shift()!;
      const a = parts.findIndex((p) => p.startsWith('*'));
      const opts = parts.map((p) => p.replace(/^\*/, ''));
      return { t: 'mc', q, opts, a, kind: type === 'e' ? 'tr-en-es' : type === 'd' ? 'dialog' : undefined, ...base };
    }
    case '_': {
      const [q, ans] = main.split(' = ');
      return { t: 'gap', q: q.trim(), a: alts(ans ?? ''), ...base };
    }
    case 'o':
      return { t: 'order', a: alts(main), ...base };
    case 't': {
      const [q, ans] = main.split(' = ');
      return { t: 'tr', q: q.trim(), a: alts(ans ?? ''), ...base };
    }
    case 'f': {
      const [q, ans] = main.split(' = ');
      return { t: 'fix', q: q.trim(), a: alts(ans ?? ''), ...base };
    }
    case 's': {
      const [qRaw, ok = ''] = main.split(' = ');
      if (/\[[^\]]*\s[^\]]*\]/.test(qRaw) || (qRaw.match(/\[/g) ?? []).length > 1) throw new Error(`Spot exercise must bracket exactly one token: ${line}`);
      const toks = qRaw.trim().split(/\s+/);
      const bad = toks.findIndex((w) => w.startsWith('['));
      const q = toks.map((w) => w.replace(/[[\]]/g, '')).join(' ');
      return { t: 'spot', q, bad, ok: ok.trim(), ...base };
    }
    case 'm': {
      const pairs = main.split(' ; ').map((p) => {
        const [a, b] = p.split(' = ');
        return [a.trim(), (b ?? '').trim()] as [string, string];
      });
      return { t: 'match', pairs, ...base };
    }
    case 'b': {
      const [q, ans] = main.split(' = ');
      return { t: 'build', q: q.trim(), a: alts(ans ?? ''), ...base };
    }
    default:
      throw new Error(`Unknown exercise type "${type}" in: ${line}`);
  }
}

export function buildUnit(src: UnitSrc, moduleId: string): GrammarUnit {
  return {
    id: `u${src.n}`,
    n: src.n,
    title: src.t,
    es: src.es,
    module: moduleId,
    tags: src.tags,
    prereq: src.pre?.map((p) => `u${p}`),
    goals: src.goals,
    explain: src.x.trim(),
    form: src.form,
    uses: src.uses,
    aff: src.aff.map(ex2),
    neg: (src.neg ?? []).map(ex2),
    q: (src.q ?? []).map(ex2),
    errors: src.err.map((e) => {
      const [w, r, note] = e.split('|').map((p) => p.trim());
      return [w, r, note ?? ''] as [string, string, string];
    }),
    compare: src.cmp ? { with: src.cmp.w.map((n) => `u${n}`), text: src.cmp.x } : undefined,
    ex: src.ex.map(parseExercise),
  };
}
