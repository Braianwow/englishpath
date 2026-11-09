import { useEffect, useState } from 'react';
import { updateSettings, useSettings } from '../store/progress';
import { listVoices, type ElevenVoice } from '../lib/elevenlabs';
import { speak } from '../lib/speech';
import { Button, cx } from './ui';

/** Settings for the ElevenLabs voice: the learner's key, quality and voice. */
export default function ElevenPanel() {
  const s = useSettings();
  const [key, setKey] = useState(s.elevenKey ?? '');
  const [voices, setVoices] = useState<ElevenVoice[] | null>(null);
  const [err, setErr] = useState('');
  const [busy, setBusy] = useState(false);

  const load = async (k = s.elevenKey) => {
    if (!k) return;
    setBusy(true); setErr('');
    try { setVoices(await listVoices(k)); } catch (e) { setErr((e as Error).message); setVoices(null); } finally { setBusy(false); }
  };
  useEffect(() => { load(); }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const save = () => { updateSettings({ elevenKey: key.trim() }); load(key.trim()); };
  const choose = (v: ElevenVoice) => {
    updateSettings({ elevenVoiceId: v.voice_id, elevenVoiceName: v.name });
    setTimeout(() => speak("Hey… you came back. I knew you would. Let's learn some English.", 'en-US', 1), 0);
  };

  return (
    <div className="mt-4 flex flex-col gap-3">
      <p className="text-sm text-slate-500">
        Creá una cuenta en elevenlabs.io, entrá a <em>Developers → API Keys</em> y pegá la clave acá. Se guarda solo en este navegador y se envía únicamente a api.elevenlabs.io.
        Cada frase leída usa créditos de tu cuenta (el plan gratis trae unos minutos por mes).
      </p>
      <div className="flex gap-2">
        <input type="password" autoComplete="off" value={key} onChange={(e) => setKey(e.target.value)} placeholder="Clave de API de ElevenLabs" className="input" />
        <Button onClick={save} disabled={!key.trim() || busy}>{busy ? 'Cargando…' : 'Guardar'}</Button>
      </div>
      {err && <p className="text-sm text-rose-600 dark:text-rose-400">{err}</p>}
      {s.elevenKey && voices && (
        <>
          <label className="text-sm">Calidad
            <select value={s.elevenModel ?? 'eleven_multilingual_v2'} onChange={(e) => updateSettings({ elevenModel: e.target.value as 'eleven_flash_v2_5' | 'eleven_multilingual_v2' })}
              className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3 py-2 sm:w-1/2 dark:border-slate-700 dark:bg-slate-900">
              <option value="eleven_multilingual_v2">Más expresiva (Multilingual v2)</option>
              <option value="eleven_flash_v2_5">Más rápida y barata (Flash v2.5), ideal para conversar</option>
            </select>
          </label>
          <div className="text-sm font-medium">
            Elegí la voz <span className="font-normal text-slate-500">(tocá una para escucharla). Para voces con más actitud, agregalas desde la Voice Library de ElevenLabs y tocá “Volver a cargar”.</span>
          </div>
          <div className="grid max-h-80 gap-2 overflow-y-auto pr-1 sm:grid-cols-2">
            {voices.map((v) => (
              <button key={v.voice_id} onClick={() => choose(v)}
                className={cx('rounded-xl border-2 px-3 py-2 text-left transition', s.elevenVoiceId === v.voice_id ? 'border-brand-500 bg-brand-50 dark:bg-brand-500/10' : 'border-slate-200 hover:border-slate-300 dark:border-slate-700 dark:hover:border-slate-600')}>
                <div className="font-semibold text-slate-900 dark:text-white">{v.name}{v.labels?.gender === 'male' && <span className="ml-1 text-xs font-normal text-slate-500">♂</span>}</div>
                <div className="text-xs text-slate-500">{[v.labels?.accent, v.labels?.age, v.labels?.description ?? v.labels?.descriptive, v.labels?.use_case].filter(Boolean).join(' · ') || v.category}</div>
              </button>
            ))}
          </div>
          <Button variant="secondary" size="sm" className="self-start" onClick={() => load()}>Volver a cargar voces</Button>
          {!s.elevenVoiceId && <p className="text-sm text-amber-600 dark:text-amber-400">Elegí una voz para empezar a usarla. Mientras tanto suena la voz gratis.</p>}
        </>
      )}
    </div>
  );
}
