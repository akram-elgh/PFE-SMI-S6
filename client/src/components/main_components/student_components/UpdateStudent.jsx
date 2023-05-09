import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../../sub-components/Button";
import { getLevel } from "../../functions/functions";

export default function UpdateStudent(props) {
  const classUrl = "http://localhost:3001/class";
  const studentUrl = "http://localhost:3001/student";
  const [classes, setClasses] = useState([]);
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [student, setStudent] = useState({});
  const {
    student_id,
    fname,
    lname,
    bDate,
    phoneNum,
    parentNum,
    level,
    class_id,
    new_class_id,
  } = student;

  useEffect(() => {
    axios.get(classUrl).then((response) => setClasses(response.data));
  }, [classUrl]);

  function handleSearchChange(event) {
    const name = event.target.value;
    const url = studentUrl + "?name=" + name;
    axios.get(url).then((response) => setStudents(response.data));
    setName(name);
  }

  function handleFormChange(event) {
    const name = event.target.name;
    const value =
      name === "level" || name === "class_id" || name === "new_class_id"
        ? Number(event.target.value)
        : event.target.value;
    setStudent((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleCheckChange(event) {
    if (event.target.checked) {
      const id = event.target.value;
      // const url = studentUrl + "?id=" + id;
      axios.get("http://localhost:3001/student?id=" + id).then((response) => {
        setStudent({
          ...response.data[0],
          new_class_id: response.data[0].class_id,
        });
        setStudents(response.data);
      });
    } else {
      const url = studentUrl + "?name=" + name;
      axios.get(url).then((response) => {
        setStudents(response.data);
        setStudent({});
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (class_id === 0) props.showFailModal();
    else {
      axios.put(studentUrl, student).then((response) => {
        if (response.status === 200)
          props.showSuccessModal("L'etudiant ete modifier avec succes");
        else props.showFailModal("Erreur lors du modifcation de l'etudiant");
      });
      setStudent({});
      setName("");
      setStudents([]);
    }
  }

  return (
    <div className="update-space">
      <div className="update-space-search">
        <div className="update-space-search-input">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="Taper le nom de l'etudiant"
            value={name}
            onChange={handleSearchChange}
          />
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
              {students.map((student) => {
                return (
                  <tr key={student.id}>
                    <td>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          name="student_id"
                          className="form-check-input"
                          role="switch"
                          value={student.student_id}
                          onChange={handleCheckChange}
                          checked={student_id === student.student_id}
                        />
                      </div>
                    </td>
                    <td>{student.lname}</td>
                    <td>{student.fname}</td>
                    <td>{student.class_name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      {student_id && (
        <div className="update-space-form">
          <div className="space-form">
            <div className="space-labels">
              <ul>
                <li className="space-lable-li">Nom:</li>
                <li className="space-lable-li">Prenom:</li>
                <li className="space-lable-li">Date de naissance:</li>
                <li className="space-lable-li">Numero du telephone:</li>
                <li className="space-lable-li">
                  Numero du telephone du parent:
                </li>
                <li className="space-lable-li">Niveau: </li>
                <li className="space-lable-li">Classe: </li>
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
                    className="form-control"
                    // onChange={handleFormChange}
                    disabled
                  ></input>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="fname"
                    placeholder="Taper ici"
                    value={fname}
                    className="form-control"
                    // onChange={handleFormChange}
                    disabled
                  ></input>
                </div>
                <div className="mb-4">
                  <input
                    type="date"
                    name="bDate"
                    placeholder="Taper ici"
                    value={bDate.slice(0, 10)}
                    className="form-control"
                    onChange={handleFormChange}
                  ></input>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phoneNum"
                    placeholder="Taper ici"
                    value={phoneNum}
                    className="form-control"
                    onChange={handleFormChange}
                  ></input>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="parentNum"
                    placeholder="Taper ici"
                    value={parentNum}
                    className="form-control"
                    onChange={handleFormChange}
                    required
                  ></input>
                </div>
                <div className="mb-4">
                  <select
                    type="text"
                    name="level"
                    placeholder="Taper ici"
                    value={level}
                    className="form-select"
                    onChange={handleFormChange}
                  >
                    {getLevel().map((level, index) => {
                      return (
                        <option key={index} value={index}>
                          {level}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-4">
                  <select
                    name="new_class_id"
                    value={new_class_id}
                    className="form-select"
                    onChange={handleFormChange}
                  >
                    <option value="0" key={0}>
                      ---Selectioner une classe---
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
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
