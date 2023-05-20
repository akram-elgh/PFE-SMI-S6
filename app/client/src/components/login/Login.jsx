import React, { useState } from "react";

export default function Login(props) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  function handleLoginChange(e) {
    setLogin(e.target.value);
  }
  function handlePasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <div className="login">
      <div className="logo">
        <div className="logo-img"></div>
        <h3>Markaz Nour Al Ilem</h3>
      </div>
      <div className="form">
        <div className="right-div form-div">
          <h3 className="bienvenue">Bienvenue</h3>
          <form
            onSubmit={(event) => {
              props.onSubmit({ login: login, password: password });
              event.preventDefault();
              setLogin("");
              setPassword("");
            }}
          >
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Nom d'utilisateur
              </label>
              <input
                name="login"
                type="text"
                value={login}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={handleLoginChange}
                autoComplete="false"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Mot de pass
              </label>
              <input
                name="password"
                type="password"
                value={password}
                className="form-control"
                id="exampleInputPassword1"
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Valider
            </button>
          </form>
        </div>
        <div className="left-div form-div">
          <div className="orange-phone"></div>
        </div>
      </div>
    </div>
  );
}
