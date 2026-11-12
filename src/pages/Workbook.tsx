import { Link } from 'react-router-dom';
import { WORKBOOK } from '../content/workbook';
import { VOCAB, VOCAB_CATEGORIES, CATEGORY_REF } from '../content/vocab';
import { UNIT_BY_ID } from '../content';
import { useProgress } from '../store/progress';
import { READINGS } from '../content/readings';
import { Card, PageHeader, Progress, SourceTag } from '../components/ui';

export function wbStats(wid: string, p: ReturnType<typeof useProgress>) {
  const w = WORKBOOK.find((x) => x.id === wid)!;
  const units = [...new Set(w.grammar.flatMap((g) => g.units))].filter((id) => UNIT_BY_ID[id]);
  const cats = VOCAB_CATEGORIES.filter((c) => CATEGORY_REF[c.id] === wid).map((c) => c.id);
  const words = VOCAB.filter((v) => cats.includes(v.cat));
  const stories = READINGS.filter((r) => r.ref === wid);
  const done = units.filter((id) => p.units[id]?.completed).length + words.filter((v) => p.cards[v.id]?.learned || (p.cards[v.id]?.reps ?? 0) >= 2).length
    + stories.filter((r) => (p.readings[r.id]?.best ?? 0) >= 70).length;
  const total = units.length + words.length + stories.length;
  return { units, words, cats, stories, pct: total ? done / total : 0 };
}

export default function Workbook() {
  return (
    <div>
      <PageHeader title="Objective First" subtitle="The workbook's 24 topic units: vocabulary, phrasal verbs and the grammar each one practises." actions={<SourceTag src="obj" />} />
      <WorkbookGrid />
    </div>
  );
}

/** The workbook's 24 units as cards (used in Reading). */
export function WorkbookGrid() {
  const p = useProgress();
  return (
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {WORKBOOK.map((w) => {
          const s = wbStats(w.id, p);
          return (
            <Link key={w.id} to={`/workbook/${w.id}`}>
              <Card className="h-full p-4 transition hover:-translate-y-0.5 hover:shadow-md">
                <div className="mb-1 text-xs font-semibold uppercase tracking-wide text-sky-600 dark:text-sky-300">Unit {w.n} · {w.topic}</div>
                <div className="font-semibold text-slate-900 dark:text-white">{w.title}</div>
                <div className="mt-1 line-clamp-2 text-sm text-slate-500">{w.grammar.map((g) => g.label).join(' · ') || w.vocab[0]}</div>
                {s.stories.length > 0 && <div className="mt-2 text-xs font-medium text-amber-600 dark:text-amber-400">📖 Story: {s.stories[0].title}</div>}
                <div className="mt-3 flex items-center gap-2"><Progress value={s.pct} color="bg-sky-500" /><span className="text-xs text-slate-500">{Math.round(s.pct * 100)}%</span></div>
              </Card>
            </Link>
          );
        })}
      </div>
  );
}
