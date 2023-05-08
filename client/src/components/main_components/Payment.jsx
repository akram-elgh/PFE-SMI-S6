import React, { useState } from "react";
import axios from "axios";
import { getMonth } from "../functions/functions";
import Button from "../sub-components/Button";

export default function Payment(props) {
  const url = "http://localhost:3001/payment?name=";
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [payingStudent, setPayingStudent] = useState({
    id: 0,
    month: 1,
  });
  const { id, month } = payingStudent;

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
    axios.get(url + value).then((response) => setStudents(response.data));
    setStudents([]);
  }

  function handleFormChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setPayingStudent((prevValues) => {
      return {
        ...prevValues,
        [name]: Number(value),
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (id === 0) {
      props.showFailModal("Il fault selectioner un etudiant");
    } else {
      axios.post(url, payingStudent).then((response) => {
        if (response.status === 200) {
          props.showSuccessModal("Le paiment a ete effectuer avec succes");
        } else props.showFailModal("Erreur lors de l'effectue du paiement");
      });
      setPayingStudent({
        id: 0,
        month: 0,
      });
    }
  }
  return (
    <div className="space">
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
                <tr key={student.id}>
                  <td>
                    <div className="form-check form-switch">
                      <input
                        type="checkbox"
                        name="id"
                        className="form-check-input"
                        role="switch"
                        value={student.id}
                        onChange={handleFormChange}
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
                      value={student.id === id ? month : ""}
                      disabled={student.id !== id}
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
            <tr>
              <td colSpan={7}></td>
              <td>
                <Button color="primary"></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
