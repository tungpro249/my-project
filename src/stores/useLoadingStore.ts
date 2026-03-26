import { create } from "zustand";

interface LoadingState {
  isLoading: boolean;
  show: () => void;
  hide: () => void;
  toggle: (value: boolean) => void;
}

export const useLoadingStore = create<LoadingState>((set) => ({
  isLoading: false,
  show: () => set({ isLoading: true }),
  hide: () => set({ isLoading: false }),
  toggle: (value) => set({ isLoading: value }),
}));
