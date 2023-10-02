import { useMutation, useQueryClient } from 'react-query';

import { useTodoContext } from '.';
import { TodoData } from '@/types/todoData';

export const useTodoQuery = (todo?: TodoData | null) => {
  const queryClient = useQueryClient();

  const {
    dispatch: { createTodo, updateTodo, deleteTodo },
  } = useTodoContext();

  const { mutate: createTodoMutation } = useMutation(createTodo, {
    onSuccess: (newTodo: TodoData) => {
      if (todo) queryClient.invalidateQueries(['todos', todo.date]);
      queryClient.invalidateQueries(['todos', newTodo.date]);
    },
  });

  const { mutate: updateTodoMutation } = useMutation(updateTodo, {
    onSuccess: (updatedTodo) => {
      if (todo) queryClient.invalidateQueries(['todos', todo.date]);
      queryClient.invalidateQueries(['todos', updatedTodo.date]);
    },
  });

  const { mutate: deleteTodoMutation } = useMutation(deleteTodo, {
    onSuccess: () => {
      if (todo) queryClient.invalidateQueries(['todos', todo.date]);
    },
  });

  return { createTodoMutation, updateTodoMutation, deleteTodoMutation };
};
