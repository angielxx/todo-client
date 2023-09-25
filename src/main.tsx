import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

import router from '@routes/router';
import { HttpClient, AuthService, TokenStorage } from '@/apis';
import { AuthProvider } from '@/context/authProvider';
import { TodoProvider } from './context/todoProvider';
import { TodoService } from './apis/TodoService';

const tokenStorage = new TokenStorage();

const httpClient = new HttpClient(import.meta.env.VITE_BASE_URL, tokenStorage);
const authService = new AuthService(httpClient);
const todoService = new TodoService(httpClient);

console.log(tokenStorage);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider authService={authService} tokenStorage={tokenStorage}>
      <TodoProvider todoService={todoService}>
        <RouterProvider router={router} />
      </TodoProvider>
    </AuthProvider>
  </React.StrictMode>
);
