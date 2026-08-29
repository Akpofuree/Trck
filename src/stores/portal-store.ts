import { useSyncExternalStore } from "react";

export type PortalName = "public" | "host" | "admin";
type PortalState = { activePortal: PortalName; lastVisited: Partial<Record<PortalName, string>> };
let state: PortalState = { activePortal: "public", lastVisited: {} };
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener); };
const getSnapshot = () => state;
const emit = () => listeners.forEach((listener) => listener());

export const portalStore = {
  getState: getSnapshot,
  setActivePortal(activePortal: PortalName) { state = { ...state, activePortal }; emit(); },
  rememberRoute(portal: PortalName, path: string) { state = { ...state, lastVisited: { ...state.lastVisited, [portal]: path } }; emit(); },
};

export function usePortalStore() { return useSyncExternalStore(subscribe, getSnapshot, getSnapshot); }
