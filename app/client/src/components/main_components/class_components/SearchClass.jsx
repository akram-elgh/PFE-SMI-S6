import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchClass() {
  const url = "http://localhost:3001/class";
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => setClasses(response.data));
  }, [url]);

  return (
    <div className="search-space">
      <div className="search-space-table">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Salle</th>
              <th>Durée</th>
              <th>Prix</th>
              <th>Prof</th>
              <th>Nombre d'étudiants</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classe) => {
              return (
                <tr key={classe.class_id}>
                  <td>{classe.class_name}</td>
                  <td>{classe.classroom}</td>
                  <td>{classe.duration === 90 ? "1h30" : "2h"}</td>
                  <td>{classe.price}DH</td>
                  <td>{classe.lname + " " + classe.fname || "_"}</td>
                  <td>{classe.student_count}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
