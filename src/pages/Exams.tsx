import { Link } from 'react-router-dom';
import { BookOpen, Brain, ClipboardCheck, Layers, Library, GraduationCap } from 'lucide-react';
import { MODULES } from '../content/modules';
import { UNIT_BY_ID } from '../content';
import { useProgress } from '../store/progress';
import { Badge, Card, LinkButton, PageHeader } from '../components/ui';

const KIND_LABEL: Record<string, string> = { unit: 'Unit', module: 'Module', cumulative: 'Cumulative', vocab: 'Vocabulary', grammar: 'Grammar', reading: 'Reading', review: 'Review', listening: 'Listening', speaking: 'Speaking', writing: 'Writing' };

export default function Exams() {
  const p = useProgress();
  const studied = Object.values(p.units).filter((u) => u.step >= 2 || u.attempts > 0).length;
  return (
    <div>
      <PageHeader title="Evaluaciones" subtitle="No hints while you answer; at the end you get a grade, explained mistakes and topics to review." />
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ExamCard icon={<GraduationCap />} title="Cumulative test" desc={`25 questions from all the units you have studied (${studied}).`} to="/exam/cumulative" />
        <ExamCard icon={<Layers />} title="Grammar quiz" desc="15 questions from random units across the whole book: a good check-up." to="/exam/grammar" />
        <ExamCard icon={<Brain />} title="Vocabulary quiz" desc="15 questions: meaning, reverse translation and words in context." to="/exam/vocab" />
        <ExamCard icon={<BookOpen />} title="Reading comprehension" desc="Texts with comprehension and grammar questions." to="/readings" />
        <ExamCard icon={<ClipboardCheck />} title="Unit test" desc="At the end of each lesson (step 5). You need 70% to pass." to="/courses" />
        <ExamCard icon={<Library />} title="Module tests" desc="Choose a module below: 20 questions from all its units." to="#modules" />
      </div>

      <h2 id="modules" className="mb-3 font-display text-xl font-bold text-slate-900 dark:text-white">Module tests</h2>
      <div className="mb-8 grid gap-2 sm:grid-cols-2">
        {MODULES.map((m, i) => {
          const last = p.exams.find((e) => e.kind === 'module' && e.id === m.id);
          return (
            <Card key={m.id} className="flex items-center justify-between gap-2 p-4">
              <div><div className="font-medium text-slate-900 dark:text-white">{i + 1}. {m.title}</div><div className="text-xs text-slate-500">{last ? `Last: ${last.score}%` : 'Not taken'}</div></div>
              <LinkButton size="sm" variant="secondary" to={`/exam/module/${m.id}`}>Start</LinkButton>
            </Card>
          );
        })}
      </div>

      <h2 className="mb-3 font-display text-xl font-bold text-slate-900 dark:text-white">History</h2>
      {p.exams.length === 0 ? <p className="text-sm text-slate-500">You haven't taken any tests yet.</p> : (
        <Card className="p-0">
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {p.exams.slice(0, 30).map((e, i) => (
              <div key={i} className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="min-w-0">
                  <div className="truncate font-medium text-slate-900 dark:text-white">{e.title}</div>
                  <div className="text-xs text-slate-500">{new Date(e.date).toLocaleString('en-GB')} · {e.correct}/{e.total}{e.weakUnits.length ? ` · review:${e.weakUnits.slice(0, 3).map((id) => UNIT_BY_ID[id] ? `U${UNIT_BY_ID[id].n}` : '').join(', ')}` : ''}</div>
                </div>
                <div className="flex shrink-0 items-center gap-2"><Badge>{KIND_LABEL[e.kind]}</Badge><Badge tone={e.score >= 70 ? 'green' : 'rose'}>{e.score}%</Badge></div>
              </div>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

function ExamCard({ icon, title, desc, to }: { icon: React.ReactNode; title: string; desc: string; to: string }) {
  const inner = (
    <Card className="h-full transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 inline-flex rounded-xl bg-amber-100 p-2.5 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300">{icon}</div>
      <div className="font-semibold text-slate-900 dark:text-white">{title}</div>
      <div className="mt-1 text-sm text-slate-500">{desc}</div>
    </Card>
  );
  return to.startsWith('#') ? <a href={to} onClick={(e) => { e.preventDefault(); document.getElementById('modules')?.scrollIntoView({ behavior: 'smooth' }); }}>{inner}</a> : <Link to={to}>{inner}</Link>;
}
