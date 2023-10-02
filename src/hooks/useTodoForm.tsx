import { TodoData } from '@/types/todoData';
import { convertDateToString } from '@/utils/convertDateToString';
import { getDateBtnType } from '@/utils/getDateBtnType';
import { getToday } from '@/utils/getToday';
import { ChangeEvent, useState } from 'react';

const today = convertDateToString(getToday());
const tomorrow = convertDateToString(
  new Date(getToday().getTime() + 1000 * 60 * 60 * 24)
);

export type DateBtnType = 'today' | 'tomorrow' | 'calendar';

export const useTodoForm = (todo?: TodoData | null) => {
  const [title, setTitle] = useState<string>(todo ? todo.title : '');
  const [date, setDate] = useState<string>(todo ? todo.date : today); // 'yyyy-mm-dd'
  const [selectedDateBtnType, setSelectedDateBtnType] = useState<DateBtnType>(
    todo ? getDateBtnType(todo?.date) : 'today'
  );
  const [isAbleToSubmit, setIsAbleToSubmit] = useState<boolean>(
    todo ? todo.title.trim() !== '' : false
  );

  const chooseDate = (dateType: DateBtnType, selectedDate?: string) => {
    if (dateType === 'today') {
      setDate(today);
      setSelectedDateBtnType('today');
    }

    if (dateType === 'tomorrow') {
      setDate(tomorrow);
      setSelectedDateBtnType('tomorrow');
    }

    if (dateType === 'calendar') {
      if (!selectedDate) return;

      setDate(selectedDate);
      setSelectedDateBtnType('calendar');
    }
  };

  const resetForm = () => {
    setTitle('');
    setDate(today);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsAbleToSubmit(e.target.value.trim() !== '');
  };

  return {
    title,
    date,
    isAbleToSubmit,
    selectedDateBtnType,
    chooseDate,
    resetForm,
    onChangeHandler,
  };
};
