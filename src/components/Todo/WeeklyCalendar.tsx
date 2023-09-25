import styled from 'styled-components';

import { getWeekInfo } from '@/utils/getWeekInfo';
import { WeeklyCalendarItem } from '.';
import { useCalendarStore } from '@/stores/useCalendarStore';

export const WeeklyCalendar = () => {
  const { selectedDate, offset } = useCalendarStore();

  const week = ['월', '화', '수', '목', '금', '토', '일'];

  const weekInfo = getWeekInfo(selectedDate, offset);

  return (
    <WeekWrapper>
      <RowWrapper>
        {week.map((day) => (
          <div className="day" key={day}>
            <p>{day}</p>
          </div>
        ))}
      </RowWrapper>
      <RowWrapper>
        {weekInfo.map((date) => (
          <WeeklyCalendarItem
            key={date.getTime()}
            date={date}
            isSelected={selectedDate.getTime() === date.getTime()}
          />
        ))}
      </RowWrapper>
    </WeekWrapper>
  );
};

const WeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  padding: 24px;
  box-sizing: border-box;

  .day {
    width: 32px;
    height: 32px;
    justify-content: center;
    align-items: center;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
