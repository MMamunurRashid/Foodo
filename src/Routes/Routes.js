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
import StaffRoute from "./StaffRoute/StaffRoute";
import AllUsers from "../pages/Dashboard/Admin/AllUsers";
import AllStaff from "../pages/Dashboard/Admin/AllStaff";
import AllAdmin from "../pages/Dashboard/Admin/AllAdmin";
import AllMenu from "../pages/Dashboard/Admin/AllMenu";
import AllMenuForStaff from "../pages/Dashboard/Staff/AllMenuForStaff";
import AddAItemForStaff from "../pages/Dashboard/Staff/AddItemForStaff";
import AddItem from "../pages/Dashboard/Admin/AddItem";
import Menu from "../pages/Menu/Menu";
import AboutFoodoPage from "../pages/AboutFoodoPage/AboutFoodoPage";
import OrderPage from "../pages/Order/OrderPage";
import AllOrders from "../pages/Dashboard/Admin/AllOrders";
import AllOrdersForStaff from "../pages/Dashboard/Staff/AllOrdersForStaff";
import AllTableReservationForStaff from "../pages/Dashboard/Staff/AllTableReservationForStaff";
import AllTableReservation from "../pages/Dashboard/Admin/AllTableReservation";
import UserOrder from "../pages/Dashboard/User/UserOrder";
import TableReservation from "../pages/TableReservation/TableReservation";
import MyTableReservation from "../pages/Dashboard/User/MyTableReservation";

import TotalSell from "../pages/Dashboard/Admin/TotalSell";

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
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/about-foodo",
        element: <AboutFoodoPage />,
      },
      {
        path: "/table-reservation",
        element: <TableReservation />,
      },

      {
        path: "/order",
        element: (
          <PrivateRoute>
            <OrderPage />,
          </PrivateRoute>
        ),
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
        path: "/dashboard/all-staffs",
        element: (
          <AdminRoute>
            <AllStaff />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-admin",
        element: (
          <AdminRoute>
            <AllAdmin />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-menu",
        element: (
          <AdminRoute>
            <AllMenu />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/add-item",
        element: (
          <AdminRoute>
            <AddItem />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-orders",
        element: (
          <AdminRoute>
            <AllOrders />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-table-reservation",
        element: (
          <AdminRoute>
            <AllTableReservation />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/total-sell",
        element: (
          <AdminRoute>
            <TotalSell />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/all-menu-for-staff",
        element: (
          <StaffRoute>
            <AllMenuForStaff />
          </StaffRoute>
        ),
      },
      {
        path: "/dashboard/add-item-for-staff",
        element: (
          <StaffRoute>
            <AddAItemForStaff />
          </StaffRoute>
        ),
      },
      {
        path: "/dashboard/all-orders-for-staff",
        element: (
          <StaffRoute>
            <AllOrdersForStaff />
          </StaffRoute>
        ),
      },
      {
        path: "/dashboard/all-table-reservation-for-staff",
        element: (
          <StaffRoute>
            <AllTableReservationForStaff />
          </StaffRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: <UserOrder />,
      },

      {
        path: "/dashboard/my-table-reservation",
        element: <MyTableReservation />,
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
