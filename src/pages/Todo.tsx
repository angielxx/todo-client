import {
  AddTodoBtn,
  TodoForm,
  DateTitle,
  PageWrapper,
  TodoList,
  WeeklyCalendar,
} from '@/components';
import { ModalWrapper } from '@/components/Modal';
import { useTodoFormStore } from '@/stores/useTodoFormStore';

export const Todo = () => {
  const { showTodoForm, hideForm } = useTodoFormStore();

  return (
    <PageWrapper>
      {showTodoForm && (
        <ModalWrapper closeModal={hideForm}>
          <TodoForm />
        </ModalWrapper>
      )}
      {!showTodoForm && <AddTodoBtn />}
      <DateTitle />
      <WeeklyCalendar />
      <TodoList />
    </PageWrapper>
  );
};
