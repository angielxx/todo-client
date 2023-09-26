import { useCalendarStore } from '@/stores/useCalendarStore';

export const DateTitle = () => {
  const { selectedDate } = useCalendarStore();
  const m = selectedDate.getMonth() + 1;
  const d = selectedDate.getDate();

  return <p>{`${m}월 ${d}일`}</p>;
};
