import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import LoadingScreen from "../components/LoadingScreen";
import { useIsLoggedIn } from "../config/hooks";

export default function Layout() {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) return <LoadingScreen />;
  else if (isLoggedIn === false) return <Navigate replace to="/sign-in" />;
  return <Outlet />;
}
