import React, { useState } from "react";
import Login from "./login/Login";
import Main from "./Main";

export default function App() {
  const [isSubmitted, setSubmit] = useState(false);

  function handleSubmit(fullLogin) {
    console.log(fullLogin);
    if (fullLogin.login === "admin" && fullLogin.password === "admin") {
      setSubmit(true);
    }
  }

  if (!isSubmitted) {
    return <Login onSubmit={handleSubmit}></Login>;
  } else {
    return <Main></Main>;
  }
}
