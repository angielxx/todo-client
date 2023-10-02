import { TodoData } from '@/types/todoData';
import { Button, CloseBtn } from '..';
import styled from 'styled-components';

interface Props {
  todo: TodoData;
  onCancel: () => void;
  onDelete: () => void;
}

export const DeleteModal = ({ todo, onDelete, onCancel, ...rest }: Props) => {
  return (
    <ModalContainer {...rest}>
      <div>
        <CloseBtn onClick={onCancel} />
      </div>
      <div>
        <p>
          <span>{todo.title}</span>을(를) 정말 삭제하시겠습니까?
        </p>
      </div>
      <div>
        <Button
          label="취소"
          btnSize="medium"
          variant="default"
          onClick={onCancel}
        />
        <Button label="삭제" btnSize="medium" onClick={onDelete} />
      </div>
    </ModalContainer>
  );
};

const ModalContainer = styled.div`
  width: 80vw;
  height: fit-content;
  padding: 16px;
  box-sizing: border-box;
  background-color: white;
  position: absolute;
  z-index: 21;
  position: fixed;
  display: flex;
  flex-direction: column;
  gap: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 12px;
  line-height: 1.5;
  text-align: center;
  word-break: keep-all;

  span {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.main};
  }

  div:first-child {
    display: flex;
    justify-content: flex-end;
    height: 12px;
  }

  div:last-child {
    display: flex;
    gap: 8px;
  }
`;
