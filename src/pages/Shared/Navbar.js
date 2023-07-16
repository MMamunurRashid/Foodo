import React from "react";
import { Link, } from "react-router-dom";

import "../../Font/Font.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((err) => console.error(err));
  };
  return (
    <div className="fixed  shadow-md max-w-[1440px] bg-slate-200 w-full z-50  py-2  md:flex md:justify-between md:items-center md:px-20 px-5">
      <div className="navbar  bg-slate-200">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content dropdown mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl NotoSerif"
            >
              <li>
                <a href="#home">Home</a>
              </li>

              <li>
                <a href="#menu">Menu</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
              {user?.email ? (
          <Link  onClick={handleLogout} className="btn btn-ghost">
            Logout
          </Link>
        ) : (
          <Link  className="btn btn-ghost" to="/login">
            Login
          </Link>
        )}
              </li>
            </ul>
          </div>
          <div className="flex items-center">
            <a href="#home" className="btn btn-ghost normal-case text-5xl BerkshireSwash font-bold">
              Foodo
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal px-1 text-2xl NotoSerif">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#menu">Menu</a>
            </li>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
            {user?.email ? (
          <Link  onClick={handleLogout} >
            Logout
          </Link>
        ) : (
          <Link  to="/login">
            Login
          </Link>
        )}
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-14 rounded-full">
                <img src="https://i.ibb.co/VSHWpW4/mamun.png" alt="" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <Link>Settings</Link>
              </li>
              <li>
                <Link>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
