import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../components/RootLayout";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Register from "../pages/Register";
import User from "../pages/User";
import ProfileLayout from "../components/ProfileLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/courses",
        element: <Courses />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
      {
        path: "/profile/user",
        element: <User />,
      },
    ],
  },
]);

export default router;
