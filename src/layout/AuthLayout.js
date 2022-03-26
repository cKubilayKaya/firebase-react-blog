import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { useIsLoggedIn } from "../config/hooks";

export default function AuthLayout() {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) return <LoadingScreen />;
  else if (isLoggedIn === true) return <Navigate replace to="/" />;
  return <Outlet />;
}
