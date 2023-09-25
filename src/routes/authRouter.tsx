import { Outlet } from 'react-router';

import { SignIn, SignUp } from '@/pages';

export const authRouter = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      { path: '/signup', element: <SignUp /> },
      { path: '/signin', element: <SignIn /> },
    ],
  },
];
