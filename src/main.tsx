import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';

import router from '@routes/router';
import { HttpClient, AuthService, TokenStorage } from '@/apis';
import { AuthProvider } from '@/context/authProvider';

const tokenStorage = new TokenStorage();

const httpClient = new HttpClient(import.meta.env.VITE_BASE_URL, tokenStorage);
const authService = new AuthService(httpClient);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider authService={authService} tokenStorage={tokenStorage}>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
