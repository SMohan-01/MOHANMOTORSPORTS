import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RequireAuth = () => {
    const user = useSelector((state) => state.user.user);

    if (!user) {
      return <Navigate to="/" replace />;
    }
  
    return <Outlet />;
}

export default RequireAuth