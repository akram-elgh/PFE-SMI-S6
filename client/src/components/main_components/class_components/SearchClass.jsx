import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchClass() {
  const url = "http://localhost:3001/class?id=";
  const [classes, setClasses] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [classesTable, setClassesTable] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => setClasses(response.data));
  }, [url]);

  function handleChange(event) {
    const id = event.target.value;
    axios.get(url + id).then((response) => setClassesTable(response.data));
    setClassesTable([]);
  }
  return (
    <div className="search-space">
      <div className="search-space-input">
        <select className="form-select" onChange={handleChange}>
          <option value="0" key={0}>
            ---Selectionez une classe---
          </option>
          {classes.map((classe) => {
            return (
              <option value={classe.class_id} key={classe.class_id}>
                {classe.class_name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="search-space-table">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Salle</th>
              <th>Duree</th>
              <th>Prix</th>
              <th>Prof</th>
            </tr>
          </thead>
          <tbody>
            {classesTable.map((classe) => {
              return (
                <tr>
                  <td key={classe.class_id}>{classe.class_name}</td>
                  <td key={classe.class_id}>{classe.classroom}</td>
                  <td key={classe.class_id}>
                    {classe.duration === 90 ? "1h30" : "2h"}
                  </td>
                  <td key={classe.class_id}>{classe.price}DH</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
