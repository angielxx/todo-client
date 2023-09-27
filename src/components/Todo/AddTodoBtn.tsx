import styled from 'styled-components';

import { useTodoStore } from '@/stores/useTodoStore';

export const AddTodoBtn = () => {
  const { showForm } = useTodoStore();

  const showTodoForm = () => showForm();

  return (
    <BtnWrapper onClick={showTodoForm}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 448 512"
      >
        <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
      </svg>
    </BtnWrapper>
  );
};

const BtnWrapper = styled.div`
  width: 48px;
  height: 48px;
  position: absolute;
  background-color: ${({ theme }) => theme.colors.main};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 99px;
  cursor: pointer;
  bottom: 24px;
  right: 24px;

  svg {
    fill: white;
  }
`;
