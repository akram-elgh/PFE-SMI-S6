import React, { useState, useEffect } from "react";
import Button from "../../sub-components/Button";
import axios from "axios";

export default function AddClass(props) {
  const url = "http://localhost:3001/class";
  const teacherUrl = "http://localhost:3001/teacher";
  const [teachers, setTeachers] = useState([]);
  const [classe, setClass] = useState({
    class_name: "",
    duration: 0,
    classroom: 0,
    price: 0,
    teacher_id: 0,
  });

  useEffect(() => {
    axios.get(teacherUrl).then((response) => setTeachers(response.data));
  }, [teacherUrl]);

  const { class_name, duration, classroom, price, teacher_id } = classe;
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
      props.showFailModal("Veuillez entrer la durée du cours.");
    } else if (Number(teacher_id) === 0)
      props.showFailModal("Veuillez choisir un prof");
    else {
      axios.post(url, classe).then((response) => {
        if (response.status === 200) {
          props.showSuccessModal("La classe a été ajoutée avec succès.");
          setClass({
            class_name: "",
            duration: 0,
            classroom: 0,
            price: 0,
            teacher_id: 0,
          });
        } else props.showFailModal("Erreur lors de l'ajout de la classe.");
      });
    }
  }
  return (
    <div className="space">
      <div className="space-form">
        <div className="space-labels">
          <ul>
            <li className="space-lable-li">Nom de la classe:</li>
            <li className="space-lable-li">Durée:</li>
            <li className="space-lable-li">Salle:</li>
            <li className="space-lable-li">Prix:</li>
            <li className="space-lable-li">Prof:</li>
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
              <option value="0">----Durée----</option>
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
            <div className="mb-4">
              <select
                type="text"
                name="teacher_id"
                placeholder="Taper ici"
                value={teacher_id}
                className="form-select"
                onChange={handleChange}
              >
                <option key={0} value="0">
                  ---Selectioner un prof---
                </option>
                {teachers.map((teacher) => {
                  return (
                    <option key={teacher.teacher_id} value={teacher.teacher_id}>
                      {teacher.fname + " " + teacher.lname}
                    </option>
                  );
                })}
              </select>
            </div>
            <Button color="primary"></Button>
          </form>
        </div>
      </div>
    </div>
  );
}
