import { create } from 'zustand';

interface TodoState {
  showTodoForm: boolean;
}

interface StoreState extends TodoState {
  setShowTodoForm: (value: boolean) => void;
  hideForm: () => void;
  showForm: () => void;
}

const initialState: TodoState = {
  showTodoForm: false,
};

export const useTodoStore = create<StoreState>((set) => ({
  ...initialState,

  setShowTodoForm: (value: boolean) => set({ showTodoForm: value }),
  hideForm: () => set({ showTodoForm: false }),
  showForm: () => set({ showTodoForm: true }),
}));
