/// <reference lib="webworker" />
/**
 * On-device speech recognition with Whisper (MIT licence), so the microphone works even when
 * the browser's own speech service (Google's, in Chrome/Edge) is unavailable.
 * The model is downloaded once from Hugging Face and cached by the browser.
 */
import { pipeline, type AutomaticSpeechRecognitionPipeline } from '@huggingface/transformers';

type In = { type: 'load' } | { type: 'transcribe'; id: number; audio: Float32Array };

// GPU: the more accurate base model; CPU: the tiny model, several times faster
const MODEL_GPU = 'onnx-community/whisper-base.en';
const MODEL_CPU = 'onnx-community/whisper-tiny.en';
let asr: Promise<AutomaticSpeechRecognitionPipeline> | null = null;

async function hasGpu(): Promise<boolean> {
  try {
    const gpu = (navigator as unknown as { gpu?: { requestAdapter(): Promise<unknown> } }).gpu;
    return !!gpu && !!(await gpu.requestAdapter());
  } catch { return false; }
}

function load() {
  if (!asr) {
    const files: Record<string, { loaded: number; total: number }> = {};
    asr = hasGpu().then(async (gpu) => {
      const p = await pipeline('automatic-speech-recognition', gpu ? MODEL_GPU : MODEL_CPU, {
        device: gpu ? 'webgpu' : 'wasm',
        dtype: gpu ? { encoder_model: 'fp32', decoder_model_merged: 'q4' } : 'q8',
        progress_callback: (e: { status: string; file?: string; loaded?: number; total?: number }) => {
          if (e.status === 'progress' && e.file && e.total) {
            files[e.file] = { loaded: e.loaded ?? 0, total: e.total };
            const all = Object.values(files);
            const loaded = all.reduce((a, f) => a + f.loaded, 0), total = all.reduce((a, f) => a + f.total, 0);
            postMessage({ type: 'progress', progress: total ? loaded / total : 0, mb: Math.round(total / 1e6) });
          }
        },
      });
      // warm-up: the first run compiles the model, so do it now instead of on the first answer
      try { await (p as unknown as (a: Float32Array) => Promise<unknown>)(new Float32Array(16000)); } catch { /* ignore */ }
      postMessage({ type: 'ready' });
      return p as AutomaticSpeechRecognitionPipeline;
    });
    asr.catch((e) => { asr = null; postMessage({ type: 'error', message: String((e as Error)?.message ?? e) }); });
  }
  return asr;
}

self.onmessage = async (ev: MessageEvent<In>) => {
  const msg = ev.data;
  if (msg.type === 'load') { load(); return; }
  try {
    const p = await load();
    const out = await p(msg.audio, { language: undefined, chunk_length_s: 30 } as never);
    const text = (Array.isArray(out) ? out[0]?.text : (out as { text: string }).text) ?? '';
    postMessage({ type: 'result', id: msg.id, text: text.trim() });
  } catch (e) {
    postMessage({ type: 'result', id: msg.id, text: '', error: String((e as Error)?.message ?? e) });
  }
};
