import { Button, CloseBtn } from '..';
import styled from 'styled-components';
import { ReactNode } from 'react';

interface Props {
  content: ReactNode;
  cancelLabel?: string;
  confirmLabel?: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export const DeleteModal = ({
  content,
  cancelLabel = '취소',
  confirmLabel = '확인',
  onConfirm,
  onCancel,
  ...rest
}: Props) => {
  return (
    <ModalContainer {...rest}>
      <div>
        <CloseBtn onClick={onCancel} />
      </div>
      <div>
        <p>{content}</p>
      </div>
      <div>
        <Button
          label={cancelLabel}
          btnSize="medium"
          variant="default"
          onClick={onCancel}
          style={{ width: '100%' }}
        />
        <Button
          label={confirmLabel}
          btnSize="medium"
          onClick={onConfirm}
          style={{ width: '100%' }}
        />
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
