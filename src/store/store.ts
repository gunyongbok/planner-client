import { create } from "zustand";

interface StateStore {
  currentState: string;
  setCurrentState: (state: string) => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const useStateStore = create<StateStore>((set) => ({
  currentState: "all",
  setCurrentState: (state) => set({ currentState: state }),

  // 다크 모드 상태 추가
  isDarkMode: false,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useStateStore;
