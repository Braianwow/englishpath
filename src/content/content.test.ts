import { describe, expect, it } from 'vitest';
import { UNITS, UNIT_STORIES, unitPool } from './index';
import { MODULES } from './modules';
import { VOCAB } from './vocab';
import { READINGS } from './readings';
import { CUADERNILLO } from './cuadernillo';
import { SETS } from './sets';
import { tokensOf, matches } from '../lib/grade';

const ctx = (u: { n: number }, i: number) => `U${u.n} ex#${i}`;

describe('grammar content integrity', () => {
  it('has a unit for every number listed in the modules', () => {
    const ids = new Set(UNITS.map((u) => u.id));
    const missing = MODULES.flatMap((m) => m.units).filter((id) => !ids.has(id));
    expect(missing).toEqual([]);
  });

  it('unit numbers are unique', () => {
    const ns = UNITS.map((u) => u.n);
    expect(new Set(ns).size).toBe(ns.length);
  });

  for (const u of UNITS) {
    it(`U${u.n} is complete and every exercise is well-formed`, () => {
      expect(u.goals.length, 'goals').toBeGreaterThan(0);
      expect(u.explain.length, 'explain').toBeGreaterThan(80);
      expect(u.uses.length, 'uses').toBeGreaterThan(0);
      expect(u.aff.length, 'examples').toBeGreaterThan(0);
      expect(u.ex.length, 'exercises').toBeGreaterThanOrEqual(8);
      expect(u.ex.some((e) => (e.d ?? 1) === 1), 'basic exercises').toBe(true);
      expect(u.ex.some((e) => (e.d ?? 1) >= 2), 'advanced exercises').toBe(true);
      u.ex.forEach((e, i) => {
        const c = ctx(u, i);
        expect(e.why, `${c} why`).toBeTruthy();
        switch (e.t) {
          case 'mc':
            expect(e.opts.length, c).toBeGreaterThanOrEqual(2);
            expect(e.a, `${c} correct option`).toBeGreaterThanOrEqual(0);
            expect(new Set(e.opts).size, `${c} duplicate options`).toBe(e.opts.length);
            e.opts.forEach((o) => expect(o, `${c} stray asterisk`).not.toMatch(/\*/));
            break;
          case 'gap': {
            const gaps = e.q.split('___').length - 1;
            expect(gaps, `${c} gaps`).toBeGreaterThan(0);
            expect(e.a.length, `${c} answers`).toBeGreaterThan(0);
            e.a.forEach((alt) => expect(alt.split(' / ').length, `${c} gap count "${alt}"`).toBe(gaps));
            break;
          }
          case 'order': {
            const base = [...tokensOf(e.a[0])].sort().join('|');
            expect(tokensOf(e.a[0]).length, c).toBeGreaterThanOrEqual(3);
            e.a.forEach((alt) => expect([...tokensOf(alt)].sort().join('|'), `${c} alt uses same tokens`).toBe(base));
            break;
          }
          case 'tr': case 'fix': case 'build':
            expect(e.q, c).toBeTruthy();
            expect(e.a.length, `${c} answers`).toBeGreaterThan(0);
            if (e.t === 'fix') expect(matches(e.q, e.a), `${c} wrong sentence must not already be correct`).toBe(false);
            break;
          case 'spot':
            expect(e.why, `${c} placeholder text`).not.toMatch(/Error de práctica/);
            if (e.bad >= 0) {
              expect(e.ok, `${c} correction`).toBeTruthy();
              expect(e.ok, `${c} correction placeholder`).not.toBe('-');
              expect(e.bad, c).toBeLessThan(tokensOf(e.q).length);
            } else expect(e.ok, `${c} correct sentence has no correction`).toBe('');
            break;
          case 'match':
            expect(e.pairs.length, c).toBeGreaterThanOrEqual(3);
            e.pairs.forEach(([a, b]) => { expect(a, c).toBeTruthy(); expect(b, c).toBeTruthy(); });
            expect(new Set(e.pairs.map((p) => p[1])).size, `${c} duplicate right side`).toBe(e.pairs.length);
            break;
        }
      });
      // generated exercises are valid too
      unitPool(u).filter((k) => k.generated && k.ex.t === 'fix').forEach((k) => {
        if (k.ex.t === 'fix') expect(matches(k.ex.q, k.ex.a), `U${u.n} error list: "${k.ex.q}" equals its correction`).toBe(false);
      });
    });
  }
});

describe('numbered exercise sets', () => {
  it('every one of the 145 units has at least one numbered set', () => {
    UNITS.forEach((u) => expect(u.sets?.length ?? 0, `U${u.n} sets`).toBeGreaterThan(0));
  });
  it('every set item is well-formed', () => {
    Object.entries(SETS).forEach(([n, sets]) => sets.forEach((s) => {
      expect(s.ref.startsWith(`${n}.`), `set ${s.ref} in unit ${n}`).toBe(true);
      expect(s.ex.length, `set ${s.ref}`).toBeGreaterThan(0);
      s.ex.forEach((e, i) => {
        const c = `set ${s.ref}#${i}`;
        expect(e.why, c).toBeTruthy();
        if (e.t === 'gap') {
          const gaps = e.q.split('___').length - 1;
          expect(gaps, c).toBeGreaterThan(0);
          e.a.forEach((alt) => expect(alt.split(' / ').length, `${c} "${alt}"`).toBe(gaps));
        }
        if (e.t === 'mc') { expect(e.a, c).toBeGreaterThanOrEqual(0); e.opts.forEach((o) => expect(o, c).not.toMatch(/\*/)); }
        if (e.t === 'spot' && e.bad >= 0) expect(e.ok, c).toBeTruthy();
        if (e.t === 'match') expect(new Set(e.pairs.map((p) => p[1])).size, c).toBe(e.pairs.length);
        if (e.t === 'build' || e.t === 'tr' || e.t === 'fix') expect(e.a.length, c).toBeGreaterThan(0);
      });
    }));
  });
});

describe('B1 context in numbered sets', () => {
  it('every item gives a situation: a longer sentence or a "Situación" line', () => {
    const missing: string[] = [];
    Object.values(SETS).forEach((sets) => sets.forEach((s) => s.ex.forEach((e) => {
      const text = ('q' in e ? e.q : '') ?? '';
      const ok = (e.t === 'gap' || e.t === 'mc' || e.t === 'spot' || e.t === 'fix')
        ? !!e.sit || text.split(/\s+/).length >= 10
        : !!e.sit;
      if (!ok) missing.push(e.ref ?? s.ref);
    })));
    expect(missing).toEqual([]);
  });
});

describe('stories', () => {
  it('every unit has exactly one story line per exercise', () => {
    const wrong = UNITS.filter((u) => (UNIT_STORIES[u.n]?.length ?? 0) !== u.ex.length).map((u) => `U${u.n}: ${UNIT_STORIES[u.n]?.length ?? 0} historias / ${u.ex.length} ejercicios`);
    expect(wrong).toEqual([]);
  });
  it('every exercise in the practice pools has a story or situation', () => {
    const missing = UNITS.flatMap((u) => unitPool(u).filter((k) => !k.ex.sit && !(k.ex.src === 'set')).map((k) => k.key));
    expect(missing).toEqual([]);
  });
});

describe('cuadernillo', () => {
  it('has one activity for each of the 145 units, attached to its unit', () => {
    expect(Object.keys(CUADERNILLO).length).toBe(145);
    UNITS.forEach((u) => expect(u.cuad, `U${u.n} cuadernillo`).toBeTruthy());
  });
  it('every activity has an answer and its gaps match', () => {
    Object.entries(CUADERNILLO).forEach(([n, e]) => {
      expect(e.why, `C${n}`).toBeTruthy();
      if (e.t === 'gap') {
        const gaps = e.q.split('___').length - 1;
        e.a.forEach((alt) => expect(alt.split(' / ').length, `C${n} "${alt}"`).toBe(gaps));
      }
      if (e.t === 'mc') expect(e.a, `C${n}`).toBeGreaterThanOrEqual(0);
    });
  });
});

describe('vocabulary & readings', () => {
  it('vocabulary entries are complete and ids unique', () => {
    VOCAB.forEach((w) => { expect(w.en && w.es && w.ipa && w.pos && w.ex, w.id).toBeTruthy(); });
    expect(new Set(VOCAB.map((w) => w.id)).size).toBe(VOCAB.length);
  });
  it('reading questions have one correct option', () => {
    READINGS.forEach((r) => r.qs.forEach((q, i) => expect(q.a, `${r.id} q${i}`).toBeGreaterThanOrEqual(0)));
  });
});
