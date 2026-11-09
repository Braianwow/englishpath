import { useState } from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { ChevronLeft, Lightbulb, Dumbbell, BookOpen } from 'lucide-react';
import { WB_BY_ID } from '../content/workbook';
import { UNIT_BY_ID } from '../content';
import { READINGS } from '../content/readings';
import { useProgress, setLast } from '../store/progress';
import { buildFocusPractice } from '../lib/adaptive';
import { Badge, Button, Card, LinkButton, PageHeader, SourceTag } from '../components/ui';
import { unitStatus } from '../components/UnitRow';
import { SpeakBtn } from '../components/ExerciseView';
import Session from '../components/Session';
import { wbStats } from './Workbook';
import { useEffect } from 'react';

export default function WorkbookUnit() {
  const { wid = '' } = useParams();
  const w = WB_BY_ID[wid];
  const p = useProgress();
  const [practice, setPractice] = useState<ReturnType<typeof buildFocusPractice> | null>(null);
  useEffect(() => { if (w) setLast({ kind: 'unit', id: w.id, title: `Objective First · Unit ${w.n}`, path: `/workbook/${w.id}` }); }, [w]);
  if (!w) return <Navigate to="/workbook" replace />;
  const s = wbStats(w.id, p);
  const readings = READINGS.filter((r) => r.ref === w.id);

  if (practice) return <Session items={practice} title={`Gramática de Unit ${w.n}: ${w.title}`} onExit={() => setPractice(null)} finishLabel="Volver a la unidad" />;

  return (
    <div className="flex flex-col gap-5">
      <Link to="/workbook" className="inline-flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-brand-600"><ChevronLeft size={16} /> Objective First</Link>
      <PageHeader eyebrow={`Unit ${w.n} · ${w.topic}`} title={w.title} subtitle={!w.titleKnown ? 'El título de esta unidad no se pudo leer en el escaneo del PDF; se muestra su tema.' : undefined} actions={<SourceTag src="obj" />} />
      <div className="grid gap-5 lg:grid-cols-3">
        <div className="flex flex-col gap-5 lg:col-span-2">
          <Card>
            <div className="mb-2 font-semibold text-slate-900 dark:text-white">Qué se practica en esta unidad del workbook</div>
            <div className="mb-3 flex flex-wrap gap-1.5">{w.skills.map((k) => <Badge key={k} tone="sky">{k}</Badge>)}</div>
            <ul className="list-disc space-y-1 pl-5 text-slate-600 dark:text-slate-300">{w.vocab.map((v, i) => <li key={i}>{v}</li>)}</ul>
            {w.tip && <div className="mt-3 flex gap-2 rounded-xl bg-amber-50 p-3 text-sm dark:bg-amber-500/10"><Lightbulb size={18} className="shrink-0 text-amber-500" />{w.tip}</div>}
          </Card>

          {w.grammar.length > 0 && (
            <Card>
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="font-semibold text-slate-900 dark:text-white">Gramática de la unidad</div>
                {s.units.length > 0 && <Button size="sm" onClick={() => setPractice(buildFocusPractice(s.units, p, 12))}><Dumbbell size={14} /> Practicar todo</Button>}
              </div>
              {w.grammar.map((g, i) => (
                <div key={i} className="mb-3">
                  <div className="mb-1 text-sm font-semibold text-slate-700 dark:text-slate-200">{g.label}</div>
                  <div className="flex flex-col gap-1">
                    {g.units.filter((id) => UNIT_BY_ID[id]).map((id) => {
                      const u = UNIT_BY_ID[id];
                      const st = unitStatus(p.units[id]);
                      return (
                        <Link key={id} to={`/learn/${id}`} className="flex items-center justify-between gap-2 rounded-xl p-2 hover:bg-slate-50 dark:hover:bg-slate-800/60">
                          <span className="text-sm"><span className="font-medium text-slate-900 dark:text-white">EGU {u.n}</span> · {u.title}</span>
                          <Badge tone={st.tone}>{st.label}</Badge>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              ))}
            </Card>
          )}

          {s.words.length > 0 && (
            <Card>
              <div className="mb-3 flex items-center justify-between gap-2">
                <div className="font-semibold text-slate-900 dark:text-white">Vocabulario ({s.words.length})</div>
                <LinkButton size="sm" variant="secondary" to="/vocabulary?tab=review">Repasar con tarjetas</LinkButton>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                {s.words.map((v) => (
                  <div key={v.id} className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800/60">
                    <div className="flex items-center gap-1"><span className="font-semibold text-slate-900 dark:text-white">{v.en}</span><SpeakBtn text={v.en} /></div>
                    <div className="text-sm text-brand-700 dark:text-brand-300">{v.es}</div>
                    <div className="text-xs italic text-slate-500">{v.ex}</div>
                  </div>
                ))}
              </div>
            </Card>
          )}
        </div>
        <div className="flex flex-col gap-4">
          {readings.map((r) => (
            <Card key={r.id}>
              <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><BookOpen size={18} /> Lectura</div>
              <div className="text-sm text-slate-600 dark:text-slate-300">{r.title}</div>
              <div className="mb-3 mt-1"><SourceTag src="extra" /></div>
              <LinkButton size="sm" to={`/readings/${r.id}`}>Leer y responder</LinkButton>
            </Card>
          ))}
          <Card className="text-sm text-slate-500">
            El workbook es un PDF escaneado; su contenido se recuperó con reconocimiento de texto (OCR). Los textos y ejercicios originales del libro no se reproducen aquí: la plataforma usa su temario, su vocabulario y su gramática como base.
          </Card>
        </div>
      </div>
    </div>
  );
}
