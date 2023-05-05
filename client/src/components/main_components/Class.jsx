import React, { useState } from "react";
import Button from "../sub-components/Button";
import axios from "axios";

export default function Class(props) {
  const url = "http://localhost:3001/class";
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
  function handleSubmit(event) {
    event.preventDefault();
    if (Number(duration) === 0) {
      props.showFailModal("Veuillez entrer la duree du cours");
    } else {
      axios.post(url, classe).then((response) => {
        if (response.status === 200)
          props.showSuccessModal("La classe a ete ajouter avec succes");
        else props.showFailModal("Erreur Lors de l'ajout du classe");
      });
      setClass({
        class_name: "",
        duration: 0,
        classroom: 0,
        price: 0,
      });
    }
  }
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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="class_name"
                placeholder="Taper ici"
                value={class_name}
                className="form-control "
                onChange={handleChange}
                required
              ></input>
            </div>

            <select
              name="duration"
              placeholder="Taper ici"
              value={duration}
              className="form-select mb-4"
              onChange={handleChange}
              aria-label="Default select example"
            >
              <option value="0">----Duree----</option>
              <option value="90">1h30</option>
              <option value="120">2h</option>
            </select>

            <div className="mb-4">
              <input
                type="number"
                name="classroom"
                placeholder="Taper ici"
                value={classroom}
                className="form-control"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="mb-4">
              <input
                type="number"
                name="price"
                placeholder="Taper ici"
                value={price}
                className="form-control"
                onChange={handleChange}
                required
              ></input>
            </div>
            <Button></Button>
          </form>
        </div>
      </div>
    </div>
  );
}
