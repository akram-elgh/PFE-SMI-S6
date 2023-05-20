import React, { useState } from "react";
import axios from "axios";
import { getMonth } from "../functions/functions";
import Button from "../sub-components/Button";

export default function Payment(props) {
  const url = "http://localhost:3001/payment?name=";
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [payingStudent, setPayingStudent] = useState({
    student_id: 0,
    month: 1,
  });
  const { student_id, month } = payingStudent;

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
    axios.get(url + value).then((response) => setStudents(response.data));
    setStudents([]);
  }

  function handleFormChange(event) {
    const value = event.target.value;
    setPayingStudent((prevValues) => {
      return {
        ...prevValues,
        month: student_id ? Number(value) : 0,
      };
    });
  }

  function handleCheckChange(event) {
    const value = event.target.value;
    if (event.target.checked) {
      axios
        .get("http://localhost:3001/payment?id=" + value)
        .then((response) => setStudents(response.data));
      setPayingStudent((prevValues) => {
        return {
          ...prevValues,
          student_id: value,
        };
      });
    } else {
      axios.get(url + name).then((response) => setStudents(response.data));
      setPayingStudent({
        student_id: 0,
        month: 1,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (student_id === 0) {
      props.showFailModal("Il fault selectioner un etudiant");
    } else {
      axios.post(url, payingStudent).then((response) => {
        if (response.status === 200) {
          props.showSuccessModal("Le paiment a ete effectuer avec succes");
        } else props.showFailModal("Erreur lors de l'effectue du paiement");
      });
      setPayingStudent({
        student_id: 0,
        month: 1,
      });
      setName("");
      setStudents([]);
    }
  }
  return (
    <>
      <div className="search-space-input">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Taper le nom de l'etudiant"
          value={name}
          onChange={handleChange}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <table className="table table-striped table-light table-hover">
          <thead>
            <tr>
              <th></th>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Dernier date du paiement</th>
              <th>Dernier mois payee</th>
              <th>Class</th>
              <th>Prix</th>
              <th>Mois</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr key={student.student_id}>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        name="student_id"
                        className="form-check-input"
                        role="switch"
                        value={student.student_id}
                        onChange={handleCheckChange}
                      />
                    </div>
                  </td>
                  <td>{student.lname}</td>
                  <td>{student.fname}</td>
                  <td>{student.date}</td>
                  <td>{getMonth(student.month)}</td>
                  <td>{student.class_name}</td>
                  <td>{student.price}DH</td>
                  <td>
                    <select
                      name="month"
                      className="form-select disabled"
                      onChange={handleFormChange}
                      value={month}
                      disabled={!student_id}
                    >
                      {getMonth()
                        .slice(1)
                        .map((month, index) => {
                          return (
                            <option value={index + 1} key={index + 1}>
                              {month}
                            </option>
                          );
                        })}
                    </select>
                  </td>
                </tr>
              );
            })}
            {student_id !== 0 && (
              <tr>
                <td colSpan={7}></td>
                <td>
                  <Button color="info"></Button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </form>
    </>
  );
}
