import React, { useState } from "react";
import axios from "axios";
import { getLevel } from "../../functions/functions";
import Button from "../../sub-components/Button";
import Modal from "../Modal";

export default function DeleteStudent(props) {
  const url = "http://localhost:3001/student?name=";
  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [studentToDelete, setStudentToDelete] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { student_id } = studentToDelete;

  const handleChange = (event) => {
    setName(event.target.value);
    axios.get(url + event.target.value).then((response) => {
      setStudents(response.data);
    });
  };

  function handleCheckChange(event) {
    const value = event.target.value;
    if (event.target.checked) {
      axios
        .get("http://localhost:3001/student?id=" + value)
        .then((response) => {
          setStudents(response.data);
          setStudentToDelete(response.data[0]);
        });
    } else
      axios.get(url + name).then((response) => {
        setStudents(response.data);
        setStudentToDelete({});
      });
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowModal(true);
  }

  function handleClose(answer) {
    console.log(answer);
    if (answer) {
      setShowModal(false);
      axios
        .delete("http://localhost:3001/student?id=" + student_id)
        .then((response) => {
          if (response.status === 200) {
            props.showSuccessModal("L'etudiant ete supprimer avec succes");
          } else {
            props.showFailModal("Erreur lors de suppresion d'etudiant");
          }
          setStudentToDelete({});
          setStudents([]);
          setName("");
        });
    } else {
      setShowModal(false);
    }
  }

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
        <form onSubmit={handleSubmit}>
          <table className="table table-striped table-primary table-hover">
            <thead>
              <tr>
                <th></th>
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
                    <td>
                      <div className="form-check form-switch">
                        <input
                          type="checkbox"
                          name="student_id"
                          className="form-check-input"
                          role="switch"
                          value={student.student_id}
                          onChange={handleCheckChange}
                          checked={student_id === student.student_id}
                        />
                      </div>
                    </td>
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
              {student_id && (
                <tr>
                  <td colSpan={8}></td>
                  <td>
                    <Button color="danger" text="Supprimer"></Button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </form>
        {showModal && (
          <Modal
            title="Attention !!"
            body="Voulez vous vraiment supprimer cet etudiant"
            color="red"
            delete="true"
            show={showModal}
            onClose={handleClose}
          ></Modal>
        )}
      </div>
    </div>
  );
}
