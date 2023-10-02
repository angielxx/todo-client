import {
  AddTodoBtn,
  TodoForm,
  DateTitle,
  PageWrapper,
  TodoList,
  WeeklyCalendar,
  Button,
} from '@/components';
import { ModalWrapper } from '@/components/Modal';
import { useAuthContext } from '@/hooks';
import { useTodoFormStore } from '@/stores/useTodoFormStore';
import { CustomError } from '@/types/error';
import { MouseEventHandler } from 'react';
import { useNavigate } from 'react-router';

export const Todo = () => {
  const { showTodoForm, hideForm } = useTodoFormStore();

  const navigate = useNavigate();

  const {
    dispatch: { logout, onLogoutSuccess },
  } = useAuthContext();

  const requestLogout: MouseEventHandler = async (e) => {
    e.preventDefault();

    try {
      await logout();

      alert('로그아웃에 성공했습니다.');

      onLogoutSuccess();
      navigate('/signin');

      return;
    } catch (err: unknown) {
      if (err instanceof CustomError) {
        const data = err.response?.data as { message: string };
        const status = err.response?.status as number;

        if (400 <= status && status < 500) {
          alert(data.message);
          onLogoutSuccess();
          navigate('/signin');
        } else {
          alert('잠시 후 다시 시도해주세요.');
        }
      }
    }
  };

  return (
    <PageWrapper>
      {showTodoForm && (
        <ModalWrapper closeModal={hideForm}>
          <TodoForm />
        </ModalWrapper>
      )}
      {!showTodoForm && <AddTodoBtn />}
      <Button label="로그아웃" btnSize="small" onClick={requestLogout} />
      <DateTitle />
      <WeeklyCalendar />
      <TodoList />
    </PageWrapper>
  );
};
