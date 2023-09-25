import { ReactElement } from 'react';

interface Props {
  children: ReactElement;
}

export const AuthGuard = ({ children }: Props) => {
  return <div>{children}</div>;
};
