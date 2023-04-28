import React, { useState } from "react";

export default function Class() {
  const [classe, setClass] = useState({
    class_name: "",
    duration: 0,
    classroom: 0,
    price: 0,
  });
  const { class_name, duration, classroom, price } = classe;
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setClass((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };
  return (
    <div className="enrollment">
      <div className="enrollment-form">
        <div className="enrollment-labels">
          <ul>
            <li className="enrollment-lable-li">Nom du classe:</li>
            <li className="enrollment-lable-li">Duree:</li>
            <li className="enrollment-lable-li">Salle:</li>
            <li className="enrollment-lable-li">Prix:</li>
          </ul>
        </div>
        <div className="enrollment-inputs">
          <form>
            <div className="mb-3">
              <input
                type="text"
                name="class_name"
                placeholder="Taper ici"
                value={class_name}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="duration"
                placeholder="Taper ici"
                value={duration}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="clasroom"
                placeholder="Taper ici"
                value={classroom}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="number"
                name="price"
                placeholder="Taper ici"
                value={price}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
          </form>
        </div>
      </div>
      <form
        onSubmit={(event) => {
          // props.onSubmit({ login: login, password: password });
          event.preventDefault();
        }}
      ></form>
    </div>
  );
}
