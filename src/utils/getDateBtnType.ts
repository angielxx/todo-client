import { DateBtnType } from '@/hooks';
import { getToday } from './getToday';
import { convertDateToString } from './convertDateToString';

const A_DAY = 1000 * 60 * 60 * 24;

export function getDateBtnType(selectedDate: string): DateBtnType {
  const today = convertDateToString(getToday());
  const tomorrow = convertDateToString(new Date(getToday().getTime() + A_DAY));

  if (selectedDate === today) {
    return 'today';
  } else if (selectedDate === tomorrow) {
    return 'tomorrow';
  } else {
    return 'calendar';
  }
}
