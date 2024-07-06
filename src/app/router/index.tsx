import { createBrowserRouter } from 'react-router-dom';
import BlogsPage from 'pages/blogsPage';
import AuthPage from '../../pages/auth';
import ConfirmationPage from '../../pages/confirmation';
import DashboardPage from '../../pages/dashboard';
import Error from '../../pages/error';
import HomePage from '../../pages/home';
import RecoveryPage from '../../pages/recovery';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/login',
    element: <AuthPage />,
  },
  {
    path: '/dashboard',
    element: <DashboardPage />,
    errorElement: <Error />,
  },
  {
    path: '/confirmation',
    element: <ConfirmationPage />,
  },
  {
    path: '/recovery',
    element: <RecoveryPage />,
  },
  {
    path: '/blogs',
    element: <BlogsPage />,
  },
]);
