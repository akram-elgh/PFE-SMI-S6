import React, { useState, useEffect } from "react";
import Button from "../../sub-components/Button";
import axios from "axios";
import { getPaymentType } from "../../functions/functions";

export default function UpdateTeacher(props) {
  const types = getPaymentType();
  const url = "http://localhost:3001/teacher?id=";
  const classUrl = "http://localhost:3001/class";
  const [classes, setClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [teacherToModify, setTeacherToModify] = useState({});
  const { teacher_id, type_of_payment, salary } = teacherToModify;

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
    if (Number(type_of_payment) === 0) {
      props.showFailModal("Veuillez choisir un type du contrat.");
    } else {
      axios.put(url, teacherToModify).then((response) => {
        if (response.status === 200)
          props.showSuccessModal("Le contrat a été modifié avec succès.");
        else props.showFailModal("Erreur lors de la modification du contrat.");
        setTeacherToModify({});
        axios.get(url).then((response) => setTeachers(response.data));
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
          <form onSubmit={handleSubmit}>
            <table className="table table-striped table-primary table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Type de contrat</th>
                  <th>Salaire</th>
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
                        {teacher_id ? (
                          <select
                            name="type_of_payment"
                            value={type_of_payment}
                            className="form-select"
                            onChange={handleChange}
                          >
                            {types.map((type, index) => {
                              return (
                                <option key={index} value={index}>
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
                          `${teacher.salary}${
                            teacher.type_of_payment === 3 ? "%" : "DH"
                          }`
                        )}
                      </td>
                      <td>
                        {classes
                          .filter(
                            (obj) => obj.teacher_id === teacher.teacher_id
                          )
                          .map((classe) => {
                            return `${classe.class_name} `;
                          })}
                      </td>
                    </tr>
                  );
                })}
                {teacher_id && (
                  <tr>
                    <td colSpan={5}></td>
                    <td>
                      <Button color="primary"></Button>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  );
}
