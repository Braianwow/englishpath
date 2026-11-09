import { Award, Info, X } from 'lucide-react';
import { dismiss, useToasts } from '../store/toast';

export default function Toasts() {
  const toasts = useToasts();
  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 flex w-[calc(100%-2rem)] max-w-sm flex-col gap-2" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className="pointer-events-auto flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg animate-fade-up dark:border-slate-700 dark:bg-slate-900">
          <div className={t.kind === 'achievement' ? 'rounded-xl bg-amber-100 p-2 text-amber-600 dark:bg-amber-500/15 dark:text-amber-300' : 'rounded-xl bg-brand-100 p-2 text-brand-600 dark:bg-brand-500/15'}>
            {t.kind === 'achievement' ? <Award size={18} /> : <Info size={18} />}
          </div>
          <div className="min-w-0 flex-1">
            <div className="font-semibold text-slate-900 dark:text-white">{t.title}</div>
            {t.body && <div className="text-sm text-slate-500 dark:text-slate-400">{t.body}</div>}
          </div>
          <button onClick={() => dismiss(t.id)} className="text-slate-400 hover:text-slate-600" aria-label="Close"><X size={16} /></button>
        </div>
      ))}
    </div>
  );
}
