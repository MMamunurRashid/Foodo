import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Login from "../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";

import Home from "../Home/Home/Home";
import Profile from "../Profile/Profile";
import UpdatePhoto from "../Profile/UpdatePhoto";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/updatePhoto",
        element: <UpdatePhoto />,
      },
    ],
  },
]);
export default router;
