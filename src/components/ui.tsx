import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { Link } from 'react-router-dom';

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ');

export function Card({ children, className, ...rest }: { children: ReactNode; className?: string } & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cx('rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:shadow-none', className)} {...rest}>
      {children}
    </div>
  );
}

type Variant = 'primary' | 'secondary' | 'ghost' | 'success' | 'danger';
const VARIANTS: Record<Variant, string> = {
  primary: 'bg-brand-500 text-slate-950 hover:bg-brand-400 shadow-sm shadow-brand-600/20 disabled:bg-brand-200 dark:disabled:bg-brand-900 dark:disabled:text-slate-400',
  secondary: 'bg-white text-slate-800 ring-1 ring-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-100 dark:ring-slate-700 dark:hover:bg-slate-700',
  ghost: 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800',
  success: 'bg-emerald-600 text-white hover:bg-emerald-700',
  danger: 'bg-rose-600 text-white hover:bg-rose-700',
};

export const Button = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: 'sm' | 'md' | 'lg' }>(function Button({ variant = 'primary', size = 'md', className, ...rest }, ref) {
  return (
    <button
      ref={ref}
      className={cx(
        'pressable inline-flex items-center justify-center gap-2 rounded-xl font-semibold hover:-translate-y-px disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0',
        size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2.5 text-sm',
        VARIANTS[variant], className,
      )}
      {...rest}
    />
  );
});

export function LinkButton({ to, variant = 'primary', size = 'md', className, children }: { to: string; variant?: Variant; size?: 'sm' | 'md' | 'lg'; className?: string; children: ReactNode }) {
  return (
    <Link
      to={to}
      className={cx(
        'pressable inline-flex items-center justify-center gap-2 rounded-xl font-semibold hover:-translate-y-px',
        size === 'sm' ? 'px-3 py-1.5 text-sm' : size === 'lg' ? 'px-6 py-3 text-base' : 'px-4 py-2.5 text-sm',
        VARIANTS[variant], className,
      )}
    >
      {children}
    </Link>
  );
}

export function Progress({ value, className, color = 'bg-brand-500' }: { value: number; className?: string; color?: string }) {
  const v = Math.max(0, Math.min(1, value));
  return (
    <div className={cx('h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800', className)} role="progressbar" aria-valuenow={Math.round(v * 100)} aria-valuemin={0} aria-valuemax={100}>
      <div className={cx('h-full rounded-full transition-all duration-500', color)} style={{ width: `${v * 100}%` }} />
    </div>
  );
}

export function Ring({ value, size = 88, stroke = 8, children, color = 'stroke-brand-500' }: { value: number; size?: number; stroke?: number; children?: ReactNode; color?: string }) {
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const v = Math.max(0, Math.min(1, value));
  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} className="fill-none stroke-slate-100 dark:stroke-slate-800" />
        <circle cx={size / 2} cy={size / 2} r={r} strokeWidth={stroke} strokeLinecap="round" className={cx('fill-none transition-all duration-700', color)} strokeDasharray={c} strokeDashoffset={c * (1 - v)} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">{children}</div>
    </div>
  );
}

export function Badge({ children, tone = 'slate', className }: { children: ReactNode; tone?: 'slate' | 'brand' | 'green' | 'amber' | 'rose' | 'sky'; className?: string }) {
  const tones = {
    slate: 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300',
    brand: 'bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300',
    green: 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-300',
    amber: 'bg-amber-50 text-amber-700 dark:bg-amber-500/15 dark:text-amber-300',
    rose: 'bg-rose-50 text-rose-700 dark:bg-rose-500/15 dark:text-rose-300',
    sky: 'bg-sky-50 text-sky-700 dark:bg-sky-500/15 dark:text-sky-300',
  };
  return <span className={cx('inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium', tones[tone], className)}>{children}</span>;
}

export function PageHeader({ title, subtitle, actions, eyebrow }: { title: ReactNode; subtitle?: ReactNode; actions?: ReactNode; eyebrow?: ReactNode }) {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div className="min-w-0">
        {eyebrow && <div className="mb-1 text-sm font-medium text-brand-600 dark:text-brand-300">{eyebrow}</div>}
        <h1 className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl dark:text-white">{title}</h1>
        {subtitle && <p className="mt-1 text-slate-500 dark:text-slate-400">{subtitle}</p>}
      </div>
      {actions && <div className="flex flex-wrap gap-2">{actions}</div>}
    </div>
  );
}

export function Empty({ icon, title, children }: { icon?: ReactNode; title: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 p-8 text-center dark:border-slate-700">
      {icon && <div className="mb-3 text-slate-400">{icon}</div>}
      <div className="font-semibold text-slate-700 dark:text-slate-200">{title}</div>
      {children && <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{children}</div>}
    </div>
  );
}

export function SourceTag({ src }: { src: 'egu' | 'obj' | 'plan' | 'extra' | 'cuad' | 'set' }) {
  const map = {
    cuad: ['Cuadernillo B1–B2', 'green'],
    set: ['Ejercicios por unidad', 'brand'],
    egu: ['English Grammar in Use', 'brand'],
    obj: ['Objective First Workbook', 'sky'],
    plan: ['Plan de estudio B1–B2', 'amber'],
    extra: ['Complementario', 'slate'],
  } as const;
  const [label, tone] = map[src];
  return <Badge tone={tone}>{label}</Badge>;
}

/** Renders **bold** and line breaks from content strings. */
export function Rich({ text, className }: { text: string; className?: string }) {
  const paras = text.split(/\n\n+/);
  return (
    <div className={cx('space-y-3', className)}>
      {paras.map((p, i) => (
        <p key={i} className="leading-relaxed">
          {p.split(/(\*\*[^*]+\*\*|\*[^*]+\*)/g).map((seg, j) =>
            seg.startsWith('**') ? <strong key={j} className="font-semibold text-slate-900 dark:text-white">{seg.slice(2, -2)}</strong>
              : seg.startsWith('*') && seg.endsWith('*') && seg.length > 2 ? <em key={j} className="text-brand-700 not-italic font-medium dark:text-brand-300">{seg.slice(1, -1)}</em>
              : <span key={j}>{seg}</span>,
          )}
        </p>
      ))}
    </div>
  );
}

export function Stat({ icon, label, value, hint }: { icon: ReactNode; label: string; value: ReactNode; hint?: ReactNode }) {
  return (
    <Card className="flex items-start gap-3 p-4">
      <div className="rounded-xl bg-slate-100 p-2 text-slate-600 dark:bg-slate-800 dark:text-slate-300">{icon}</div>
      <div className="min-w-0">
        <div className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
        <div className="font-display text-xl font-bold text-slate-900 dark:text-white">{value}</div>
        {hint && <div className="truncate text-xs text-slate-500 dark:text-slate-400">{hint}</div>}
      </div>
    </Card>
  );
}
