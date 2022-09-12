import create from 'zustand'
import { IProduct } from '../../../entities'

type Mode = 'create' | 'edit'

type State = {
  opened: boolean
  mode: Mode
  currentProduct: undefined | IProduct
  openModal: (mode: Mode) => void
  closeModal: () => void
  setCurrentProduct: (Product: IProduct) => void
}

export const useProductModalState = create<State>((set) => ({
  opened: false,
  mode: 'create',
  currentProduct: undefined,
  openModal: (mode: Mode) => set((state: State) => ({ opened: true, mode })),
  closeModal: () => set((state: State) => ({ opened: false, mode: 'create', currentProduct: undefined })),
  setCurrentProduct: (product: IProduct) => set((state: State) => ({ currentProduct: product })),
}))
