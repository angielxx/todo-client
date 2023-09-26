import { convertDateToString } from '@/utils/convertDateToString';
import { getToday } from '@/utils/getToday';
import { ChangeEvent, useState } from 'react';

const today = convertDateToString(getToday());

export const useTodoForm = () => {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>(today); // 'yyyy-mm-dd'

  const chooseDate = (date: Date) => setDate(convertDateToString(date));

  const resetForm = () => {
    setTitle('');
    setDate(today);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  return { title, date, chooseDate, resetForm, onChangeHandler };
};
