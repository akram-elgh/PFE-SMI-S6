import React, { useState } from "react";
import axios from "axios";
import { getLevel } from "../../functions/functions";

export default function SearchStudent() {
  const url = "http://localhost:3001/student?name=";
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const handleChange = (event) => {
    setName(event.target.value);
    axios.get(url + event.target.value).then((response) => {
      setStudents(response.data);
    });
  };
  return (
    <div className="search-space">
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
      <div className="search-space-table">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Date du naissance</th>
              <th>Tele</th>
              <th>Tele du parent</th>
              <th>Niveau</th>
              <th>Class</th>
              <th>Date d'inscription</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => {
              return (
                <tr key={student.student_id}>
                  <td>{student.lname}</td>
                  <td>{student.fname}</td>
                  <td>{student.bDate}</td>
                  <td>{student.phoneNum}</td>
                  <td>{student.parentNum}</td>
                  <td>{getLevel(student.level)}</td>
                  <td>{student.class_name}</td>
                  <td>{student.dateOfEnrollment}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
