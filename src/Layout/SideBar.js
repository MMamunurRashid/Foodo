import React, { useContext } from "react";
import { Link } from "react-router-dom";
import useAdmin from "../hooks/isAdmin";
import useStaff from "../hooks/isStaff";
import { AuthContext } from "../Context/AuthProvider";

const SideBar = () => {
  const { user } = useContext(AuthContext);
  const [isAdmin] = useAdmin(user.email);
  const [isStaff] = useStaff(user.email);

  return (
    <div>
      <ul className="menu p-4 w-60 mr-5 pt-20 sm:pt-4 shadow-xl bg-slate-700  md:text-xl text-lg text-slate-100 h-screen">
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
            <li className="hover:bg-slate-200 hover:text-black">
              <Link to="/dashboard/add-item-for-admin">Add Item</Link>
            </li>
          </>
        )}
        {isStaff && (
          <>
            <li className="hover:bg-slate-200 hover:text-black">
              <Link to="/dashboard/all-menu-for-staff">All Menu</Link>
            </li>

            <li className="hover:bg-slate-200 hover:text-black">
              <Link to="/dashboard/add-item-for-staff">Add Item</Link>
            </li>
            <li className="hover:bg-slate-200 hover:text-black">
              <Link to="/dashboard/all-orders">All Orders</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
