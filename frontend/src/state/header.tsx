import create from 'zustand'

type State = {
  title: string
  changeTitle: (title: string) => void
}

export const useHeaderState = create<State>((set) => ({
  title: '',
  changeTitle: (newTitle: string) => set((state: State) => ({ title: newTitle })),
}))
