import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Context/auth";

function RequiresAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  return user ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

export default RequiresAuth;
