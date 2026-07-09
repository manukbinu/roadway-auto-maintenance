import { create } from 'zustand'

export const useScrollStore = create((set) => ({
  progress: 0,
  heroDone: false,
  cameraStops: null,
  setProgress: (progress) => set({ progress }),
  setHeroDone: (heroDone) => set({ heroDone }),
  setCameraStops: (cameraStops) => set({ cameraStops }),
}))
