import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronLeft, ClipboardCheck } from 'lucide-react';
import { MODULES, COLOR } from '../content/modules';
import { UNIT_BY_ID } from '../content';
import { useProgress } from '../store/progress';
import { Card, LinkButton, PageHeader, Progress, SourceTag } from '../components/ui';
import UnitRow from '../components/UnitRow';

export default function ModulePage() {
  const { moduleId } = useParams();
  const p = useProgress();
  const idx = MODULES.findIndex((m) => m.id === moduleId);
  if (idx < 0) return <Navigate to="/courses" replace />;
  const m = MODULES[idx];
  const units = m.units.map((id) => UNIT_BY_ID[id]).filter(Boolean);
  const done = units.filter((u) => p.units[u.id]?.completed).length;
  const studied = units.filter((u) => (p.units[u.id]?.step ?? 0) > 0).length;
  const lastExam = p.exams.find((e) => e.kind === 'module' && e.id === m.id);

  return (
    <div>
      <Link to="/courses" className="mb-3 inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"><ChevronLeft size={16} /> Courses</Link>
      <PageHeader eyebrow={`Module ${idx + 1} of ${MODULES.length}`} title={m.title} subtitle={m.desc} actions={<SourceTag src="egu" />} />
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card className="p-2 sm:p-3">
            {units.map((u) => <UnitRow key={u.id} u={u} up={p.units[u.id]} />)}
          </Card>
        </div>
        <div className="flex flex-col gap-4">
          <Card>
            <div className="mb-2 font-semibold text-slate-900 dark:text-white">Module progress</div>
            <Progress value={done / units.length} color={COLOR[m.color].bar} />
            <div className="mt-2 text-sm text-slate-500">{done} of {units.length} units passed · {studied} started</div>
          </Card>
          <Card>
            <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><ClipboardCheck size={18} /> Module cumulative test</div>
            <p className="mb-3 text-sm text-slate-500">20 questions mixing all the units in the module, with no hints. Recommended once you've passed most of the units.</p>
            {lastExam && <div className="mb-3 text-sm">Last result: <strong>{lastExam.score}%</strong></div>}
            <LinkButton to={`/exam/module/${m.id}`} variant={done >= Math.ceil(units.length / 2) ? 'primary' : 'secondary'}>Take the test</LinkButton>
          </Card>
        </div>
      </div>
    </div>
  );
}
