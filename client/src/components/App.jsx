import React, { useState } from "react";
import Login from "./login/Login";
import Main from "./Main";

export default function App() {
  const [isSubmitted, setSubmit] = useState(true);

  function handleSubmit(fullLogin) {
    if (fullLogin.login === "admin" && fullLogin.password === "admin") {
      setSubmit(true);
    }
  }

  return isSubmitted ? <Main></Main> : <Login onSubmit={handleSubmit}></Login>;
}
