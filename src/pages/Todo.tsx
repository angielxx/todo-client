import {
  AddTodoBtn,
  AddTodoForm,
  DateTitle,
  PageWrapper,
  TodoList,
  WeeklyCalendar,
} from '@/components';
import { useTodoStore } from '@/stores/useTodoStore';

export const Todo = () => {
  const { showTodoForm } = useTodoStore();

  return (
    <PageWrapper>
      {showTodoForm && <AddTodoForm />}
      {!showTodoForm && <AddTodoBtn />}
      <DateTitle />
      <WeeklyCalendar />
      <TodoList />
    </PageWrapper>
  );
};
