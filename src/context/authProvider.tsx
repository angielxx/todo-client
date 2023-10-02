import { AxiosResponse } from 'axios';
import { ReactElement, createContext, useState } from 'react';

import { AuthService, TokenStorage } from '@/apis';

type AuthDispatch = {
  signup: (email: string, password: string) => Promise<AxiosResponse>;
  signin: (email: string, password: string) => Promise<AxiosResponse>;
  logout: () => Promise<AxiosResponse>;
  onLoginSuccess: (access_token: string, refresh_token: string) => void;
  onLogoutSuccess: () => void;
  checkToken: () => boolean;
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
    logout: authService.logout.bind(authService),
    checkToken: checkToken,
    onLoginSuccess: onLoginSuccess,
    onLogoutSuccess,
  };

  function onLoginSuccess(access_token: string, refresh_token: string) {
    setIsLoggedIn(true);
    tokenStorage.save(access_token, refresh_token);
  }

  function onLogoutSuccess() {
    setIsLoggedIn(false);
    tokenStorage.remove();
  }

  function refreshToken() {
    const response = authService.refreshToken.bind(authService);
    console.log('토큰 리프레시 응답', response);
  }

  function checkToken() {
    const token = tokenStorage.get();
    if (token) return true;
    else return false;
  }

  return (
    <AuthStateContext.Provider value={state}>
      <AuthDispatchContext.Provider value={dispatch}>
        {children}
      </AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};
