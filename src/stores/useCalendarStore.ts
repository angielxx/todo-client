import { create } from 'zustand';

interface CalendarState {
  selectedDate: Date;
  offset: number;
}

interface StoreState extends CalendarState {
  setSelectedDate: (date: Date) => void;
  nextOffset: () => void;
  prevOffset: () => void;
}

const initialState: CalendarState = {
  selectedDate: new Date(),
  offset: 0,
};

export const useCalendarStore = create<StoreState>((set) => ({
  ...initialState,

  setSelectedDate: (date: Date) => set({ selectedDate: date }),
  nextOffset: () => set((state) => ({ offset: state.offset + 1 })),
  prevOffset: () => set((state) => ({ offset: state.offset - 1 })),
}));
