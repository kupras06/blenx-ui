import { create } from "zustand";

type TSiderbarStore = {
  isOpen: boolean;
  toggle: () => void;
  setOpen: (open: boolean) => void;
};

export const useSidebarStore = create<TSiderbarStore>((set) => ({
  isOpen: false,
  toggle: () => {
    set((prev) => ({ isOpen: !prev.isOpen }));
  },
  setOpen: (open: boolean) => {
    set({ isOpen: open });
  },
}));
