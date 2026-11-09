import { useSyncExternalStore } from 'react';

export interface Toast { id: number; kind: 'achievement' | 'info' | 'level'; title: string; body?: string }

let toasts: Toast[] = [];
const ls = new Set<() => void>();
let seq = 1;

export function notify(t: Omit<Toast, 'id'>) {
  const toast = { ...t, id: seq++ };
  toasts = [...toasts, toast];
  ls.forEach((l) => l());
  setTimeout(() => dismiss(toast.id), 4500);
}

export function dismiss(id: number) {
  toasts = toasts.filter((t) => t.id !== id);
  ls.forEach((l) => l());
}

export function useToasts() {
  return useSyncExternalStore((l) => { ls.add(l); return () => ls.delete(l); }, () => toasts);
}
