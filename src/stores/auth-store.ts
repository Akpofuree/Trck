import { useSyncExternalStore } from "react";

export interface SessionUser { id: string; name: string; email: string; role: "attendee" | "host" | "admin" }
type AuthState = { user: SessionUser | null; isLoading: boolean };
let state: AuthState = { user: null, isLoading: false };
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((listener) => listener());
const subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener); };
const getSnapshot = () => state;

export const authStore = {
  getState: getSnapshot,
  setUser(user: SessionUser | null) { state = { ...state, user }; emit(); },
  setLoading(isLoading: boolean) { state = { ...state, isLoading }; emit(); },
  clear() { state = { user: null, isLoading: false }; emit(); },
};

export function useAuthStore() { return useSyncExternalStore(subscribe, getSnapshot, getSnapshot); }
