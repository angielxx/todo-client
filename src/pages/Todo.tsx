import {
  AddTodoBtn,
  TodoForm,
  DateTitle,
  PageWrapper,
  TodoList,
  WeeklyCalendar,
} from '@/components';
import { useTodoFormStore } from '@/stores/useTodoFormStore';

export const Todo = () => {
  const { showTodoForm } = useTodoFormStore();

  return (
    <PageWrapper>
      {showTodoForm && <TodoForm />}
      {!showTodoForm && <AddTodoBtn />}
      <DateTitle />
      <WeeklyCalendar />
      <TodoList />
    </PageWrapper>
  );
};
