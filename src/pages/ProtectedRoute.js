import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((store) => store.user);

  return !user ? <Navigate to="/landing" /> : children;
};

export default ProtectedRoute;
