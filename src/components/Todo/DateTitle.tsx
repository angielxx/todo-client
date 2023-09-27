import { useCalendarStore } from '@/stores/useCalendarStore';
import styled from 'styled-components';

export const DateTitle = () => {
  const { selectedDate } = useCalendarStore();
  const m = selectedDate.slice(5, 7);
  const d = selectedDate.slice(8, 10);

  return <StyledTitle>{`${m}월 ${d}일`}</StyledTitle>;
};

const StyledTitle = styled.p`
  font-size: 24px;
  font-weight: 600;
  padding-top: 36px;
  margin-bottom: 16px;

  color: ${({ theme }) => theme.colors.main};
`;
