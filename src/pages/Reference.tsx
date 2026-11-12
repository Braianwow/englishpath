import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';
import { AMERICAN, FUTURE, IRREGULAR, MODALS, SHORT_FORMS, SPELLING, TENSES } from '../content/reference';
import { Card, PageHeader, SourceTag, cx } from '../components/ui';
import { FormTable } from '../components/GrammarBlocks';
import { SpeakBtn } from '../components/ExerciseView';
import { normalize } from '../lib/grade';
import { highlightParts } from '../lib/myWords';
import { useProgress } from '../store/progress';

const TABS = [
  ['mine', 'My words'], ['irregular', 'Irregular verbs'], ['tenses', 'Tenses'], ['future', 'Future'], ['modals', 'Modals'],
  ['short', 'Short forms'], ['spelling', 'Spelling'], ['american', 'American English'],
] as const;

export default function Reference() {
  return (
    <div>
      <PageHeader title="Reference" subtitle="Quick-reference summaries that match the appendices of English Grammar in Use, plus the words you add." actions={<SourceTag src="egu" />} />
      <ReferenceContent />
    </div>
  );
}

/** Reference tabs (also shown inside Words → Reference). "My words" lists the words the learner adds, with their example. */
export function ReferenceContent() {
  const [sp] = useSearchParams();
  const mine = Object.values(useProgress().myWords ?? {}).sort((a, b) => b.at - a.at);
  const initial = TABS.find(([id]) => id === sp.get('ref'))?.[0] ?? (mine.length ? 'mine' : 'irregular');
  const [tab, setTab] = useState<(typeof TABS)[number][0]>(initial);
  const [q, setQ] = useState('');
  const verbs = useMemo(() => { const n = normalize(q); return IRREGULAR.filter((v) => !n || normalize(v.join(' ')).includes(n)); }, [q]);
  return (
    <div>
      <div className="mb-5 flex flex-wrap gap-2">
        {TABS.map(([id, l]) => <button key={id} onClick={() => setTab(id)} className={cx('rounded-xl px-3 py-2 text-sm font-medium', tab === id ? 'bg-brand-500 text-slate-950' : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300')}>{l}</button>)}
      </div>
      {tab === 'mine' && (
        <Card>
          {mine.length ? (
            <div className="overflow-x-auto">
              <table className="table-clean">
                <thead><tr><th>Word</th><th>Example</th><th>Meaning</th></tr></thead>
                <tbody>{mine.map((w) => (
                  <tr key={w.id}>
                    <td className="font-semibold text-slate-900 dark:text-white"><span className="inline-flex items-center gap-1">{w.word}<SpeakBtn text={w.word} /></span></td>
                    <td><span className="inline-flex items-center gap-1">{w.sentence ? <span>{highlightParts(w.sentence, w.word).map((p, i) => p.hit ? <strong key={i} className="text-brand-700 dark:text-brand-400">{p.text}</strong> : <span key={i}>{p.text}</span>)}</span> : <span className="text-slate-400">—</span>}{w.sentence && <SpeakBtn text={w.sentence} />}</span></td>
                    <td>{w.meaning || <span className="text-slate-400">—</span>}</td>
                  </tr>
                ))}</tbody>
              </table>
              <p className="mt-3 text-xs text-slate-500">{mine.length} {mine.length === 1 ? 'word' : 'words'}. Every word you add in My words appears here with its example.</p>
            </div>
          ) : (
            <p className="text-sm text-slate-500">The words you add in <strong>My words</strong> (word = sentence = meaning) appear here with their example.</p>
          )}
        </Card>
      )}
      {tab === 'irregular' && (
        <Card>
          <div className="relative mb-4"><Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" /><input className="input pl-10" placeholder="Search for a verb…" value={q} onChange={(e) => setQ(e.target.value)} /></div>
          <div className="overflow-x-auto">
            <table className="table-clean">
              <thead><tr><th>Infinitive</th><th>Past</th><th>Participle</th></tr></thead>
              <tbody>{verbs.map((v) => <tr key={v[0]}><td className="font-semibold text-slate-900 dark:text-white"><span className="inline-flex items-center gap-1">{v[0]}<SpeakBtn text={`${v[0]}, ${v[1].replace('/', ', ')}, ${v[2]}`} /></span></td><td>{v[1]}</td><td>{v[2]}</td></tr>)}</tbody>
            </table>
          </div>
          <p className="mt-3 text-xs text-slate-500">{verbs.length} verbs. Regular verbs form the past and the past participle with -ed (work → worked → worked).</p>
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
