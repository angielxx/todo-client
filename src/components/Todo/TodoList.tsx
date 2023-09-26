import { useQuery } from 'react-query';

import { useTodoContext } from '@/hooks';
import { useCalendarStore } from '@/stores/useCalendarStore';
import { TodoListItem } from './TodoListItem';

export const TodoList = () => {
  const { selectedDate } = useCalendarStore();

  const date = selectedDate.toISOString().slice(0, 10);

  const {
    dispatch: { getTodoByDate },
  } = useTodoContext();

  const { data: todos } = useQuery(['todos', date], () => getTodoByDate(date));

  return (
    <div>
      {todos?.map((todo) => (
        <TodoListItem key={todo.todoId} todo={todo} />
      ))}
    </div>
  );
};
