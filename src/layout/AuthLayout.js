import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useIsLoggedIn } from "../config/hooks";

export default function AuthLayout() {
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn === null) return <h1>loading...</h1>;
  else if (isLoggedIn === true) return <Navigate replace to="/" />;
  return <Outlet />;
}
