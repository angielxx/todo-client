import { getToday } from '@/utils/getToday';
import { ChangeEvent, useState } from 'react';

const today = getToday();

export const useTodoForm = () => {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<Date>(today);

  const chooseDate = (date: Date) => setDate(date);

  const resetForm = () => {
    setTitle('');
    setDate(today);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return { title, date, chooseDate, resetForm, onChangeHandler };
};
