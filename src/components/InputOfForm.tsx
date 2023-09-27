import React from 'react';
import styled, { css, RuleSet } from 'styled-components';

import { Input, InputVariantsType } from './Input';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  message: string;
  variant: InputVariantsType;
}

export const InputOfForm = ({ label, message, variant, ...rest }: Props) => {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <Input type="text" variant={variant} {...rest} />
      <Message $variant={variant}>{message}</Message>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Message = styled.p<{ $variant: InputVariantsType }>`
  font-size: 12px;
  height: 12px;
  width: 100%;
  text-align: right;
  margin-top: 8px;

  ${({ $variant }) => TYPE_VARIANTS[$variant]}
`;

const TYPE_VARIANTS: { [key in InputVariantsType]: RuleSet } = {
  default: css`
    color: ${({ theme }) => theme.colors.textDisabled};
  `,
  active: css``,
  inValid: css`
    color: ${({ theme }) => theme.colors.fail};
  `,
  valid: css`
    color: ${({ theme }) => theme.colors.main};
  `,
};
