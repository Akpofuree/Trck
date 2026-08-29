import { useSyncExternalStore } from "react";

type UiState = { sidebarOpen: boolean; activeModal: string | null };
let state: UiState = { sidebarOpen: false, activeModal: null };
const listeners = new Set<() => void>();
const subscribe = (listener: () => void) => { listeners.add(listener); return () => listeners.delete(listener); };
const getSnapshot = () => state;
const emit = () => listeners.forEach((listener) => listener());

export const uiStore = {
  getState: getSnapshot,
  toggleSidebar() { state = { ...state, sidebarOpen: !state.sidebarOpen }; emit(); },
  setModal(activeModal: string | null) { state = { ...state, activeModal }; emit(); },
};

export function useUiStore() { return useSyncExternalStore(subscribe, getSnapshot, getSnapshot); }
