import { HTMLAttributes, ReactNode } from 'react';
import styled, { RuleSet, css } from 'styled-components';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: number;
  variant?: IconVariantType;
}

export const Icon = ({
  children,
  size = 32,
  variant = 'default',
  ...rest
}: Props) => {
  return (
    <IconWrapper $size={size} $variant={variant} {...rest}>
      {children}
    </IconWrapper>
  );
};

type IconVariantType = 'default' | 'disabled';

const VARIANTS_TYPE: { [key in IconVariantType]: RuleSet } = {
  default: css``,
  disabled: css``,
};

const IconWrapper = styled.div<{ $size: number; $variant: IconVariantType }>`
  ${({ $size, $variant, theme }) =>
    css`
      width: ${$size}px;
      height: ${$size}px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      box-sizing: border-box;
      padding: 4px;

      svg {
        fill: ${theme.colors.disabled};
      }

      &:hover {
        svg {
          fill: ${theme.colors.main};
        }
      }

      ${VARIANTS_TYPE[$variant]}
    `}
`;
