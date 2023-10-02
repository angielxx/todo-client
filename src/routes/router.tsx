import { Navigate, createBrowserRouter } from 'react-router-dom';

import { authRouter } from './authRouter';
import { todoRouter } from './todoRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/todo" replace />,
  },
  ...authRouter,
  ...todoRouter,
]);

export default router;
