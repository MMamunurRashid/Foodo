import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";

import Login from "../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";

import Home from "../Home/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:"/",
        element:<Home></Home>
      },

      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      }
    ],
  },
]);
export default router;