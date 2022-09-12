import create from 'zustand'
import { ICostumer } from '../../../entities'

type Mode = 'create' | 'edit'

type State = {
  opened: boolean
  mode: Mode
  currentCostumer: undefined | ICostumer
  openModal: (mode: Mode) => void
  closeModal: () => void
  setCurrentCostumer: (Costumer: ICostumer) => void
}

export const useCostumerModalState = create<State>((set) => ({
  opened: false,
  mode: 'create',
  currentCostumer: undefined,
  openModal: (mode: Mode) => set((state: State) => ({ opened: true, mode })),
  closeModal: () => set((state: State) => ({ opened: false, mode: 'create', currentCostumer: undefined })),
  setCurrentCostumer: (costumer: ICostumer) => set((state: State) => ({ currentCostumer: costumer })),
}))
