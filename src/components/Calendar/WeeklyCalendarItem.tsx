import { useCalendarStore } from '@/stores/useCalendarStore';
import styled from 'styled-components';

interface Props {
  date: string; // 'yyyy-mm-dd'
  isSelected: boolean;
}

export const WeeklyCalendarItem = ({ date, isSelected }: Props) => {
  const { setSelectedDate } = useCalendarStore();

  const selectThisDate = () => setSelectedDate(date);

  return (
    <ItemWrapper $isSelected={isSelected} onClick={selectThisDate}>
      <p className="date">{date.slice(8, 10)}</p>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div<{ $isSelected: boolean }>`
  justify-content: center;
  align-items: center;
  cursor: pointer;

  p {
    font-size: 16px;
  }

  .day {
    color: ${({ $isSelected }) => ($isSelected ? '#39AFF2' : '#171717')};
  }

  .date {
    color: ${({ $isSelected }) => ($isSelected ? 'white' : '#171717')};
    background-color: ${({ $isSelected }) => ($isSelected ? '#39AFF2' : '')};
    border-radius: 99px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
