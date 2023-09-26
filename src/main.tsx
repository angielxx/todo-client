import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import { ReactQueryDevtools } from 'react-query/devtools';

import router from '@routes/router';
import { HttpClient, AuthService, TokenStorage } from '@/apis';
import { AuthProvider } from '@/context/authProvider';
import { TodoProvider } from './context/todoProvider';
import { TodoService } from './apis/TodoService';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from './styles/GlobalStyle';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 60,
      cacheTime: 1000 * 60 * 5,
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
      <GlobalStyle />
      <AuthProvider authService={authService} tokenStorage={tokenStorage}>
        <TodoProvider todoService={todoService}>
          <RouterProvider router={router} />
        </TodoProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
