import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useAdmin from "../hooks/isAdmin";

import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);

  return (
    <div>
      <Navbar></Navbar>

      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            <li>
              <Link to="/dashboard/my-order">My Order</Link>
            </li>
            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard/all-users">All Users</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-admin">All Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-staff">All Staff</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-menu">All Menu</Link>
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
