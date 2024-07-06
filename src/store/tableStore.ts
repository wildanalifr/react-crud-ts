import { create } from 'zustand'

interface BearState {
  bears: string[]
  items: string[]
  increase: (by: string) => void
  tambah: () => void // Corrected type for tambah
}

export const useBearStore = create<BearState>((set) => ({
  bears: [],
  items: [],
  increase: (by) => set((state) => ({ bears: [...state.bears, by] })),
  tambah: () => set((state) => ({ items: [...state.items, 'halooo'] })),
}))
