import React from "react";
import Router from "./config/Router";
import { Provider } from "react-redux";
import { store } from "./redux";

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
