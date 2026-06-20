import { create } from "zustand";
import type { TocItem } from "@/utils/extractHeadings";

interface DocsTocStore {
  items: TocItem[];
  setItems: (items: TocItem[]) => void;
  clearItems: () => void;
}

export const useDocsTocStore = create<DocsTocStore>((set) => ({
  items: [],
  setItems: (items: TocItem[]) => set({ items }),
  clearItems: () => set({ items: [] }),
}));
