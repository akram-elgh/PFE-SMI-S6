import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SearchClass() {
  const url = "http://localhost:3001/teacher";

  const [teachers, setTeachers] = useState([]);
  useEffect(() => {
    axios.get(url).then((response) => setTeachers(response.data));
  }, [url]);

  return (
    <div className="search-space">
      <div className="search-space-table">
        <table className="table table-striped table-primary table-hover">
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prenom</th>
              <th>Tele</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => {
              return (
                <tr>
                  <td key={teacher.teacher_id}>{teacher.lname}</td>
                  <td key={teacher.teacher_id}>{teacher.fname}</td>
                  <td key={teacher.teacher_id}>{teacher.phoneNum}</td>
                  <td key={teacher.teacher_id}>{teacher.class_name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
