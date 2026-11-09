import type { Settings } from '../types';
import { updateSettings } from '../store/progress';

const reduced = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
const willBeDark = (t: Settings['theme']) => t === 'dark' || (t === 'system' && window.matchMedia?.('(prefers-color-scheme: dark)').matches);

/**
 * Changes the theme with an animation: a circle that grows from where you
 * clicked (View Transitions API), or a smooth colour fade in other browsers.
 */
export function setThemeAnimated(theme: Settings['theme'], e?: { clientX: number; clientY: number }) {
  const apply = () => updateSettings({ theme });
  const changes = willBeDark(theme) !== document.documentElement.classList.contains('dark');
  if (!changes || reduced()) { apply(); return; }

  const doc = document as Document & { startViewTransition?: (cb: () => void) => { ready: Promise<void> } };
  if (!doc.startViewTransition) {
    document.documentElement.classList.add('theme-fade');
    apply();
    window.setTimeout(() => document.documentElement.classList.remove('theme-fade'), 500);
    return;
  }
  const x = e?.clientX ?? window.innerWidth / 2;
  const y = e?.clientY ?? 0;
  const r = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));
  doc.startViewTransition(apply).ready.then(() => {
    document.documentElement.animate(
      { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
      { duration: 550, easing: 'cubic-bezier(.4,0,.2,1)', pseudoElement: '::view-transition-new(root)' },
    );
  }).catch(() => { /* ignore */ });
}

export function toggleThemeAnimated(e?: { clientX: number; clientY: number }) {
  setThemeAnimated(document.documentElement.classList.contains('dark') ? 'light' : 'dark', e);
}
