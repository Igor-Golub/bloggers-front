import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../../pages/auth";
import DashboardPage from "../../pages/dashboard";
import HomePage from "../../pages/home";
import ConfirmationPage from "../../pages/confirmation";
import RecoveryPage from "../../pages/recovery";
import Error from "../../pages/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    errorElement: <Error />,
  },
  {
    path: "/confirmation",
    element: <ConfirmationPage />,
  },
  {
    path: "/recovery",
    element: <RecoveryPage />,
  },
]);
