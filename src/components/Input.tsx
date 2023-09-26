import styled, { RuleSet, css } from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: InputVariantsType;
  inputSize?: SizeType;
}

export const Input = ({
  variant = 'default',
  inputSize = 'small',
  ...rest
}: InputProps) => {
  return (
    <StyledInput
      $variant={variant}
      $size={inputSize}
      autoComplete="off"
      {...rest}
    />
  );
};

const StyledInput = styled.input<{
  $variant: InputVariantsType;
  $size: SizeType;
}>`
  width: 100%;
  font-size: 16px;
  height: 40px;
  box-sizing: border-box;
  outline: 0;
  border: 1px solid;
  border-color: ${({ theme }) => theme.colors.disabled};
  color: ${({ theme }) => theme.colors.textMain};
  border-radius: 8px;
  padding-left: 8px;

  ${({ $variant }) => TYPE_VARIANTS[$variant]}
  ${({ $size }) => SIZE_VARIANTS[$size]}
`;

export type InputVariantsType = 'default' | 'active' | 'inValid' | 'valid';

type SizeType = 'small' | 'medium' | 'large';

const TYPE_VARIANTS: { [key in InputVariantsType]: RuleSet } = {
  default: css`
    &::placeholder {
      color: ${({ theme }) => theme.colors.textDisabled};
      font-size: 14px;
    }
  `,
  active: css``,
  inValid: css`
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.fail};
  `,
  valid: css`
    border: 1px solid;
    border-color: ${({ theme }) => theme.colors.main};
  `,
};

const SIZE_VARIANTS: { [key in SizeType]: RuleSet } = {
  small: css``,
  medium: css``,
  large: css``,
};
