import React, { useState, useEffect } from "react";
import axios from "axios";
import { getLevel } from "../../functions/functions";
import Button from "../../sub-components/Button";
import Modal from "../../sub-components/Modal";

export default function Requests(props) {
  const url = "http://localhost:3001/request?id=";
  const [requests, setRequests] = useState([]);
  const [name, setName] = useState("");
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
    class_name,
  } = student;

  useEffect(() => {
    axios
      .get("http://localhost:3001/request?name=")
      .then((response) => setRequests(response.data));
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
        [name]: value,
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
        props.showSuccessModal("L'etudiant ete bien ajouter");
        axios.delete(url + request_id).then((response) => {
          if (response.status === 200) {
            axios.get(url).then((response) => setRequests(response.data));
            setStudent({});
          }
        });
      } else props.showFailModal("Erreur lors de l'ajout d'etudiant");
    });
  }

  function handleModalClose(answer) {
    setShowModal(false);
    if (answer) {
      axios.delete(url + request_id).then((response) => {
        if (response.status === 200) {
          props.showSuccessModal("La demande ete supprimer avec succes");
          axios.get(url).then((response) => setRequests(response.data));
          setStudent({});
        } else props.showFailModal("Erreur lors du suppression du demande");
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
          placeholder="Taper le nom de l'etudiant"
          value={name}
          onChange={handleChange}
        />
      </div>
      <table className="table table-success table-striped">
        <thead>
          <tr>
            <td></td>
            <td>Nom</td>
            <td>Prenom</td>
            <td>Tele</td>
            <td>Niveau</td>
            <td>Classe</td>
            <td>Date du requet</td>
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
                <td>{getLevel(request.level)}</td>
                <td>{request.class_name}</td>
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
                <li className="space-lable-li">Prenom:</li>
                <li className="space-lable-li">Date de naissance:</li>
                <li className="space-lable-li">Numero du telephone:</li>
                <li className="space-lable-li">
                  Numero du telephone du parent:
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
                    value={bDate || ""}
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
                  <input
                    type="text"
                    name="class_name"
                    placeholder="Taper ici"
                    value={class_name}
                    className="form-control"
                    onChange={handleFormChange}
                    disabled
                  ></input>
                </div>
              </form>
            </div>
          </div>
          <Button
            style={{ "margin-right": "10px" }}
            text="Suprimer la demande"
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
          body="Voulez vous vraiment supprimer la demande"
          delete="true"
          color="red"
        ></Modal>
      )}
    </div>
  );
}
