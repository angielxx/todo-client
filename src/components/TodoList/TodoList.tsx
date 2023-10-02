import { useQuery } from 'react-query';
import styled from 'styled-components';

import { useTodoContext } from '@/hooks';
import { useCalendarStore } from '@/stores/useCalendarStore';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const { selectedDate: date } = useCalendarStore();

  const {
    dispatch: { getTodoByDate },
  } = useTodoContext();

  const { data: todos } = useQuery(['todos', date], () => getTodoByDate(date));

  return (
    <TodoListContainer>
      {todos?.map((todo) => (
        <TodoListItem key={todo.todoId} todo={todo} />
      ))}
      {!todos?.length && (
        <EmptyMsg>
          <p>할 일이 없습니다.</p>
        </EmptyMsg>
      )}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  width: 100%;
  height: calc(100vh - 204px);
`;

const EmptyMsg = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.textSub};
`;
