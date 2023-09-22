import { Navigate, createBrowserRouter } from 'react-router-dom';

import { SignUp, SignIn } from '@/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/todo" replace />,
  },
  { path: '/signup', element: <SignUp /> },
  { path: '/signin', element: <SignIn /> },
  {
    path: '*',
    element: <Navigate to="/todo" replace />,
  },
]);

export default router;
