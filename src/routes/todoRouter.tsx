import { AuthGuard } from '@/guards/AuthGuard';
import { Todo } from '@/pages/Todo';
import { Outlet } from 'react-router';

export const todoRouter = [
  {
    path: '/',
    element: (
      <AuthGuard>
        <Outlet />
      </AuthGuard>
    ),
    children: [{ path: '/todo', element: <Todo /> }],
  },
];
