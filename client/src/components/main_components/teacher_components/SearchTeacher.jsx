import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchClass() {
  const url = "http://localhost:3001/teacher";
  const classUrl = "http://localhost:3001/class";

  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => setTeachers(response.data));
    axios.get(classUrl).then((response) => setClasses(response.data));
  }, [url, classUrl]);

  return (
    <div className="search-space">
      <div className="search-space-table">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Tele</th>
              <th>Classes</th>
            </tr>
          </thead>
          <tbody>
            {teachers.slice(1).map((teacher) => {
              return (
                <tr>
                  <td key={teacher.teacher_id}>{teacher.lname}</td>
                  <td key={teacher.teacher_id}>{teacher.fname}</td>
                  <td key={teacher.teacher_id}>{teacher.phoneNum}</td>
                  <td key={teacher.teacher_id}>
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
  );
}
