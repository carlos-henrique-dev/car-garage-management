import create from 'zustand'
import { IEmployee } from '../../../entities'

type Mode = 'create' | 'edit'

type State = {
  opened: boolean
  mode: Mode
  currentEmployee: undefined | IEmployee
  openModal: (mode: Mode) => void
  closeModal: () => void
  setCurrentEmployee: (employee: IEmployee) => void
}

export const useEmployeeModalState = create<State>((set) => ({
  opened: false,
  mode: 'create',
  currentEmployee: undefined,
  openModal: (mode: Mode) => set((state: State) => ({ opened: true, mode })),
  closeModal: () => set((state: State) => ({ opened: false, mode: 'create', currentEmployee: undefined })),
  setCurrentEmployee: (employee: IEmployee) => set((state: State) => ({ currentEmployee: employee })),
}))
