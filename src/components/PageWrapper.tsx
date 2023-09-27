import { ReactNode } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
}

export const PageWrapper = ({ children }: Props) => {
  return <StyledWrapper>{children}</StyledWrapper>;
};

const StyledWrapper = styled.div`
  padding: 24px;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
`;
