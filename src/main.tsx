import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';

import router from '@routes/router';
import { HttpClient, AuthService, TokenStorage } from '@/apis';
import { AuthProvider } from '@/context/authProvider';
import { TodoProvider } from './context/todoProvider';
import { TodoService } from './apis/TodoService';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 5,
      retry: false,
      // suspense: true,
      // useErrorBoundary: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    },
  },
});

const tokenStorage = new TokenStorage();

const httpClient = new HttpClient(import.meta.env.VITE_BASE_URL, tokenStorage);

const authService = new AuthService(httpClient);
const todoService = new TodoService(httpClient);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider authService={authService} tokenStorage={tokenStorage}>
          <TodoProvider todoService={todoService}>
            <RouterProvider router={router} />
          </TodoProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
