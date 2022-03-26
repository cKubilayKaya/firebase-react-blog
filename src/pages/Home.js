import React from "react";
import { logOut } from "../redux/authSlice";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}
