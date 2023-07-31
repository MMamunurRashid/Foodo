import React, { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import { BounceLoader } from "react-spinners";
import useStaff from "../../hooks/isStaff";

const SellerRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isStaff, isStaffLoading] = useStaff(user?.email);
  const location = useLocation();

  if (loading || isStaffLoading) {
    return (
      <div>
        <div className="flex justify-center items-center w-full h-screen">
          <BounceLoader
            color="#d63636"
            cssOverride={{}}
            loading
            size={150}
            speedMultiplier={1}
          />
        </div>
      </div>
    );
  }

  if (user && isStaff) {
    return children;
  }
  logOut();
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default SellerRoute;
