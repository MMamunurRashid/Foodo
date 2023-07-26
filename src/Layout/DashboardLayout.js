import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/isAdmin";

import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";
import useStaff from "../hooks/isStaff";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isStaff] = useStaff(user.email);
  console.log(isStaff);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer  md:drawer-open pt-20 ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-60 mr-5 shadow-xl bg-slate-700  md:text-xl text-lg text-slate-100 h-screen">
            <li className="hover:bg-slate-200 hover:text-black">
              <Link to="/dashboard/profile">My Profile</Link>
            </li>
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
              </>
            )}

            {isStaff && (
              <>
                <li>
                  <Link to="/dashboard/all-menu-for-staff">All Menu</Link>
                </li>

                <li>
                  <Link to="/dashboard/add-item">Add Item</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-orders">All Orders</Link>
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
