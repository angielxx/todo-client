import { ReactElement, createContext, useState } from 'react';

import { TodoService } from '@/apis/TodoService';
import { TodoType } from '@/types/todoData';

type TodoDispatch = {
  getTodos: () => void;
  saveTodos: (todos: TodoType[]) => void;
};

type TodoState = {
  todos: TodoType[];
};

export const TodoDispatchContext = createContext<TodoDispatch | null>(null);
export const TodoStateContext = createContext<TodoState | null>(null);

type TodoProps = {
  children: ReactElement;
  todoService: TodoService;
};

export const TodoProvider = ({ children, todoService }: TodoProps) => {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const saveTodos = (todos: TodoType[]) => setTodos(todos);

  const state: TodoState = {
    todos,
  };

  const dispatch: TodoDispatch = {
    getTodos: todoService.getTodo.bind(todoService),
    saveTodos,
  };

  return (
    <TodoDispatchContext.Provider value={dispatch}>
      <TodoStateContext.Provider value={state}>
        {children}
      </TodoStateContext.Provider>
    </TodoDispatchContext.Provider>
  );
};
