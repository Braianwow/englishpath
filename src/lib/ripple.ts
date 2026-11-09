/**
 * Adds a soft "ripple" wave from the point you touch on any button or tappable
 * element. One global listener, so every button in the app gets it.
 */
export function installRipple() {
  if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
  document.addEventListener('pointerdown', (e) => {
    const el = (e.target as HTMLElement | null)?.closest<HTMLElement>('button, .pressable, a.chip');
    if (!el || (el as HTMLButtonElement).disabled || el.getAttribute('role') === 'switch') return;
    const rect = el.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const span = document.createElement('span');
    span.className = 'ripple';
    span.style.width = span.style.height = `${size}px`;
    span.style.left = `${e.clientX - rect.left - size / 2}px`;
    span.style.top = `${e.clientY - rect.top - size / 2}px`;
    el.classList.add('ripple-host');
    el.appendChild(span);
    span.addEventListener('animationend', () => span.remove());
  }, { passive: true });
}
