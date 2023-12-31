import { ReactElement, createContext, useState } from 'react';

import { TodoService } from '@/apis/TodoService';
import { TodoData } from '@/types/todoData';
import { AxiosResponse } from 'axios';

type TodoDispatch = {
  getTodos: () => void;
  getTodoByDate: (date: string) => Promise<TodoData[]>;
  createTodo: (data: Omit<TodoData, 'todoId'>) => Promise<TodoData>;
  updateTodo: (data: TodoData) => Promise<TodoData>;
  deleteTodo: (todoId: number) => Promise<AxiosResponse>;
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
    getTodoByDate: todoService.getTodoByDate.bind(todoService),
    createTodo: todoService.createTodo.bind(todoService),
    updateTodo: todoService.updateTodo.bind(todoService),
    deleteTodo: todoService.deleteTodo.bind(todoService),
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
