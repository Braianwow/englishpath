import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { AMERICAN, FUTURE, IRREGULAR, MODALS, SHORT_FORMS, SPELLING, TENSES } from '../content/reference';
import { Card, PageHeader, SourceTag, cx } from '../components/ui';
import { FormTable } from '../components/GrammarBlocks';
import { SpeakBtn } from '../components/ExerciseView';
import { normalize } from '../lib/grade';

const TABS = [
  ['irregular', 'Verbos irregulares'], ['tenses', 'Tiempos'], ['future', 'Futuro'], ['modals', 'Modales'],
  ['short', 'Contracciones'], ['spelling', 'Ortografía'], ['american', 'Inglés americano'],
] as const;

export default function Reference() {
  const [sp] = useSearchParams();
  const initial = TABS.find(([id]) => id === sp.get('tab'))?.[0] ?? 'irregular';
  const [tab, setTab] = useState<(typeof TABS)[number][0]>(initial);
  const [q, setQ] = useState('');
  const verbs = useMemo(() => { const n = normalize(q); return IRREGULAR.filter((v) => !n || normalize(v.join(' ')).includes(n)); }, [q]);
  return (
    <div>
      <PageHeader title="Referencia" subtitle="Resúmenes de consulta rápida que corresponden a los apéndices de English Grammar in Use." actions={<SourceTag src="egu" />} />
      <div className="mb-5 flex flex-wrap gap-2">
        {TABS.map(([id, l]) => <button key={id} onClick={() => setTab(id)} className={cx('rounded-xl px-3 py-2 text-sm font-medium', tab === id ? 'bg-brand-500 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300')}>{l}</button>)}
      </div>
      {tab === 'irregular' && (
        <Card>
          <div className="relative mb-4"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input className="input pl-10" placeholder="Buscar verbo…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <div className="overflow-x-auto">
            <table className="table-clean">
              <thead><tr><th>Infinitivo</th><th>Pasado</th><th>Participio</th><th>Español</th></tr></thead>
              <tbody>{verbs.map((v) => <tr key={v[0]}><td className="font-semibold text-slate-900 dark:text-white"><span className="inline-flex items-center gap-1">{v[0]}<SpeakBtn text={`${v[0]}, ${v[1].replace('/', ', ')}, ${v[2]}`} /></span></td><td>{v[1]}</td><td>{v[2]}</td><td className="text-slate-500">{v[3]}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">{verbs.length} verbos. Los verbos regulares forman el pasado y el participio con -ed (work → worked → worked).</p>
        </Card>
      )}
      {tab === 'tenses' && <Card><FormTable rows={TENSES} /></Card>}
      {tab === 'future' && <Card><FormTable rows={FUTURE} /></Card>}
      {tab === 'modals' && <Card><FormTable rows={MODALS} /></Card>}
      {tab === 'short' && <Card><FormTable rows={SHORT_FORMS} /></Card>}
      {tab === 'american' && <Card><FormTable rows={AMERICAN} /></Card>}
      {tab === 'spelling' && (
        <div className="grid gap-3 md:grid-cols-2">{SPELLING.map((s, i) => <Card key={i} className="p-4"><div className="font-medium text-slate-900 dark:text-white">{s.rule}</div><div className="mt-1 text-sm text-brand-700 dark:text-brand-300">{s.ex}</div></Card>)}</div>
      )}
    </div>
  );
}
