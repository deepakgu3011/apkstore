// ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if the user is authenticated (example using localStorage)
  const isAuthenticated = localStorage.getItem("isLoggedIn");

  // If not authenticated, redirect to login page
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Otherwise, allow the user to access the route
  return <Outlet />;
};

export default ProtectedRoute;
