import styled, { RuleSet, css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantsType;
  btnSize?: ButtonSizeType;
  label: string;
}

export const Button = ({
  variant = 'active',
  btnSize = 'large',
  label,
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton
      $variant={variant}
      $btnSize={btnSize}
      disabled={variant === 'disabled' ? true : false}
      {...rest}
    >
      {label}
    </StyledButton>
  );
};

type ButtonVariantsType = 'disabled' | 'active' | 'default';

type ButtonSizeType = 'small' | 'medium' | 'large';

const StyledButton = styled.button<{
  $variant: ButtonVariantsType;
  $btnSize: ButtonSizeType;
}>`
  border: none;
  height: 48px;
  width: 100%;
  border-radius: 12px;

  ${({ $variant }) => TYPE_VARIANTS[$variant]}
  ${({ $btnSize }) => SIZE_VARIANTS[$btnSize]}
`;

const TYPE_VARIANTS: { [key in ButtonVariantsType]: RuleSet } = {
  disabled: css`
    background-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.textDisabled};
  `,
  active: css`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.main};
    color: white;
  `,
  default: css`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.fontMain};
  `,
};

const SIZE_VARIANTS: { [key in ButtonSizeType]: RuleSet } = {
  small: css`
    height: 32px;
  `,
  medium: css`
    height: 40px;
  `,
  large: css`
    height: 48px;
  `,
};
