import React from "react";
import { Navigate } from "react-router-dom";

function RouteGuard({ element }) {
  const token = sessionStorage.getItem("token");
  return token ? element : <Navigate to="/login" replace />;
}

export default RouteGuard;
