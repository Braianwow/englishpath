/**
 * Speech recognition. By default it uses the browser's Web Speech API (in Chrome/Edge it sends the
 * audio to Google's speech service). If that service fails ("network" / "service-not-allowed"),
 * or the browser doesn't have it, it switches to on-device Whisper (localStt.ts) and remembers it.
 */
import { listenLocal, localSttSupported, type ListenOpts } from './localStt';

type Rec = {
  lang: string; interimResults: boolean; continuous: boolean; maxAlternatives: number;
  onresult: ((e: { results: ArrayLike<ArrayLike<{ transcript: string }> & { isFinal: boolean }> }) => void) | null;
  onerror: ((e: { error: string }) => void) | null;
  onend: (() => void) | null;
  start(): void; stop(): void;
};

function ctor(): (new () => Rec) | null {
  const w = window as unknown as { SpeechRecognition?: new () => Rec; webkitSpeechRecognition?: new () => Rec };
  return w.SpeechRecognition ?? w.webkitSpeechRecognition ?? null;
}

const KEY = 'ep.stt';
export type SttEngine = 'browser' | 'local';
export function getSttEngine(): SttEngine {
  try { if (localStorage.getItem(KEY) === 'local') return 'local'; } catch { /* ignore */ }
  return ctor() ? 'browser' : 'local';
}
export function setSttEngine(e: SttEngine) { try { localStorage.setItem(KEY, e); } catch { /* ignore */ } }
export const browserSttAvailable = () => typeof window !== 'undefined' && !!ctor();

export const recognitionSupported = () => typeof window !== 'undefined' && (!!ctor() || localSttSupported());

export function listen(opts: ListenOpts & { continuous?: boolean }): () => void {
  if (getSttEngine() === 'local') return listenLocal(opts);
  const C = ctor()!;
  const r = new C();
  r.lang = 'en-GB';
  r.interimResults = true;
  r.continuous = !!opts.continuous;
  r.maxAlternatives = 1;
  let stopFn: () => void = () => { try { r.stop(); } catch { /* ignore */ } };
  let switched = false;
  r.onresult = (e) => {
    let text = '', final = true;
    for (let i = 0; i < e.results.length; i++) { text += e.results[i][0].transcript + ' '; final = final && e.results[i].isFinal; }
    opts.onText(text.trim(), final);
  };
  r.onerror = (e) => {
    if ((e.error === 'network' || e.error === 'service-not-allowed' || e.error === 'language-not-supported') && localSttSupported()) {
      // the browser's speech service is not reachable from this browser: use on-device recognition instead
      switched = true;
      setSttEngine('local');
      opts.onStatus?.("Your browser's speech service isn't available, so I switched to on-device recognition. Speak now…");
      stopFn = listenLocal(opts);
      return;
    }
    opts.onError(
      e.error === 'not-allowed' ? 'No permission to use the microphone. Allow it in the browser (padlock icon next to the address).'
        : e.error === 'no-speech' ? 'Nothing was heard. Try again, closer to the microphone.'
        : e.error === 'aborted' ? '' : `Speech recognition error: ${e.error}`,
    );
  };
  r.onend = () => { if (!switched) opts.onEnd(); };
  try { r.start(); } catch { opts.onEnd(); }
  return () => stopFn();
}
