import React, { useState, useEffect } from "react";
import Button from "../../sub-components/Button";
import axios from "axios";
import Modal from "../../sub-components/Modal";

export default function DeleteClass(props) {
  const url = "http://localhost:3001/class?id=";
  const [classes, setClasses] = useState([]);
  const [classeToDelete, setClasseToDelete] = useState({});
  const [showModal, setShowModal] = useState(false);

  const { class_id } = classeToDelete;

  useEffect(() => {
    axios.get(url).then((response) => setClasses(response.data));
  }, [url]);

  function handleCheckChange(event) {
    if (event.target.checked) {
      const id = event.target.value;
      axios.get(url + id).then((response) => {
        setClasseToDelete(response.data[0]);
        setClasses(response.data);
      });
    } else {
      axios.get(url).then((response) => {
        setClasses(response.data);
        setClasseToDelete({});
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
      axios.delete(url + class_id).then((response) => {
        if (response.status === 200) {
          props.showSuccessModal("La classe ete supprimer avec succes");
        } else {
          props.showFailModal("Erreur lors de suppresion du classe");
        }
        axios.get(url).then((response) => setClasses(response.data));
        setClasseToDelete({});
      });
    } else {
      setShowModal(false);
    }
  }

  return (
    <div className="update-space">
      <div className="update-space-search">
        <div className="update-space-search-input">
          <h3>Selectionner une classe</h3>
        </div>
        <div className="update-space-search-table">
          <form onSubmit={handleSubmit}>
            <table className="table table-striped table-primary table-hover">
              <thead>
                <tr>
                  <th></th>
                  <th>Nom</th>
                  <th>Salle</th>
                  <th>Prof</th>
                </tr>
              </thead>
              <tbody>
                {classes.map((classe) => {
                  return (
                    <tr key={classe.id}>
                      <td>
                        <div className="form-check form-switch">
                          <input
                            type="checkbox"
                            name="id"
                            className="form-check-input"
                            role="switch"
                            value={classe.class_id}
                            onChange={handleCheckChange}
                            checked={classe.class_id === class_id}
                          />
                        </div>
                      </td>
                      <td>{classe.class_name}</td>
                      <td>{classe.classroom}</td>
                      <td>{classe.fname || "___"}</td>
                    </tr>
                  );
                })}
                {class_id && (
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
              body={
                <p style={{ textAlign: "left" }}>
                  Tous les etudiant et le prof inscrits dans ce classe vont etre
                  supprimer <br /> Voulez-vous vraiment supprimer cette classe
                </p>
              }
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
