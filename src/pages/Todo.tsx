import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

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
import { DeleteModal } from '@/components/Modal/DeleteModal';
import { useAuthContext } from '@/hooks';
import { useTodoFormStore } from '@/stores/useTodoFormStore';
import { CustomError } from '@/types/error';

export const Todo = () => {
  const { showTodoForm, hideForm } = useTodoFormStore();

  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    dispatch: { logout, onLogoutSuccess },
  } = useAuthContext();

  const requestLogout = async () => {
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

  const closeLogoutModal = () => setShowLogoutModal(false);

  const openLogoutModal = () => setShowLogoutModal(true);

  return (
    <PageWrapper>
      {showLogoutModal && (
        <ModalWrapper closeModal={closeLogoutModal}>
          <DeleteModal
            content={<p>정말 로그아웃 하시겠습니까?</p>}
            confirmLabel="로그아웃"
            onCancel={closeLogoutModal}
            onConfirm={requestLogout}
          />
        </ModalWrapper>
      )}
      {showTodoForm && (
        <ModalWrapper closeModal={hideForm}>
          <TodoForm />
        </ModalWrapper>
      )}
      {!showTodoForm && <AddTodoBtn />}
      <LogoutContainer>
        <Button
          label="로그아웃"
          btnSize="small"
          variant="default"
          onClick={openLogoutModal}
        />
      </LogoutContainer>
      <DateTitle />
      <WeeklyCalendar />
      <TodoList />
    </PageWrapper>
  );
};

const LogoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;
