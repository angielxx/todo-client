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
  ${({ $variant }) => TYPE_VARIANTS[$variant]}
  ${({ $size }) => SIZE_VARIANTS[$size]}
`;

type VariantsType = 'default' | 'disabled';

type SizeType = 'small' | 'medium' | 'large';

const TYPE_VARIANTS: { [key in VariantsType]: RuleSet } = {
  default: css``,
  disabled: css``,
};

const SIZE_VARIANTS: { [key in SizeType]: RuleSet } = {
  small: css``,
  medium: css``,
  large: css``,
};
