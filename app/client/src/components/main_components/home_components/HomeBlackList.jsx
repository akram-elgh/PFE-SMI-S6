import React, { useEffect, useState } from "react";
import axios from "axios";
import Student from "../Student";
import { getMonth } from "../../functions/functions";

export default function HomeBlackList() {
  const url = "http://localhost:3001/blacklist";
  const [students, setStudents] = useState([]);
  const [date, setDate] = useState({
    day: new Date().getDate() + 1,
    month: new Date().getMonth() + 1,
  });

  const { day, month } = date;

  useEffect(() => {
    axios.get(url).then((response) => setStudents(response.data));
  }, []);

  return (
    <div className="home-space-blacklist-table">
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <td>Nom</td>
            <td>Prenom</td>
            <td>Classe</td>
            <td>Dernier mois du paiement</td>
            <td>Dernier date du paiement</td>
          </tr>
        </thead>
        <tbody>
          {students
            .filter((obj) => obj.month < (day === 10 ? month - 1 || 12 : month))
            .map((student) => {
              return (
                <tr key={student.id}>
                  <td>{student.lname}</td>
                  <td>{student.fname}</td>
                  <td>{student.class_name}</td>
                  <td>{getMonth(student.month)}</td>
                  <td>{student.date}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
