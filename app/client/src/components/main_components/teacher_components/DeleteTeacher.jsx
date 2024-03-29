import React, { useState, useEffect } from "react";
import Button from "../../sub-components/Button";
import axios from "axios";
import Modal from "../../sub-components/Modal";

export default function DeleteTeacher(props) {
  const url = "http://localhost:3001/teacher?id=";
  const classUrl = "http://localhost:3001/class";
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [teacherToDelete, setTeacherToDelete] = useState({});
  const [showModal, setShowModal] = useState(false);
  const { teacher_id } = teacherToDelete;

  useEffect(() => {
    axios.get(url).then((response) => setTeachers(response.data));
    axios.get(classUrl).then((response) => setClasses(response.data));
  }, [url, classUrl]);

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
          props.showSuccessModal("Le prof a été supprimé avec succès.");
        } else {
          props.showFailModal("Erreur lors de la suppression du prof");
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
          <h3>Sélectionner un prof</h3>
        </div>
        <div className="update-space-search-table">
          <form onSubmit={handleSubmit}>
            <table className="table table-striped table-primary table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom</th>
                  <th>Prénom</th>
                  <th>Classes</th>
                </tr>
              </thead>
              <tbody>
                {teachers.slice(teacher_id ? 0 : 1).map((teacher) => {
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
                      <td>
                        {classes
                          .filter(
                            (obj) => obj.teacher_id === teacher.teacher_id
                          )
                          .map((classe) => {
                            return `${classe.class_name || "_"} `;
                          })}
                      </td>
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
              body="Voulez-vous vraiment supprimer ce prof."
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
