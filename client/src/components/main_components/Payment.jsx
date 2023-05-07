import React, { useState } from "react";
import axios from "axios";
import { getMonth } from "../functions/functions";

export default function Payment(props) {
  const url = "http://localhost:3001/payment?name=";
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);

  function handleChange(event) {
    const value = event.target.value;
    setName(value);
    axios.get(url + value).then((response) => setStudents(response.data));
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
      <table className="table table-striped table-primary table-hover">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Dernier date du paiement</th>
            <th>Dernier mois payee</th>
            <th>Class</th>
            <th>Prix</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => {
            return (
              <tr key={student.id}>
                <td>{student.lname}</td>
                <td>{student.fname}</td>
                <td>{student.date}</td>
                <td>{getMonth(student.month)}</td>
                <td>{student.class_name}</td>
                <td>{student.price}DH</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
