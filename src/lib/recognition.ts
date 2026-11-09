/**
 * Speech recognition through the browser's Web Speech API (Chrome / Edge).
 * Not every browser has it; callers check `recognitionSupported()` first.
 */
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

export const recognitionSupported = () => typeof window !== 'undefined' && !!ctor();

export function listen(opts: { onText: (t: string, final: boolean) => void; onEnd: () => void; onError: (msg: string) => void; continuous?: boolean }) {
  const C = ctor();
  if (!C) { opts.onError('Tu navegador no permite reconocimiento de voz. Probá con Chrome o Edge.'); opts.onEnd(); return () => {}; }
  const r = new C();
  r.lang = 'en-GB';
  r.interimResults = true;
  r.continuous = !!opts.continuous;
  r.maxAlternatives = 1;
  r.onresult = (e) => {
    let text = '', final = true;
    for (let i = 0; i < e.results.length; i++) { text += e.results[i][0].transcript + ' '; final = final && e.results[i].isFinal; }
    opts.onText(text.trim(), final);
  };
  r.onerror = (e) => opts.onError(
    e.error === 'not-allowed' ? 'No hay permiso para usar el micrófono. Habilitalo en el navegador.'
      : e.error === 'no-speech' ? 'No se escuchó nada. Probá de nuevo, más cerca del micrófono.'
      : e.error === 'network' ? 'El reconocimiento de voz necesita conexión a internet.'
      : e.error === 'aborted' ? '' : `Error de reconocimiento: ${e.error}`,
  );
  r.onend = opts.onEnd;
  try { r.start(); } catch { opts.onEnd(); }
  return () => { try { r.stop(); } catch { /* ignore */ } };
}
