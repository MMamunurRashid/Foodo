import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/isAdmin";

import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import useStaff from "../hooks/isStaff";
import Sidebar from "./SideBar";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isStaff] = useStaff(user.email);
  // console.log(isStaff);

  return (
    <div>
      <Navbar></Navbar>

      <div className="relative grid w-full  sm:pt-24">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content  w-full">
          <div className="flex">
            <div className="hidden sm:block">
              <Sidebar />
            </div>
            <div className="w-full">
              <Outlet />
            </div>
          </div>
          {/* <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> */}
        </div>
        <div className="drawer-side ">
          <ul className="menu p-4 w-60 mr-5 pt-20 sm:pt-4 shadow-xl bg-slate-700  md:text-xl text-lg text-slate-100 h-screen">
            <li className="hover:bg-slate-200 hover:text-black">
              <Link to="/dashboard/profile">My Profile</Link>
            </li>

            {!isAdmin && !isStaff && (
              <>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/my-orders">My Orders</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/my-table-reservation">
                    My Table Reservation
                  </Link>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-users">All Users</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-admin">All Admin</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-staffs">All Staffs</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-menu">All Menu</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-orders">All Orders</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-table-reservation">
                    All Table Reservation
                  </Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/add-item">Add Item</Link>
                </li>
              </>
            )}

            {isStaff && (
              <>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/my-orders">My Orders</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/my-orders">My Orders</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-menu-for-staff">All Menu</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-orders-for-staff">All Orders</Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/all-table-reservation-for-staff">
                    All Table Reservation
                  </Link>
                </li>
                <li className="hover:bg-slate-200 hover:text-black">
                  <Link to="/dashboard/add-item">Add Item</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
