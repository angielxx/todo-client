import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { HTMLAttributes, ReactNode } from 'react';

const portalElement = document.getElementById('modal') as HTMLElement;

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  closeModal: () => void;
}

export const ModalWrapper = ({ children, closeModal }: Props) => {
  return (
    <>
      {createPortal(
        <>
          {children}
          <BackDrop onClick={closeModal} />
        </>,
        portalElement
      )}
    </>
  );
};

const BackDrop = ({ ...rest }) => {
  return <StyledBackDrop {...rest} />;
};

const StyledBackDrop = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;
