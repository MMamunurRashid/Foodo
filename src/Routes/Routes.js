import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../pages/LoginAndRegister/Login";
import Register from "../pages/LoginAndRegister/Register";
import Home from "../Home/Home/Home";
import Profile from "../Profile/Profile";
import UpdatePhoto from "../Profile/UpdatePhoto";
import NotFound from "../pages/NotFound/NotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import DashboardLayout from "../Layout/DashboardLayout";
import AdminRoute from "./AdminRoute/AdminRoute";
import AllUsers from "../pages/Dashboard/AllUsers";

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
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),

    children: [
      {
        path: "/dashboard/all-users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/updatePhoto",
        element: <UpdatePhoto />,
      },
      {
        path: "*",
        element: <NotFound></NotFound>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
export default router;
