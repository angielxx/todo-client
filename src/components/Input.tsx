import styled, { RuleSet, css } from 'styled-components';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: VariantsType;
  inputSize?: SizeType;
}

export const Input = ({
  variant = 'default',
  inputSize = 'small',
  ...rest
}: InputProps) => {
  return <StyledInput $variant={variant} $size={inputSize} {...rest} />;
};

const StyledInput = styled.input<{
  $variant: VariantsType;
  $size: SizeType;
}>`
  width: 100%;

  ${({ $variant }) => TYPE_VARIANTS[$variant]}
  ${({ $size }) => SIZE_VARIANTS[$size]}
`;

type VariantsType = 'default' | 'active' | 'inValid' | 'valid';

type SizeType = 'small' | 'medium' | 'large';

const TYPE_VARIANTS: { [key in VariantsType]: RuleSet } = {
  default: css``,
  active: css``,
  inValid: css``,
  valid: css``,
};

const SIZE_VARIANTS: { [key in SizeType]: RuleSet } = {
  small: css``,
  medium: css``,
  large: css``,
};
