import { getToday } from '@/utils/getToday';
import { ChangeEvent, useState } from 'react';

const today = getToday();

export const useTodoForm = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const [date, setDate] = useState<Date>(today);

  const chooseDate = (date: Date) => setDate(date);

  const resetForm = () => {
    setInputValue('');
    setDate(today);
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return { inputValue, date, chooseDate, resetForm, onChangeHandler };
};
