import React, { useState, useEffect } from "react";
import Button from "../../sub-components/Button";
import axios from "axios";

export default function UpdateTeacher(props) {
  const url = "http://localhost:3001/teacher?id=";
  const classUrl = "http://localhost:3001/class";
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teacherToModify, setTeacherToModify] = useState({});
  const { teacher_id, fname, lname, phoneNum, class_id } = teacherToModify;

  useEffect(() => {
    axios.get(url).then((response) => setTeachers(response.data));
    axios.get(classUrl).then((response) => setClasses(response.data));
  }, [url, classUrl]);

  function handleCheckChange(event) {
    if (event.target.checked) {
      const id = event.target.value;
      axios.get(url + id).then((response) => {
        setTeacherToModify(response.data[0]);
        setTeachers(response.data);
      });
    } else {
      axios.get(url).then((response) => {
        setTeachers(response.data);
        setTeacherToModify({});
      });
    }
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setTeacherToModify((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Number(class_id) === 0) {
      props.showFailModal("Veuillez choisir une classe.");
    } else {
      axios.put(url, teacherToModify).then((response) => {
        if (response.status === 200)
          props.showSuccessModal("Le prof ete modifier avec succes");
        else props.showFailModal("Erreur lors du modifcation du prof");
      });
      setTeacherToModify({});
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
                <th>Prenom</th>
                <th>Class</th>
              </tr>
            </thead>
            <tbody>
              {teachers.map((teacher) => {
                return (
                  <tr key={teacher.id}>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          name="teacher_id"
                          className="form-check-input"
                          role="switch"
                          value={teacher.teacher_id}
                          onChange={handleCheckChange}
                          checked={
                            teacher.teacher_id === teacherToModify.teacher_id
                          }
                        />
                      </div>
                    </td>
                    <td>{teacher.lname}</td>
                    <td>{teacher.fname}</td>
                    <td>{teacher.class_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {teacher_id && (
        <div className="space-form">
          <div className="space-labels">
            <ul>
              <li className="space-lable-li">Prenom:</li>
              <li className="space-lable-li">Nom:</li>
              <li className="space-lable-li">Numero du telephone:</li>
              <li className="space-lable-li">Classe:</li>
            </ul>
          </div>
          <div className="space-inputs">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  name="lname"
                  placeholder="Taper ici"
                  value={lname}
                  className="form-control "
                  onChange={handleChange}
                  disabled
                ></input>
              </div>

              <div className="mb-4">
                <input
                  name="fname"
                  placeholder="Taper ici"
                  value={fname}
                  className="form-control"
                  onChange={handleChange}
                  aria-label="Default select example"
                  disabled
                ></input>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  name="phoneNum"
                  placeholder="Taper ici"
                  value={phoneNum}
                  className="form-control"
                  onChange={handleChange}
                  required
                ></input>
              </div>
              <select
                type="number"
                name="class_id"
                placeholder="Taper ici"
                value={class_id}
                className="form-select"
                onChange={handleChange}
              >
                <option key={0} value="0">
                  ---Selectioner unse classe---
                </option>
                {classes.map((classe) => {
                  return (
                    <option key={classe.class_id} value={classe.class_id}>
                      {classe.class_name}
                    </option>
                  );
                })}
              </select>
              <Button color="primary"></Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
