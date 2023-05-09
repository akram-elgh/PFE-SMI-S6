import React, { useState, useEffect } from "react";
import Button from "../../sub-components/Button";
import axios from "axios";

export default function UpdateClass(props) {
  const url = "http://localhost:3001/class?id=";
  const [classes, setClasses] = useState([]);
  const [classeToModify, setClasseToModify] = useState({});
  const { class_id, class_name, duration, classroom, price } = classeToModify;

  useEffect(() => {
    axios.get(url).then((response) => setClasses(response.data));
  }, [url]);

  function handleCheckChange(event) {
    if (event.target.checked) {
      const id = event.target.value;
      axios.get(url + id).then((response) => {
        setClasseToModify(response.data[0]);
        setClasses(response.data);
      });
    } else {
      axios.get(url).then((response) => {
        setClasses(response.data);
        setClasseToModify({});
      });
    }
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setClasseToModify((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Number(duration) === 0) {
      props.showFailModal("Veuillez entrer la duree du cours");
    } else {
      axios.put(url, classeToModify).then((response) => {
        if (response.status === 200)
          props.showSuccessModal("La classe a ete modifier avec succes");
        else props.showFailModal("Erreur Lors du modification du classe");
      });
      setClasseToModify({});
      // setClasses([]);
    }
  }

  return (
    <div className="update-space">
      <div className="update-space-search">
        <div className="update-space-search-input">
          <h3>Selectionner une classe</h3>
        </div>
        <div className="update-space-search-table">
          <table className="table table-striped table-primary table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Nom</th>
                <th>Salle</th>
                <th>Prof</th>
              </tr>
            </thead>
            <tbody>
              {classes.map((classe) => {
                return (
                  <tr key={classe.id}>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          name="id"
                          className="form-check-input"
                          role="switch"
                          value={classe.class_id}
                          onChange={handleCheckChange}
                          checked={classe.class_id === classeToModify.class_id}
                        />
                      </div>
                    </td>
                    <td>{classe.class_name}</td>
                    <td>{classe.classroom}</td>
                    <td>{classe.fname || "___"}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {class_id && (
        <div className="update-space-form">
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
                <Button color="primary"></Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
