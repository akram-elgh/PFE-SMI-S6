import React, { useState, useEffect } from "react";
import Button from "../../sub-components/Button";
import axios from "axios";
import { getPaymentType } from "../../functions/functions";

export default function UpdateTeacher(props) {
  const types = getPaymentType();
  const url = "http://localhost:3001/teacher?id=";
  const [teachers, setTeachers] = useState([]);
  const [teacherToModify, setTeacherToModify] = useState({});
  const { teacher_id, type_of_payment, salary } = teacherToModify;

  useEffect(() => {
    axios.get(url).then((response) => setTeachers(response.data));
  }, [url]);

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
          <h3>Selectionner un prof</h3>
        </div>
        <div className="update-space-search-table">
          <form>
            <table className="table table-striped table-primary table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Type du contrat</th>
                  <th>Salaire</th>
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
                      <td>
                        {teacher_id ? (
                          <select
                            name="type_of_payment"
                            value={type_of_payment}
                            className="form-select"
                          >
                            {types.map((type, index) => {
                              return (
                                <option
                                  key={index}
                                  value={index}
                                  onChange={handleChange}
                                >
                                  {type}
                                </option>
                              );
                            })}
                          </select>
                        ) : (
                          (teacher.type_of_payment &&
                            getPaymentType(teacher.type_of_payment)) ||
                          "_"
                        )}
                      </td>
                      <td>
                        {teacher_id ? (
                          <input
                            name="salary"
                            onChange={handleChange}
                            value={salary}
                            className="form-control"
                            type="number"
                          />
                        ) : (
                          teacher.salary
                        )}
                      </td>
                      <td>{teacher.class_name}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
