import { HTMLAttributes } from 'react';
import styled, { RuleSet, css } from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  isSelected: boolean;
}

export const DateBtn = ({ label, isSelected, ...rest }: Props) => {
  const variant = isSelected ? 'selected' : 'default';

  return (
    <CommonStyle $variant={variant} {...rest}>
      {label}
    </CommonStyle>
  );
};

export const CommonStyle = styled.div<{ $variant: DateBtnVariantsType }>`
  height: 40px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  font-size: 16px;
  box-sizing: border-box;
  cursor: pointer;

  ${({ $variant }) => TYPE_VARIANTS[$variant]}
`;

type DateBtnVariantsType = 'default' | 'selected';

const TYPE_VARIANTS: { [key in DateBtnVariantsType]: RuleSet } = {
  default: css`
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.textDisabled};
  `,
  selected: css`
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.main};
    color: white;
    background-color: ${({ theme }) => theme.colors.main};
  `,
};
