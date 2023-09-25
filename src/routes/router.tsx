import { Navigate, createBrowserRouter } from 'react-router-dom';

import { authRouter } from './authRouter';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/todo" replace />,
  },
  ...authRouter,
]);

export default router;
