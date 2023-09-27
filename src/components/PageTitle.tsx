import styled from 'styled-components';

interface Props {
  title: string;
}

export const PageTitle = ({ title }: Props) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const StyledTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;

  color: ${({ theme }) => theme.colors.main};
`;
