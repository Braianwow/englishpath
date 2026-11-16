import { useEffect } from 'react';

/**
 * The home page is shown bigger, up to 140%, but only as much as fits: it always keeps at least
 * 1000 px of room, so the zoom never makes the layout switch to the phone version.
 * Every other page stays at the normal size.
 */
const MAX_ZOOM = 1.4;
const MIN_ROOM = 1000;

export function useHomeZoom(active: boolean) {
  useEffect(() => {
    const root = document.documentElement;
    if (!active) { root.style.setProperty('--zoom', '1'); return; }
    const fit = () => root.style.setProperty('--zoom', Math.max(1, Math.min(MAX_ZOOM, window.innerWidth / MIN_ROOM)).toFixed(3));
    fit();
    window.addEventListener('resize', fit);
    return () => { window.removeEventListener('resize', fit); root.style.setProperty('--zoom', '1'); };
  }, [active]);
}
