import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../sub-components/Button";
import { getPaymentType } from "../functions/functions";

export default function Teacher(props) {
  const types = getPaymentType();
  const url = "http://localhost:3001/class";
  const [type, setType] = useState({
    isTypeSelected: false,
    typeTitle: "",
  });
  const [classes, setClasses] = useState([]);
  const [teacher, setTeacher] = useState({
    fname: "",
    lname: "",
    phoneNum: "",
    typeOfPayment: 0,
    salary: 0,
    class_id: 0,
  });
  const { isTypeSelected, typeTitle } = type;
  const { fname, lname, phoneNum, typeOfPayment, salary, class_id } = teacher;

  useEffect(() => {
    axios.get(url).then((response) => setClasses(response.data));
  }, [url]);

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setTeacher((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
    if (name === "typeOfPayment") {
      let typetitle = "";
      if (Number(value) === 1) typetitle = "Salaire par eleve:";
      else if (Number(value) === 2) typetitle = "Salaire par heure:";
      else typetitle = "Pourcentage du salaire:";
      setType({
        isTypeSelected: Number(value) !== 0,
        typeTitle: typetitle,
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (Number(class_id) === 0) {
      props.showFailModal("Veuillez choisir une classe.");
    } else {
      axios.post(url, teacher).then((response) => {
        if (response.status === 200)
          props.showSuccessModal("Le prof a ete ajouter avec succes.");
        else props.showFailModal("Un erreur lors dde l'ajout du prof.");
      });
      setTeacher({
        fname: "",
        lname: "",
        phoneNum: "",
        typeOfPayment: 0,
        salary: 0,
        class_id: 0,
      });
    }
  }

  return (
    <div className="space">
      <div className="space-form">
        <div className="space-labels">
          <ul>
            <li className="space-lable-li">Prenom:</li>
            <li className="space-lable-li">Nom:</li>
            <li className="space-lable-li">Numero du telephone:</li>
            <li className="space-lable-li">Type du payment:</li>
            {isTypeSelected && <li className="space-lable-li">{typeTitle}</li>}
            <li className="space-lable-li">Classe:</li>
          </ul>
        </div>
        <div className="space-inputs">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="fname"
                placeholder="Taper ici"
                value={fname}
                className="form-control "
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="mb-4">
              <input
                name="lname"
                placeholder="Taper ici"
                value={lname}
                className="form-control"
                onChange={handleChange}
                aria-label="Default select example"
                required
              ></input>
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="phoneNum"
                placeholder="Taper ici"
                value={phoneNum}
                className="form-control"
                onChange={handleChange}
                required
              ></input>
            </div>
            <select
              type="number"
              name="typeOfPayment"
              placeholder="Taper ici"
              value={typeOfPayment}
              className="form-select mb-4"
              onChange={(event) => {
                handleChange(event);
                // handleTypeChange();
              }}
            >
              {types.map((type, index) => {
                return (
                  <option key={index} value={index}>
                    {type}
                  </option>
                );
              })}
            </select>
            {isTypeSelected && (
              <div className="mb-4">
                <input
                  type="number"
                  name="salary"
                  placeholder="Taper ici"
                  value={salary}
                  className="form-control"
                  onChange={handleChange}
                  required
                ></input>
              </div>
            )}
            <select
              type="number"
              name="class_id"
              placeholder="Taper ici"
              value={class_id}
              className="form-select"
              onChange={handleChange}
            >
              <option key={0} value="0">
                ---Selectioner unse classe---
              </option>
              {classes.map((classe) => {
                return (
                  <option key={classe.class_id} value={classe.class_id}>
                    {classe.class_name}
                  </option>
                );
              })}
            </select>
            <Button></Button>
          </form>
        </div>
      </div>
    </div>
  );
}
