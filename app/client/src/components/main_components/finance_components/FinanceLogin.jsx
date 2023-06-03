import React, { useState } from "react";
import Button from "../../sub-components/Button";

export default function FinanceLogin(props) {
  const [password, setPassword] = useState("");
  return (
    <div className="finance-login">
      <div className="finance-login-title">
        <h1>Seul les directeurs peuvent entrer à cet espace</h1>
      </div>
      <div className="finance-login-icon"></div>
      <div className="finance-login-form">
        <form
          onSubmit={(event) => {
            event.preventDefault();
            props.onSubmit(password);
            setPassword("");
          }}
        >
          <input
            type="password"
            value={password}
            placeholder="Entrer le mot de passe."
            className="form-control mb-3"
            onChange={(event) => setPassword(event.target.value)}
          />
          <Button color="primary" size="md"></Button>
        </form>
      </div>
      <div className="wave"></div>
    </div>
  );
}
