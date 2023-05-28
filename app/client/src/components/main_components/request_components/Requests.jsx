import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLevel, getEnrollmetnType } from "../../functions/functions";
import Button from "../../sub-components/Button";
import Modal from "../../sub-components/Modal";

export default function Requests(props) {
  const url = "http://localhost:3001/request?id=";
  const [requests, setRequests] = useState([]);
  const [name, setName] = useState("");
  const [classes, setClasses] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [student, setStudent] = useState({});
  const {
    request_id,
    fname,
    lname,
    bDate,
    phoneNum,
    parentNum,
    level,
    type,
    class_id,
  } = student;

  useEffect(() => {
    axios
      .get("http://localhost:3001/request?name=")
      .then((response) => setRequests(response.data));
    axios
      .get("http://localhost:3001/class")
      .then((response) => setClasses(response.data));
  }, []);

  function handleChange(event) {
    const name = event.target.value;
    axios
      .get("http://localhost:3001/request?name=" + name)
      .then((response) => setRequests(response.data));
    setName(name);
  }

  function handleFormChange(event) {
    const name = event.target.name;
    const value =
      name === "level" || name === "class_id" || name === "new_class_id"
        ? Number(event.target.value)
        : event.target.value;
    setStudent((prevValues) => {
      return {
        ...prevValues,
        [name]: name === "bDate" ? value.slice(0, 10) : value,
      };
    });
  }

  function handleCheckChange(event) {
    if (event.target.checked) {
      const id = event.target.value;
      // const url = studentUrl + "?id=" + id;
      axios.get(url + id).then((response) => {
        setStudent({
          ...response.data[0],
        });
        setRequests(response.data);
      });
    } else {
      axios
        .get("http://localhost:3001/request?name=" + name)
        .then((response) => {
          setRequests(response.data);
          setStudent({});
        });
    }
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    axios.post("http://localhost:3001/student", student).then((response) => {
      if (response.status === 200) {
        props.showSuccessModal("L'étudiant a été bien ajouté.");
        axios.delete(url + request_id).then((response) => {
          if (response.status === 200) {
            axios.get(url).then((response) => setRequests(response.data));
            setStudent({});
          }
        });
      } else props.showFailModal("Erreur lors de l'ajout de l'étudiant.");
    });
  }

  function handleModalClose(answer) {
    setShowModal(false);
    if (answer) {
      axios.delete(url + request_id).then((response) => {
        if (response.status === 200) {
          props.showSuccessModal("La demande a été supprimée avec succès.");
          axios.get(url).then((response) => setRequests(response.data));
          setStudent({});
        } else props.showFailModal("Erreur lors de la suppression de la demande.");
      });
    }
  }

  return (
    <div className="search-space">
      <div className="search-space-input">
        <input
          type="text"
          name="name"
          className="form-control"
          placeholder="Taper le nom de l'étudiant"
          value={name}
          onChange={handleChange}
        />
      </div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <td></td>
            <td>Nom</td>
            <td>Prénom</td>
            <td>Télé</td>
            <td>Télé du parent</td>
            <td>Date de naissance</td>
            <td>Niveau</td>
            <td>Classe</td>
            <td>Type de demande</td>
            <td>Date de la demande</td>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => {
            return (
              <tr key={request.request_id}>
                <td>
                  <div className="form-check form-switch">
                    <input
                      type="checkbox"
                      name="request_id"
                      className="form-check-input"
                      role="switch"
                      value={request.request_id}
                      onChange={handleCheckChange}
                      checked={request_id === request.request_id}
                    />
                  </div>
                </td>
                <td>{request.lname}</td>
                <td>{request.fname}</td>
                <td>{request.phoneNum}</td>
                <td>{request.parentNum}</td>
                <td>{request.bd}</td>
                <td>{getLevel(request.level)}</td>
                <td>{request.class_name}</td>
                <td>{getEnrollmetnType(request.type)}</td>
                <td>{request.date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {request_id && (
        <div className="update-space-form">
          <div className="space-form">
            <div className="space-labels">
              <ul>
                <li className="space-lable-li">Nom:</li>
                <li className="space-lable-li">Prénom:</li>
                <li className="space-lable-li">Date de naissance:</li>
                <li className="space-lable-li">Numéro de téléphone:</li>
                <li className="space-lable-li">
                  Numéro de téléphone du parent:
                </li>
                <li className="space-lable-li">Niveau: </li>
                <li className="space-lable-li">Classe: </li>
              </ul>
            </div>
            <div className="space-inputs">
              <form onSubmit={handleFormSubmit}>
                <div className="mb-4">
                  <input
                    type="text"
                    name="lname"
                    placeholder="Taper ici"
                    value={lname}
                    className="form-control"
                    // onChange={handleFormChange}
                    disabled
                  ></input>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="fname"
                    placeholder="Taper ici"
                    value={fname}
                    className="form-control"
                    // onChange={handleFormChange}
                    disabled
                  ></input>
                </div>
                <div className="mb-4">
                  <input
                    type="date"
                    name="bDate"
                    placeholder="Taper ici"
                    value={bDate?.slice(0, 10)}
                    className="form-control"
                    onChange={handleFormChange}
                  ></input>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="phoneNum"
                    placeholder="Taper ici"
                    value={phoneNum}
                    className="form-control"
                    onChange={handleFormChange}
                  ></input>
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="parentNum"
                    placeholder="Taper ici"
                    value={parentNum}
                    className="form-control"
                    onChange={handleFormChange}
                  ></input>
                </div>
                <div className="mb-4">
                  <select
                    type="text"
                    name="level"
                    placeholder="Taper ici"
                    value={level}
                    className="form-select"
                    onChange={handleFormChange}
                  >
                    {getLevel().map((level, index) => {
                      return (
                        <option key={index} value={index}>
                          {level}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="mb-4">
                  <select
                    type="text"
                    name="class_id"
                    placeholder="Taper ici"
                    value={class_id}
                    className="form-select"
                    onChange={handleFormChange}
                  >
                    <option key={0} value={0}>
                      ---Selectioner une classe---
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
              </form>
            </div>
          </div>
          <Button
            style={{ marginRight: "10px" }}
            text="Supprimer la demande"
            color="danger"
            onClick={() => setShowModal(true)}
          ></Button>
          <Button
            text="Accepter la demande"
            color="success"
            onClick={handleFormSubmit}
          ></Button>
        </div>
      )}
      {showModal && (
        <Modal
          onClose={handleModalClose}
          show={showModal}
          classe="danger"
          title="Attention"
          body="Voulez-vous vraiment supprimer la demande"
          delete="true"
          color="red"
        ></Modal>
      )}
    </div>
  );
}
