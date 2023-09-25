import { ReactElement, createContext, useState } from 'react';

import { TodoService } from '@/apis/TodoService';
import { CreateTodoRequestData, TodoData } from '@/types/todoData';

type TodoDispatch = {
  getTodos: () => void;
  createTodo: (data: CreateTodoRequestData) => void;
  saveTodos: (todos: TodoData[]) => void;
};

type TodoState = {
  todos: TodoData[];
};

export const TodoDispatchContext = createContext<TodoDispatch | null>(null);
export const TodoStateContext = createContext<TodoState | null>(null);

type TodoProps = {
  children: ReactElement;
  todoService: TodoService;
};

export const TodoProvider = ({ children, todoService }: TodoProps) => {
  const [todos, setTodos] = useState<TodoData[]>([]);

  const saveTodos = (todos: TodoData[]) => setTodos(todos);

  const state: TodoState = {
    todos,
  };

  const dispatch: TodoDispatch = {
    getTodos: todoService.getTodo.bind(todoService),
    createTodo: todoService.createTodo.bind(todoService),
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
