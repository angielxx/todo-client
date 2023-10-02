import { convertDateToString } from './convertDateToString';

export function getWeekInfo(offset: number): string[] {
  const A_DAY = 1000 * 60 * 60 * 24;
  const A_WEEK = A_DAY * 7;

  const today = new Date();
  const currentDay = today.getDay(); // 요일

  const mondayInMsc =
    today.getTime() + A_WEEK * offset - A_DAY * ((currentDay + 6) % 7);

  const daysOfWeek = ['월', '화', '수', '목', '금', '토', '일'];

  return daysOfWeek.map((day, idx) =>
    convertDateToString(new Date(mondayInMsc + A_DAY * idx))
  );
}
