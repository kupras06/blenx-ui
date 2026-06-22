import { create } from "zustand";

type TThemeStore = {
  themeMode: "light" | "dark";
  setThemeMode: (mode: "light" | "dark") => void;
};

export const useThemeStore = create<TThemeStore>((set) => ({
  themeMode: "light",
  setThemeMode: (mode: "light" | "dark") => {
    set({ themeMode: mode });
  },
}));
