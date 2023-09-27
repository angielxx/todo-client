import styled from 'styled-components';

import { getWeekInfo } from '@/utils/getWeekInfo';
import { WeeklyCalendarItem } from '.';
import { useCalendarStore } from '@/stores/useCalendarStore';
import { OffsetBtn } from './OffsetBtn';
import { useCallback } from 'react';

export const WeeklyCalendar = () => {
  const { selectedDate, offset, forwardOffset, backwardOffset } =
    useCalendarStore();

  const week = ['월', '화', '수', '목', '금', '토', '일'];

  const getWeek = useCallback(() => {
    return getWeekInfo(offset);
  }, [offset]);

  const weekInfo = getWeek();

  return (
    <Wrapper>
      <OffsetBtn type="backward" onClick={backwardOffset} />
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
              key={date}
              date={date}
              isSelected={selectedDate === date}
            />
          ))}
        </RowWrapper>
      </WeekWrapper>
      <OffsetBtn type="forward" onClick={forwardOffset} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const WeekWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
  box-sizing: border-box;

  .day {
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const RowWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
