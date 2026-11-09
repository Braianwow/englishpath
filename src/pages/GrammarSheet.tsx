import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronLeft, ChevronRight, GraduationCap, Dumbbell, Target } from 'lucide-react';
import { PATH, UNIT_BY_ID, tagLabel } from '../content';
import { moduleOf } from '../content/modules';
import { WORKBOOK } from '../content/workbook';
import { useProgress } from '../store/progress';
import { buildFocusPractice } from '../lib/adaptive';
import { Badge, Button, Card, LinkButton, Rich, SourceTag } from '../components/ui';
import { CompareBox, ErrorsList, ExamplesTabs, FormTable, UsesList } from '../components/GrammarBlocks';
import Session from '../components/Session';

/** Full reference sheet of a unit — everything visible at once for later consultation. */
export default function GrammarSheet() {
  const { unitId = '' } = useParams();
  const u = UNIT_BY_ID[unitId];
  const p = useProgress();
  const [practice, setPractice] = useState<ReturnType<typeof buildFocusPractice> | null>(null);
  if (!u) return <Navigate to="/grammar" replace />;
  const m = moduleOf(u.id);
  const i = PATH.indexOf(u.id);
  const prev = PATH[i - 1], next = PATH[i + 1];
  const up = p.units[u.id];
  const wb = WORKBOOK.filter((w) => w.grammar.some((g) => g.units.includes(u.id)));

  if (practice) {
    return <Session items={practice} title={`Quick practice · Unit ${u.n}`} onExit={() => setPractice(null)} finishLabel="Back to the sheet" />;
  }

  return (
    <div className="flex flex-col gap-5">
      <Link to="/grammar" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"><ChevronLeft size={16} /> Grammar</Link>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="text-sm font-medium text-brand-600 dark:text-brand-300">Unit {u.n} · {m?.title}</div>
          <h1 className="font-display text-2xl font-bold text-slate-900 sm:text-3xl dark:text-white">{u.title}</h1>
          <div className="mt-1 flex flex-wrap gap-1.5">{u.tags.map((t) => <Badge key={t}>{tagLabel(t)}</Badge>)}<SourceTag src="egu" /></div>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={() => setPractice(buildFocusPractice([u.id], p, 8))}><Dumbbell size={16} /> Quick practice</Button>
          <LinkButton to={`/learn/${u.id}`}><GraduationCap size={16} /> {up?.step ? 'Continue lesson' : 'Guided lesson'}</LinkButton>
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <Card>
            <h2 className="mb-3 font-semibold text-slate-900 dark:text-white">1 · Simple explanation</h2>
            <Rich text={u.explain} className="text-[16px]" />
          </Card>
          {u.form && <Card><h2 className="mb-3 font-semibold text-slate-900 dark:text-white">2 · Form</h2><FormTable rows={u.form} /></Card>}
          <Card><h2 className="mb-3 font-semibold text-slate-900 dark:text-white">3 · When to use it</h2><UsesList uses={u.uses} /></Card>
          <Card><h2 className="mb-3 font-semibold text-slate-900 dark:text-white">4–6 · Affirmative, negative and question examples</h2><ExamplesTabs u={u} /></Card>
          {u.errors.length > 0 && <Card><h2 className="mb-3 font-semibold text-slate-900 dark:text-white">7 · Common mistakes</h2><ErrorsList errors={u.errors} /></Card>}
          <CompareBox u={u} />
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <div className="mb-2 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><Target size={18} /> Goals</div>
            <ul className="list-disc space-y-1 pl-5 text-sm">{u.goals.map((g, k) => <li key={k}>{g}</li>)}</ul>
          </Card>
          <Card>
            <div className="mb-2 font-semibold text-slate-900 dark:text-white">Your results</div>
            {up && up.attempts > 0 ? (
              <div className="space-y-1 text-sm">
                <div>Mastery: <strong>{Math.round(up.mastery * 100)}%</strong></div>
                <div>Aciertos: {up.correct}/{up.attempts}</div>
                <div>Test: {up.completed ? `passed (${up.best}%)` : up.testAttempts ? `best score ${up.best}%` : 'not taken yet'}</div>
                {up.completed && up.nextReview > 0 && <div>Next review: {new Date(up.nextReview).toLocaleDateString('en-GB')}</div>}
              </div>
            ) : <div className="text-sm text-slate-500">You haven't practised this unit yet.</div>}
          </Card>
          {wb.length > 0 && (
            <Card>
              <div className="mb-2 font-semibold text-slate-900 dark:text-white">Also practised in</div>
              {wb.map((w) => <Link key={w.id} to={`/workbook/${w.id}`} className="block text-sm font-medium text-sky-700 hover:underline dark:text-sky-300">Objective First · Unit {w.n}: {w.title}</Link>)}
            </Card>
          )}
          <Card className="text-sm text-slate-500">
            The explanations and examples were written for this platform following the rules of Unit {u.n} of <em>English Grammar in Use</em>. For the original text, see the book.
          </Card>
        </div>
      </div>

      <div className="flex justify-between">
        {prev ? <LinkButton variant="ghost" to={`/grammar/${prev}`}><ChevronLeft size={16} /> U{UNIT_BY_ID[prev].n}</LinkButton> : <span />}
        {next && <LinkButton variant="ghost" to={`/grammar/${next}`}>U{UNIT_BY_ID[next].n} <ChevronRight size={16} /></LinkButton>}
      </div>
    </div>
  );
}
