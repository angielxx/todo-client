import { useMutation, useQueryClient } from 'react-query';

import { useTodoContext } from '.';
import { TodoData } from '@/types/todoData';

export const useTodoQuery = (todo?: TodoData) => {
  const queryClient = useQueryClient();

  const {
    dispatch: { createTodo, updateTodo },
  } = useTodoContext();

  const { mutate: createTodoMutation } = useMutation(createTodo, {
    onSuccess: (newTodo: TodoData) => {
      if (todo) queryClient.invalidateQueries(['todos', todo.date]);
      queryClient.invalidateQueries(['todos', newTodo.date]);
    },
  });

  const { mutate: updateTodoMutation } = useMutation(updateTodo, {
    onSuccess: (updatedTodo) => {
      queryClient.invalidateQueries(['todos', updatedTodo.date]);
    },
  });

  return { createTodoMutation, updateTodoMutation };
};
