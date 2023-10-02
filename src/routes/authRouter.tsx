import { Outlet } from 'react-router';

import { SignIn, SignUp } from '@/pages';
import { UnAuthGuard } from '@/guards/UnAuthGuard';

export const authRouter = [
  {
    path: '/',
    element: (
      <UnAuthGuard>
        <Outlet />
      </UnAuthGuard>
    ),
    children: [
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> },
    ],
  },
];
