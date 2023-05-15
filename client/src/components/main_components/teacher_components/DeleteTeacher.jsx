import React, { useState, useEffect } from "react";
import Button from "../../sub-components/Button";
import axios from "axios";
import Modal from "../../sub-components/Modal";

export default function DeleteTeacher(props) {
  const url = "http://localhost:3001/teacher?id=";
  const [teachers, setTeachers] = useState([]);
  const [teacherToDelete, setTeacherToDelete] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { teacher_id } = teacherToDelete;

  useEffect(() => {
    axios.get(url).then((response) => setTeachers(response.data));
  }, [url]);

  function handleCheckChange(event) {
    if (event.target.checked) {
      const id = event.target.value;
      axios.get(url + id).then((response) => {
        setTeacherToDelete(response.data[0]);
        setTeachers(response.data);
      });
    } else {
      axios.get(url).then((response) => {
        setTeachers(response.data);
        setTeacherToDelete({});
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShowModal(true);
  }

  function handleClose(answer) {
    console.log(answer);
    if (answer) {
      setShowModal(false);
      axios.delete(url + teacher_id).then((response) => {
        if (response.status === 200) {
          props.showSuccessModal("Le prof ete supprimer avec succes");
        } else {
          props.showFailModal("Erreur lors de suppresion du prof");
        }
        axios.get(url).then((response) => setTeachers(response.data));
        setTeacherToDelete({});
      });
    } else {
      setShowModal(false);
    }
  }

  return (
    <div className="update-space">
      <div className="update-space-search">
        <div className="update-space-search-input">
          <h3>Selectionner un prof</h3>
        </div>
        <div className="update-space-search-table">
          <form onSubmit={handleSubmit}>
            <table className="table table-striped table-primary table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>Class</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => {
                  return (
                    <tr key={teacher.id}>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            type="checkbox"
                            name="teacher_id"
                            className="form-check-input"
                            role="switch"
                            value={teacher.teacher_id}
                            onChange={handleCheckChange}
                            checked={
                              teacher.teacher_id === teacherToDelete.teacher_id
                            }
                          />
                        </div>
                      </td>
                      <td>{teacher.lname}</td>
                      <td>{teacher.fname}</td>
                      <td>{teacher.class_name}</td>
                    </tr>
                  );
                })}
                {teacher_id && (
                  <tr>
                    <td colSpan={3}></td>
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
              body="Voulez vous vraiment supprimer ce prof"
              color="red"
              delete="true"
              show={showModal}
              onClose={handleClose}
            ></Modal>
          )}
        </div>
      </div>
    </div>
  );
}
