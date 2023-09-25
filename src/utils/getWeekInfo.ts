import { WeekInfo } from '@/types/todoPage';

export function getWeekInfo(selectedDate: Date, offset: number): WeekInfo {
  const A_DAY = 1000 * 60 * 60 * 24;
  const A_WEEK = A_DAY * 7;

  const currentDay = selectedDate.getDay();

  const mondayInMsc =
    selectedDate.getTime() + A_WEEK * offset - A_DAY * ((currentDay + 6) % 7);

  const daysOfWeek = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

  return daysOfWeek.map((day, idx) => new Date(mondayInMsc + A_DAY * idx));
}
