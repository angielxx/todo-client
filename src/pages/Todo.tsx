import { AddTodoBtn } from '@/components/Todo';
import { AddTodoForm } from '@/components/Todo/AddTodoForm';
import { DateTitle } from '@/components/Todo/DateTitle';
import { TodoList } from '@/components/Todo/TodoList';
import { WeeklyCalendar } from '@/components/Todo/WeeklyCalendar';
import { useTodoStore } from '@/stores/useTodoStore';

export const Todo = () => {
  const { showTodoForm, showForm } = useTodoStore();

  return (
    <div>
      {showTodoForm && <AddTodoForm />}
      {!showTodoForm && <AddTodoBtn onClick={showForm} />}
      <DateTitle />
      <WeeklyCalendar />
      <TodoList />
    </div>
  );
};
