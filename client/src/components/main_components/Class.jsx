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
    <div className="space">
      <div className="space-form">
        <div className="space-labels">
          <ul>
            <li className="space-lable-li">Nom du classe:</li>
            <li className="space-lable-li">Duree:</li>
            <li className="space-lable-li">Salle:</li>
            <li className="space-lable-li">Prix:</li>
          </ul>
        </div>
        <div className="space-inputs">
          <form>
            <div className="mb-3">
              <input
                type="text"
                name="class_name"
                placeholder="Taper ici"
                value={class_name}
                className="form-control "
                onChange={handleChange}
              ></input>
            </div>

            <select
              name="duration"
              placeholder="Taper ici"
              value={duration}
              className="form-select mb-3"
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option>----Duree----</option>
              <option value="90">1h30</option>
              <option value="120">2h</option>
            </select>

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
    </div>
  );
}
