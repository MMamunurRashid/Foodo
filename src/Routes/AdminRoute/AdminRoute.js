import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import useAdmin from "../../hooks/isAdmin";
import { BounceLoader } from "react-spinners";
import { useState } from "react";
import { useEffect } from "react";

const AdminRoute = ({ children }) => {
  const { user, loading, logOut } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();

  const [preloader, setPreLoader] = useState(false);
  useEffect(() => {
    setPreLoader(true);
    setTimeout(() => {
      setPreLoader(false);
    }, 2000);
  }, []);
  if (loading || isAdminLoading) {
    return (
      <div>
        {preloader ? (
          <div className="flex justify-center items-center w-full h-screen">
            <BounceLoader
              color="#d63636"
              cssOverride={{}}
              loading
              size={150}
              speedMultiplier={1}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  logOut();
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
