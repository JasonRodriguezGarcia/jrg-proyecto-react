import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, isAuthenticated }) => {
//   const isAuthenticated = true;  // Change this to your actual auth state

  return isAuthenticated ? element : <Navigate to="/" replace />;
};

export default ProtectedRoute;