import create from 'zustand'
import { IBrand } from '../../../entities'

type Mode = 'create' | 'edit'

type State = {
  opened: boolean
  mode: Mode
  currentBrand: undefined | IBrand
  openModal: (mode: Mode) => void
  closeModal: () => void
  setCurrentBrand: (brand: IBrand) => void
}

export const useBrandModalState = create<State>((set) => ({
  opened: false,
  mode: 'create',
  currentBrand: undefined,
  openModal: (mode: Mode) => set((state: State) => ({ opened: true, mode })),
  closeModal: () => set((state: State) => ({ opened: false, mode: 'create', currentBrand: undefined })),
  setCurrentBrand: (brand: IBrand) => set((state: State) => ({ currentBrand: brand })),
}))
