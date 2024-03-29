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
          props.showSuccessModal("Le prof a été modifié avec succès.");
        else props.showFailModal("Erreur lors de la modification du prof.");
        axios.get(url).then((response) => setTeachers(response.data));
        setTeacherToModify({});
      });
    }
  }

  return (
    <div className="update-space">
      <div className="update-space-search">
        <div className="update-space-search-input">
          <h3>Sélectionner un prof</h3>
        </div>
        <div className="update-space-search-table">
          <table className="table table-striped table-primary table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Classes</th>
              </tr>
            </thead>
            <tbody>
              {teachers.slice(teacher_id ? 0 : 1).map((teacher) => {
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
                    <td>
                      {classes
                        .filter((obj) => obj.teacher_id === teacher.teacher_id)
                        .map((classe) => {
                          return `${classe.class_name} `;
                        })}
                    </td>
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
              <li className="space-lable-li">Prénom:</li>
              <li className="space-lable-li">Nom:</li>
              <li className="space-lable-li">Numéro du téléphone:</li>
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
              <Button color="primary"></Button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
