import { convertDateToString } from '@/utils/convertDateToString';
import { create } from 'zustand';

interface CalendarState {
  selectedDate: string; // 'yyyy-mm-dd'
  offset: number;
}

interface StoreState extends CalendarState {
  setSelectedDate: (date: string) => void;
  forwardOffset: () => void;
  backwardOffset: () => void;
}

const initialState: CalendarState = {
  selectedDate: convertDateToString(new Date()),
  offset: 0,
};

const A_DAY = 1000 * 60 * 60 * 24;
const A_WEEK = A_DAY * 7;

export const useCalendarStore = create<StoreState>((set) => ({
  ...initialState,

  setSelectedDate: (date: string) => set({ selectedDate: date }),
  forwardOffset: () =>
    set((state) => ({
      offset: state.offset + 1,
      selectedDate: convertDateToString(
        new Date(new Date(state.selectedDate).getTime() + A_WEEK)
      ).slice(0, 10),
    })),
  backwardOffset: () =>
    set((state) => ({
      offset: state.offset - 1,
      selectedDate: convertDateToString(
        new Date(new Date(state.selectedDate).getTime() - A_WEEK)
      ).slice(0, 10),
    })),
}));
