/// <reference lib="webworker" />
/**
 * A small language model (Qwen2.5-0.5B-Instruct, Apache-2.0) running in the browser with WebGPU,
 * so Jake can follow a free conversation without any API key. Downloaded once (~800 MB) and cached.
 */
import { pipeline, type TextGenerationPipeline } from '@huggingface/transformers';

type Msg = { role: 'system' | 'user' | 'assistant'; content: string };
type In = { type: 'load'; model?: string; dtype?: string } | { type: 'chat'; id: number; messages: Msg[]; maxTokens: number; model?: string; dtype?: string };

const DEFAULT_MODEL = 'onnx-community/Qwen2.5-0.5B-Instruct';
let gen: Promise<TextGenerationPipeline> | null = null;

function load(model = DEFAULT_MODEL, dtype = 'q4') {
  if (!gen) {
    const files: Record<string, { loaded: number; total: number }> = {};
    gen = (async () => {
      const p = (await pipeline('text-generation', model, {
        device: 'webgpu',
        dtype: dtype as 'q4f16',
        progress_callback: (e: { status: string; file?: string; loaded?: number; total?: number }) => {
          if (e.status === 'progress' && e.file && e.total) {
            files[e.file] = { loaded: e.loaded ?? 0, total: e.total };
            const all = Object.values(files);
            const loaded = all.reduce((a, f) => a + f.loaded, 0), total = all.reduce((a, f) => a + f.total, 0);
            postMessage({ type: 'progress', progress: total ? loaded / total : 0, mb: Math.round(total / 1e6) });
          }
        },
      })) as unknown as TextGenerationPipeline;
      // warm-up (compiles the GPU shaders) so the first real reply is fast
      try { await p([{ role: 'user', content: 'Hi' }] as never, { max_new_tokens: 2 } as never); } catch { /* ignore */ }
      postMessage({ type: 'ready' });
      return p;
    })();
    gen.catch((e) => { gen = null; postMessage({ type: 'failed', message: String((e as Error)?.message ?? e) }); });
  }
  return gen;
}

self.onmessage = async (ev: MessageEvent<In>) => {
  const msg = ev.data;
  if (msg.type === 'load') { load(msg.model, msg.dtype).catch(() => {}); return; }
  try {
    const p = await load(msg.model, msg.dtype);
    const out = await p(msg.messages as never, { max_new_tokens: msg.maxTokens, do_sample: false, repetition_penalty: 1.1 } as never) as unknown as { generated_text: Msg[] }[];
    const conv = out[0]?.generated_text;
    const text = Array.isArray(conv) ? conv[conv.length - 1]?.content ?? '' : String(conv ?? '');
    postMessage({ type: 'result', id: msg.id, text: text.trim() });
  } catch (e) {
    postMessage({ type: 'result', id: msg.id, text: '', error: String((e as Error)?.message ?? e) });
  }
};
