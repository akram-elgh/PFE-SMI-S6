import React, { useState } from "react";
import FinanceLogin from "./FinanceLogin.jsx";
import FinanceBody from "./FinanceBody.jsx";

export default function Finance(props) {
  const [isLoginTrue, setLogin] = useState(false);

  return (
    <>
      {!isLoginTrue && (
        <FinanceLogin
          onSubmit={(password) => password === "admin" && setLogin(true)}
        ></FinanceLogin>
      )}
      {isLoginTrue && <FinanceBody></FinanceBody>}
    </>
  );
}
