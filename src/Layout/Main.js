import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar";
import Footer from "../pages/Shared/Footer";

const Main = () => {
  return (
    <div>
      <Navbar/>
      <Outlet></Outlet>
      <Footer/>
     
    </div>
  );
};

export default Main;