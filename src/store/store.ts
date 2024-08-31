import { create } from "zustand";

interface StateStore {
  currentState: string;
  setCurrentState: (state: string) => void;
}

const useStateStore = create<StateStore>((set) => ({
  currentState: "all",
  setCurrentState: (state) => set({ currentState: state }),
}));

export default useStateStore;
