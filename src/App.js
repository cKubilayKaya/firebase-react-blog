import React from "react";
import Router from "./config/Router";
import { Provider } from "react-redux";
import { store } from "./redux";
import { CssBaseline } from "@mui/material";

export default function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Router />
    </Provider>
  );
}
