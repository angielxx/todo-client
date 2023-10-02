import { useAuthContext } from '@/hooks';
import { ReactElement, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface Props {
  children: ReactElement;
}

export const AuthGuard = ({ children }: Props) => {
  const navigate = useNavigate();

  const {
    dispatch: { checkToken },
  } = useAuthContext();

  useEffect(() => {
    if (checkToken()) {
      navigate('/todo');
    } else {
      navigate('/signin');
    }
  }, [children]);

  return <div>{children}</div>;
};
