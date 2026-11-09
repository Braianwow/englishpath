import { useEffect, useSyncExternalStore } from 'react';
import { addStudySeconds, getProgress } from './progress';
import { notify } from './toast';
import { todayKey } from '../lib/dates';
import { DAILY_GOAL_MIN, SECTION_GOAL_SECS, type SectionId, totalSecs } from '../lib/studyTime';

/**
 * Live study timer. Seconds are counted only while a study section is open,
 * the tab is visible and the learner did something in the last 2 minutes.
 * Pending seconds are saved into the day log every 15 s and when the tab is hidden.
 */
const IDLE_MS = 2 * 60_000;
const FLUSH_EVERY = 15;

type Status = 'running' | 'idle' | 'off';
let pending: Record<string, number> = {};
let pendingDate = todayKey();
let status: Status = 'off';
let version = 0;
const listeners = new Set<() => void>();
const emit = () => { version++; listeners.forEach((l) => l()); };
const subscribe = (l: () => void) => { listeners.add(l); return () => listeners.delete(l); };

function flush() {
  if (totalSecs(pending) > 0) {
    const delta = pending;
    pending = {};
    addStudySeconds(pendingDate, delta);
  }
  pendingDate = todayKey();
}

/** Seconds per section for today, including the ones not saved yet. */
export function todaySecs(): Record<string, number> {
  const saved = getProgress().days[todayKey()]?.secs ?? {};
  if (pendingDate !== todayKey()) return { ...saved };
  const out = { ...saved };
  for (const [k, v] of Object.entries(pending)) out[k] = (out[k] ?? 0) + v;
  return out;
}

export function useStudyTime() {
  useSyncExternalStore(subscribe, () => version);
  const secs = todaySecs();
  const minutes = Math.max(getProgress().days[todayKey()]?.minutes ?? 0, Math.floor(totalSecs(secs) / 60));
  return { secs, minutes, status };
}

/** Mount once (in the layout) with the section of the current page. */
export function useStudyTimer(section: SectionId | null, label: string) {
  useEffect(() => {
    let last = Date.now();
    const mark = () => { last = Date.now(); if (status === 'idle') { status = section ? 'running' : 'off'; emit(); } };
    const events = ['pointerdown', 'keydown', 'scroll', 'touchstart', 'wheel'] as const;
    events.forEach((e) => window.addEventListener(e, mark, { passive: true }));
    const onHide = () => { if (document.visibilityState === 'hidden') flush(); };
    document.addEventListener('visibilitychange', onHide);
    window.addEventListener('pagehide', flush);

    const id = window.setInterval(() => {
      if (pendingDate !== todayKey()) flush(); // midnight: close the previous day
      const active = !!section && document.visibilityState === 'visible' && Date.now() - last < IDLE_MS;
      const next: Status = !section ? 'off' : active ? 'running' : 'idle';
      if (!active) { if (next !== status) { status = next; emit(); } return; }
      status = 'running';
      const before = todaySecs();
      pending[section] = (pending[section] ?? 0) + 1;
      const sec = before[section] ?? 0;
      if (sec + 1 === SECTION_GOAL_SECS) {
        notify({ kind: 'info', title: `¡30 minutos de ${label}!`, body: 'Bloque completado. Podés seguir o pasar a otra sección.' });
        flush();
      }
      if (totalSecs(before) + 1 === DAILY_GOAL_MIN * 60) {
        notify({ kind: 'level', title: '¡2 horas cumplidas!', body: 'Hoy suma a tu racha.' });
        flush();
      }
      if (totalSecs(pending) >= FLUSH_EVERY) flush();
      emit();
    }, 1000);

    status = section ? 'running' : 'off';
    emit();
    return () => {
      events.forEach((e) => window.removeEventListener(e, mark));
      document.removeEventListener('visibilitychange', onHide);
      window.removeEventListener('pagehide', flush);
      window.clearInterval(id);
      flush();
    };
  }, [section, label]);
}
