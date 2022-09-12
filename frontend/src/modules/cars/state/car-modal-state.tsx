import create from 'zustand'
import { ICar } from '../../../entities'

type Mode = 'create' | 'edit'

type State = {
  opened: boolean
  mode: Mode
  currentCar: undefined | ICar
  openModal: (mode: Mode) => void
  closeModal: () => void
  setCurrentCar: (car: ICar) => void
}

export const useCarModalState = create<State>((set) => ({
  opened: false,
  mode: 'create',
  currentCar: undefined,
  openModal: (mode: Mode) => set((state: State) => ({ opened: true, mode })),
  closeModal: () => set((state: State) => ({ opened: false, mode: 'create', currentCar: undefined })),
  setCurrentCar: (car: ICar) => set((state: State) => ({ currentCar: car })),
}))
