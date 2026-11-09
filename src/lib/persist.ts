import { useEffect, useRef, useState } from 'react';

/**
 * Autosave for work in progress (a card session, an exercise set, a conversation):
 * the state is kept in this browser so a reload (F5) continues where you were.
 */
const PREFIX = 'ep.s.';

export function loadSaved<T>(key: string): T | undefined {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : undefined;
  } catch { return undefined; }
}

export function saveState(key: string, value: unknown) {
  try {
    if (value === undefined || value === null) localStorage.removeItem(PREFIX + key);
    else localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch { /* storage full or blocked: work continues without autosave */ }
}

export const clearSaved = (key: string) => saveState(key, null);

/** useState that survives a page reload. `key` null = don't persist. */
export function usePersisted<T>(key: string | null, initial: T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    const saved = key ? loadSaved<T>(key) : undefined;
    if (saved !== undefined) return saved;
    return typeof initial === 'function' ? (initial as () => T)() : initial;
  });
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (key) saveState(key, value);
  }, [key, value]);
  return [value, setValue];
}
