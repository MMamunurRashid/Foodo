import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";
const NotFound = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="text-center">
        <img src="https://i.ibb.co/nMzkdgn/No-More-404s.gif" alt="" />
        <Link to="/" className="btn btn-accent mt-5">
          Go Back To Home
        </Link>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
