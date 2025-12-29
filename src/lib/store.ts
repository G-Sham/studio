import { create } from 'zustand';

interface AppState {
  selectedBrandId: string;
  selectedModuleId: string | null;
  setSelectedBrand: (id: string) => void;
  setSelectedModule: (id: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  selectedBrandId: 'brand-1',
  // FIX: Changed from 'module-1' to 'serp-analysis' to match data.ts
  selectedModuleId: 'serp-analysis', 
  setSelectedBrand: (id) => set({ selectedBrandId: id }),
  setSelectedModule: (id) => set({ selectedModuleId: id }),
}));