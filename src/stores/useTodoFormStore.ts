import { TodoData } from '@/types/todoData';
import { create } from 'zustand';

interface TodoFormState {
  showTodoForm: boolean;
  todo: TodoData | null;
  isEditMode: boolean;
}

interface StoreState extends TodoFormState {
  setShowTodoForm: (value: boolean) => void;
  hideForm: () => void;
  showForm: () => void;
  saveTodoData: (todo: TodoData) => void;
  setIsEditMode: (val: boolean) => void;
  resetFormStore: () => void;
}

const initialState: TodoFormState = {
  showTodoForm: false,
  todo: null,
  isEditMode: false,
};

export const useTodoFormStore = create<StoreState>((set) => ({
  ...initialState,

  setShowTodoForm: (value: boolean) => set({ showTodoForm: value }),
  hideForm: () => set({ showTodoForm: false }),
  showForm: () => set({ showTodoForm: true }),
  setIsEditMode: (val: boolean) => set({ isEditMode: val }),
  saveTodoData: (todo: TodoData) => set({ todo }),

  resetFormStore: () => set({ ...initialState }),
}));
