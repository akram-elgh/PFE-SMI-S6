import React, { useState } from "react";
import Login from "./login/Login";
import Main from "./Main";

export default function App() {
  const [isSubmitted, setSubmit] = useState(true);
  const username = import.meta.env.VITE_USERNAME;
  const password = import.meta.env.VITE_PASSWORD;

  function handleSubmit(fullLogin) {
    if (fullLogin.login === username && fullLogin.password === password) {
      setSubmit(true);
    }
  }

  return isSubmitted ? <Main></Main> : <Login onSubmit={handleSubmit}></Login>;
}
