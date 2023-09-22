import React from 'react';
import styled from 'styled-components';

import { Input } from './Input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  message: string;
}

export const InputOfForm = ({ label, message, ...rest }: Props) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input type="text" {...rest} />
      <Message>{message}</Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Message = styled.p`
  font-size: 12px;
`;
