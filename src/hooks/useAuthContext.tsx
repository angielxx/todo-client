import { AuthDispatchContext, AuthStateContext } from '@/context/authProvider';
import { useContext } from 'react';

export const useAuthContext = () => {
  const dispatch = useContext(AuthDispatchContext);
  const state = useContext(AuthStateContext);

  if (dispatch == null || state == null) {
    throw new Error('Cannot find AuthProvider');
  }

  return { state, dispatch };
};
