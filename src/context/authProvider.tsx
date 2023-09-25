import { AxiosResponse } from 'axios';
import { ReactElement, createContext, useState } from 'react';

import { AuthService, TokenStorage } from '@/apis';

type AuthDispatch = {
  signup: (email: string, password: string) => Promise<AxiosResponse>;
  signin: (email: string, password: string) => Promise<AxiosResponse>;
  onLoginSuccess: (token: string) => void;
};

type AuthState = {
  isLoggedIn: boolean;
};

export const AuthStateContext = createContext<AuthState | null>(null);
export const AuthDispatchContext = createContext<AuthDispatch | null>(null);

type AuthProps = {
  children: ReactElement;
  authService: AuthService;
  tokenStorage: TokenStorage;
};

export const AuthProvider = ({
  children,
  authService,
  tokenStorage,
}: AuthProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const state: AuthState = {
    isLoggedIn,
  };

  const dispatch: AuthDispatch = {
    signup: authService.signup.bind(authService),
    signin: authService.signin.bind(authService),
    onLoginSuccess: onLoginSuccess,
  };

  function onLoginSuccess(token: string) {
    setIsLoggedIn(true);
    tokenStorage.save(token);
  }

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
