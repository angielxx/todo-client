import { useAuthContext } from '@/hooks';
import { ReactElement, useEffect, useState } from 'react';
import { useNavigate } from 'react-router';

interface Props {
  children: ReactElement;
}

export const UnAuthGuard = ({ children }: Props) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const navigate = useNavigate();

  const {
    dispatch: { checkToken },
  } = useAuthContext();

  useEffect(() => {
    if (checkToken()) {
      navigate('/todo');
    } else {
      setIsChecked(true);
    }
  }, [children]);

  if (isChecked) {
    return <div>{children}</div>;
  } else {
    return null;
  }
};
