import styled, { RuleSet, css } from 'styled-components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantsType;
  btnSize?: ButtonSizeType;
  label: string;
}

export const Button = ({
  variant = 'default',
  btnSize = 'small',
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

type ButtonVariantsType = 'disabled' | 'default';

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
`;

const TYPE_VARIANTS: { [key in ButtonVariantsType]: RuleSet } = {
  disabled: css`
    background-color: ${({ theme }) => theme.colors.disabled};
    color: ${({ theme }) => theme.colors.textDisabled};
  `,
  default: css`
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.main};
    color: white;
  `,
};
