import { useEffect, useRef, useState } from 'react';
import { Download, Upload, RotateCcw, KeyRound, Monitor, Moon, Sun, Volume2 } from 'lucide-react';
import { exportProgress, importProgress, resetProgress, updateSettings, useSettings } from '../store/progress';
import { notify } from '../store/toast';
import { setThemeAnimated } from '../lib/theme';
import { Button, Card, PageHeader, cx } from '../components/ui';
import { VOICE_STYLES, englishVoices, resolveVoice, speak, speechSupported } from '../lib/speech';
import ElevenPanel from '../components/ElevenPanel';
import { AI_VOICES, DEFAULT_AI_VOICE, aiSupported, loadAiVoice, useAiStatus } from '../lib/neuralTts';

const SAMPLES = [
  "Hey… you came back. I knew you would. Let's learn some English.",
  "Relax. Nobody gets the present perfect right the first time. Except me.",
  "Two hours a day, babe. Don't break the streak.",
  "I've been waiting for you. That's present perfect continuous, by the way.",
];

function VoiceSettings() {
  const s = useSettings();
  const ai = useAiStatus();
  const engine = s.voiceEngine ?? 'system';
  const [sample, setSample] = useState(0);
  const test = () => { speak(SAMPLES[sample], 'en-US', 1); setSample((sample + 1) % SAMPLES.length); };
  const pick = (id: string) => { updateSettings({ aiVoice: id }); if (ai.state === 'ready') speak(SAMPLES[sample], 'en-US', 1); };
  const rate = s.voiceRate ?? 1;

  return (
    <Card>
      <div className="mb-1 font-semibold text-slate-900 dark:text-white">Voz</div>
      <p className="mb-3 text-sm text-slate-500">La voz que lee palabras, oraciones, dictados y el modelo de Speaking.</p>
      <div className="grid gap-2 sm:grid-cols-3">
        {([['eleven', 'ElevenLabs 🔥', 'La más humana y expresiva. Necesita tu cuenta y clave de ElevenLabs (usa tus créditos).'], ['ai', 'Voz con IA gratis', 'Modelo Kokoro en tu navegador, sin cuenta ni clave. Al cargarse usa mucho la placa de video y la página puede trabarse unos segundos.'], ['system', 'Voz del sistema', 'Las voces que trae tu dispositivo. Robóticas, pero sin descarga.']] as const).map(([k, l, d]) => (
          <button key={k} disabled={k === 'ai' && !aiSupported()} onClick={() => { updateSettings({ voiceEngine: k }); if (k === 'ai') loadAiVoice(); }}
            className={cx('rounded-xl border-2 p-3 text-left transition disabled:opacity-50', engine === k ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600')}>
            <div className="font-semibold text-slate-900 dark:text-white">{l}</div>
            <div className="text-xs text-slate-500">{d}</div>
          </button>
        ))}
      </div>

      {engine === 'eleven' ? <ElevenPanel /> : engine === 'ai' ? (
        <>
          <div className="mt-4 rounded-xl bg-slate-100 p-3 text-sm dark:bg-slate-800">
            {ai.state === 'ready' && <span className="font-medium text-brand-700 dark:text-brand-400">✓ Voz con IA lista</span>}
            {ai.state === 'idle' && <div className="flex flex-wrap items-center justify-between gap-2"><span>Hay que descargar el modelo una sola vez (330 MB si tu compu tiene GPU, que es más rápido; si no, 90 MB). Queda guardado en el navegador.</span><Button size="sm" onClick={loadAiVoice}><Download size={14} /> Descargar voz</Button></div>}
            {ai.state === 'loading' && (
              <div>
                <div className="mb-1.5 flex justify-between"><span>Descargando la voz con IA…</span><span className="tabular-nums">{Math.round(ai.progress * 100)}%{ai.mb ? ` de ${ai.mb} MB` : ''}</span></div>
                <div className="h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700"><div className="h-full rounded-full bg-brand-500 transition-all" style={{ width: `${ai.progress * 100}%` }} /></div>
              </div>
            )}
            {ai.state === 'error' && <div className="flex flex-wrap items-center justify-between gap-2 text-rose-600 dark:text-rose-400"><span>No se pudo cargar la voz con IA ({ai.message}). Se usa la del sistema.</span><Button size="sm" variant="secondary" onClick={loadAiVoice}>Reintentar</Button></div>}
          </div>
          <div className="mt-4 text-sm font-medium">Elegí la voz <span className="font-normal text-slate-500">(tocá una para escucharla)</span></div>
          <div className="mt-2 grid gap-2 sm:grid-cols-3">
            {AI_VOICES.map((v) => (
              <button key={v.id} onClick={() => pick(v.id)}
                className={cx('rounded-xl border-2 px-3 py-2 text-left transition', (s.aiVoice ?? DEFAULT_AI_VOICE) === v.id ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600')}>
                <div className="font-semibold text-slate-900 dark:text-white">{v.label}</div>
                <div className="text-xs text-slate-500">{v.desc}</div>
              </button>
            ))}
          </div>
          <label className="mt-4 block text-sm sm:w-1/2">Velocidad: <strong>{rate < 0.95 ? 'tranqui' : rate > 1.1 ? 'rápida' : 'normal'}</strong>
            <input type="range" min={0.7} max={1.3} step={0.05} value={rate} onChange={(e) => updateSettings({ voiceRate: Number(e.target.value) })} className="mt-2 w-full accent-brand-500" />
          </label>
        </>
      ) : <SystemVoice />}

      <div className="mt-4 flex flex-wrap items-center gap-3">
        <Button onClick={test}><Volume2 size={16} /> Probar voz</Button>
        <span className="text-xs italic text-slate-500">“{SAMPLES[sample]}”</span>
      </div>
    </Card>
  );
}

function SystemVoice() {
  const s = useSettings();
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>(() => englishVoices());
  useEffect(() => {
    if (!speechSupported()) return;
    const load = () => setVoices(englishVoices());
    load();
    window.speechSynthesis.addEventListener('voiceschanged', load);
    return () => window.speechSynthesis.removeEventListener('voiceschanged', load);
  }, []);
  if (!speechSupported()) return <p className="mt-3 text-sm text-slate-500">Tu navegador no puede leer en voz alta. Probá con Chrome o Edge.</p>;
  const style = s.voiceStyle ?? 'canchero';
  const preset = VOICE_STYLES[style];
  const pitch = s.voicePitch ?? preset.pitch;
  const rate = s.voiceRate ?? preset.rate;
  const current = voices.length ? resolveVoice('en-GB') : undefined;
  return (
    <>
      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {(Object.keys(VOICE_STYLES) as (keyof typeof VOICE_STYLES)[]).map((k) => (
          <button key={k} onClick={() => updateSettings({ voiceStyle: k, voicePitch: undefined, voiceRate: undefined, voiceName: '' })}
            className={cx('rounded-xl border-2 p-3 text-left transition', style === k ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600')}>
            <div className="font-semibold text-slate-900 dark:text-white">{VOICE_STYLES[k].label}</div>
            <div className="text-xs text-slate-500">{VOICE_STYLES[k].desc}</div>
          </button>
        ))}
      </div>
      <label className="mt-4 block text-sm">Voz
        <select value={s.voiceName ?? ''} onChange={(e) => updateSettings({ voiceName: e.target.value })} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
          <option value="">Automática{current ? ` (${current.name})` : ''}</option>
          {voices.map((v) => <option key={v.name} value={v.name}>{v.name} · {v.lang}</option>)}
        </select>
      </label>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <label className="text-sm">Tono: <strong>{pitch < 0.9 ? 'grave' : pitch > 1.1 ? 'agudo' : 'normal'}</strong>
          <input type="range" min={0.5} max={1.5} step={0.05} value={pitch} onChange={(e) => updateSettings({ voicePitch: Number(e.target.value) })} className="mt-2 w-full accent-brand-500" />
        </label>
        <label className="text-sm">Velocidad: <strong>{rate < 0.95 ? 'tranqui' : rate > 1.1 ? 'rápida' : 'normal'}</strong>
          <input type="range" min={0.7} max={1.3} step={0.05} value={rate} onChange={(e) => updateSettings({ voiceRate: Number(e.target.value) })} className="mt-2 w-full accent-brand-500" />
        </label>
      </div>
    </>
  );
}
export default function SettingsPage() {
  const s = useSettings();
  const fileRef = useRef<HTMLInputElement>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [key, setKey] = useState(s.aiKey);

  const doExport = () => {
    const blob = new Blob([exportProgress()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `englishpath-progreso-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const doImport = async (f: File) => {
    try { importProgress(await f.text()); notify({ kind: 'info', title: 'Progreso importado' }); }
    catch (e) { notify({ kind: 'info', title: 'No se pudo importar', body: (e as Error).message }); }
  };

  return (
    <div className="flex max-w-3xl flex-col gap-5">
      <PageHeader title="Ajustes" />
      <Card>
        <div className="mb-3 font-semibold text-slate-900 dark:text-white">Apariencia</div>
        <div className="flex flex-wrap gap-2">
          {([['light', 'Claro', Sun], ['dark', 'Oscuro', Moon], ['system', 'Sistema', Monitor]] as const).map(([t, l, Icon]) => (
            <button key={t} onClick={(e) => setThemeAnimated(t, e)} className={cx('inline-flex items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-medium', s.theme === t ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200' : 'border-slate-200 dark:border-slate-700')}><Icon size={16} />{l}</button>
          ))}
        </div>
        <label className="mt-4 flex items-center gap-2 text-sm"><input type="checkbox" checked={s.showTranslations} onChange={(e) => updateSettings({ showTranslations: e.target.checked })} className="h-4 w-4" /> Mostrar traducciones al español en los ejemplos</label>
      </Card>

      <VoiceSettings />

      <Card>
        <div className="mb-3 font-semibold text-slate-900 dark:text-white">Objetivos diarios</div>
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="text-sm">XP por día
            <select value={s.dailyXpGoal} onChange={(e) => updateSettings({ dailyXpGoal: Number(e.target.value) })} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              {[50, 100, 150, 250, 400].map((n) => <option key={n} value={n}>{n} XP {n === 50 ? '(suave)' : n === 100 ? '(normal)' : n === 150 ? '(serio)' : '(intenso)'}</option>)}
            </select>
          </label>
          <label className="text-sm">Tarjetas de vocabulario por día
            <select value={s.dailyCardsGoal} onChange={(e) => updateSettings({ dailyCardsGoal: Number(e.target.value) })} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              {[5, 10, 15, 20, 30, 50].map((n) => <option key={n} value={n}>{n}</option>)}
            </select>
          </label>
        </div>
        <p className="mt-2 text-xs text-slate-500">El plan de estudio recomienda aprender entre 20 y 60 palabras nuevas por semana.</p>
      </Card>

      <Card>
        <div className="mb-1 flex items-center gap-2 font-semibold text-slate-900 dark:text-white"><KeyRound size={18} /> English Assistant con IA (opcional)</div>
        <p className="mb-3 text-sm text-slate-500">Sin clave, el asistente solo busca en el material. Con una clave de la API de Claude (console.anthropic.com), responde preguntas, corrige oraciones y practica conversaciones. La clave se guarda únicamente en este navegador y se envía solo a api.anthropic.com. El uso de la API tiene costo en tu cuenta de Anthropic.</p>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={s.aiProvider === 'anthropic'} onChange={(e) => updateSettings({ aiProvider: e.target.checked ? 'anthropic' : 'none' })} className="h-4 w-4" /> Activar IA</label>
          <input type="password" autoComplete="off" value={key} onChange={(e) => setKey(e.target.value)} placeholder="sk-ant-…" className="input" disabled={s.aiProvider !== 'anthropic'} />
          <label className="text-sm">Modelo
            <select value={s.aiModel} onChange={(e) => updateSettings({ aiModel: e.target.value })} disabled={s.aiProvider !== 'anthropic'} className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 dark:border-slate-700 dark:bg-slate-900">
              <option value="claude-opus-5-5">Claude Opus 5.5 (recomendado)</option>
              <option value="claude-sonnet-5-5">Claude Sonnet 5.5 (más económico)</option>
              <option value="claude-haiku-5-5">Claude Haiku 5.5 (el más económico)</option>
            </select>
          </label>
          <div className="flex gap-2">
            <Button disabled={s.aiProvider !== 'anthropic'} onClick={() => { updateSettings({ aiKey: key.trim() }); notify({ kind: 'info', title: 'Clave guardada' }); }}>Guardar clave</Button>
            {s.aiKey && <Button variant="ghost" onClick={() => { setKey(''); updateSettings({ aiKey: '' }); }}>Borrar clave</Button>}
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-1 font-semibold text-slate-900 dark:text-white">Datos y progreso</div>
        <p className="mb-3 text-sm text-slate-500">Tu progreso se guarda en este navegador (almacenamiento local). Exportalo para tener una copia o pasarlo a otro dispositivo.</p>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" onClick={doExport}><Download size={16} /> Exportar progreso</Button>
          <Button variant="secondary" onClick={() => fileRef.current?.click()}><Upload size={16} /> Importar</Button>
          <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) doImport(f); e.target.value = ''; }} />
          {!confirmReset ? <Button variant="ghost" onClick={() => setConfirmReset(true)}><RotateCcw size={16} /> Reiniciar progreso</Button>
            : <><Button variant="danger" onClick={() => { resetProgress(); setConfirmReset(false); notify({ kind: 'info', title: 'Progreso reiniciado' }); }}>Sí, borrar todo</Button><Button variant="ghost" onClick={() => setConfirmReset(false)}>Cancelar</Button></>}
        </div>
      </Card>
    </div>
  );
}
