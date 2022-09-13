import create from 'zustand'
import { IRepair } from '../../../entities'

type Mode = 'create' | 'edit'

type State = {
  opened: boolean
  mode: Mode
  currentRepair: undefined | IRepair
  openModal: (mode: Mode) => void
  closeModal: () => void
  setCurrentRepair: (repair: IRepair) => void
}

export const useRepairModalState = create<State>((set) => ({
  opened: false,
  mode: 'create',
  currentRepair: undefined,
  openModal: (mode: Mode) => set((state: State) => ({ opened: true, mode })),
  closeModal: () => set((state: State) => ({ opened: false, mode: 'create', currentRepair: undefined })),
  setCurrentRepair: (repair: IRepair) => set((state: State) => ({ currentRepair: repair })),
}))
