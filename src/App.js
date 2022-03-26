import React, { useEffect } from "react";
import { signUp } from "./config/firebase";

export default function App() {
  useEffect(() => {
    signUp("kubilay", "kkubilay24@gmail.com", "123123")
      .then(() => console.log("done"))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>App</h1>
    </div>
  );
}
