import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const NotFound = () => {
  useTitle("Not Found");
  return (
    <>
      <div className="text-center">
        <img src="https://i.ibb.co/nMzkdgn/No-More-404s.gif" alt="" />
        <Link to="/" className="btn btn-accent mt-5">
          Go Back To Home
        </Link>
      </div>
    </>
  );
};

export default NotFound;
