import { TodoDispatchContext, TodoStateContext } from '@/context/todoProvider';
import { useContext } from 'react';

export const useTodoContext = () => {
  const dispatch = useContext(TodoDispatchContext);
  const state = useContext(TodoStateContext);

  if (dispatch == null || state == null) {
    throw new Error('Cannot find TodoProvider');
  }

  return { state, dispatch };
};
