import { convertDateToString } from '@/utils/convertDateToString';
import { getToday } from '@/utils/getToday';
import { ChangeEvent, useState } from 'react';

const today = convertDateToString(getToday());
const tomorrow = convertDateToString(
  new Date(getToday().getTime() + 1000 * 60 * 60 * 24)
);

type DateBtnType = 'today' | 'tomorrow' | 'calendar';

export const useTodoForm = () => {
  const [title, setTitle] = useState<string>('');
  const [date, setDate] = useState<string>(today); // 'yyyy-mm-dd'
  const [selectedDateBtnType, setSelectedDateBtnType] =
    useState<DateBtnType>('today');
  const [isAbleToSubmit, setIsAbleToSubmit] = useState<boolean>(false);

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
