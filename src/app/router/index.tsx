import { createBrowserRouter } from "react-router-dom";
import AuthPage from "../../pages/auth";
import DashboardPage from "../../pages/dashboard";
import HomePage from "../../pages/home";

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
  },
]);
