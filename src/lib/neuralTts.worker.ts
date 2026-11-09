/// <reference lib="webworker" />
/**
 * Runs the Kokoro-82M text-to-speech model (Apache-2.0) inside the browser.
 * The model (~90 MB) is downloaded once from Hugging Face and cached by the browser.
 */
import { KokoroTTS } from 'kokoro-js';

type In =
  | { type: 'load' }
  | { type: 'speak'; id: number; text: string; voice: string; speed: number };

const MODEL = 'onnx-community/Kokoro-82M-v1.0-ONNX';
let tts: Promise<KokoroTTS> | null = null;

/** The GPU (WebGPU) is many times faster; without it the CPU version (smaller, quantized) is used. */
async function hasGpu(): Promise<boolean> {
  try {
    const gpu = (navigator as unknown as { gpu?: { requestAdapter(): Promise<unknown> } }).gpu;
    return !!gpu && !!(await gpu.requestAdapter());
  } catch { return false; }
}

function load(): Promise<KokoroTTS> {
  if (!tts) {
    const files: Record<string, { loaded: number; total: number }> = {};
    tts = hasGpu().then((gpu) => KokoroTTS.from_pretrained(MODEL, {
      dtype: gpu ? 'fp32' : 'q8',
      device: gpu ? 'webgpu' : 'wasm',
      progress_callback: (p: { status: string; file?: string; loaded?: number; total?: number }) => {
        if (p.status === 'progress' && p.file && p.total) {
          files[p.file] = { loaded: p.loaded ?? 0, total: p.total };
          const all = Object.values(files);
          const loaded = all.reduce((a, f) => a + f.loaded, 0), total = all.reduce((a, f) => a + f.total, 0);
          postMessage({ type: 'progress', progress: total ? loaded / total : 0, mb: Math.round(total / 1e6) });
        }
      },
    }).then(async (m) => {
      // warm-up so the first real sentence is fast
      try { await m.generate('Hi.', { voice: 'am_michael' }); } catch { /* ignore */ }
      postMessage({ type: 'ready', device: gpu ? 'gpu' : 'cpu' });
      return m;
    }))
      .catch((e) => { tts = null; postMessage({ type: 'failed', message: String(e?.message ?? e) }); throw e; });
  }
  return tts;
}

self.onmessage = async (e: MessageEvent<In>) => {
  const msg = e.data;
  if (msg.type === 'load') { load().catch(() => {}); return; }
  try {
    const model = await load();
    const out = await model.generate(msg.text, { voice: msg.voice as never, speed: msg.speed });
    const audio = out.audio as Float32Array;
    postMessage({ type: 'audio', id: msg.id, audio, sr: out.sampling_rate }, { transfer: [audio.buffer] });
  } catch (err) {
    postMessage({ type: 'error', id: msg.id, message: String((err as Error)?.message ?? err) });
  }
};
