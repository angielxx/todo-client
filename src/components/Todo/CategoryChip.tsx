import styled from 'styled-components';

interface Props {
  title: string;
  color: string;
}

export const CategoryChip = ({ title, color }: Props) => {
  return <StyledChip $color={color}>{title}</StyledChip>;
};

const StyledChip = styled.div<{ $color: string }>`
  background-color: ${(props) => props.$color};
  font-size: 12px;
`;
