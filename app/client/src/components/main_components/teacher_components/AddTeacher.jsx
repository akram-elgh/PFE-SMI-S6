import React, { useState } from "react";
import axios from "axios";
import Button from "../../sub-components/Button";
import { getPaymentType } from "../../functions/functions";

export default function AddTeacher(props) {
  const types = getPaymentType();
  const teacher_url = "http://localhost:3001/teacher";
  const [type, setType] = useState({
    isTypeSelected: false,
    typeTitle: "",
  });
  const [teacher, setTeacher] = useState({});
  const { isTypeSelected, typeTitle } = type;
  const { fname, lname, phoneNum, typeOfPayment, salary } = teacher;

  function handleChange(event) {
    const name = event.target.name;
    const value =
      name === "salary" || name === "typeOfPayment"
        ? Number(event.target.value)
        : event.target.value;
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
    axios.post(teacher_url, teacher).then((response) => {
      if (response.status === 200) {
        props.showSuccessModal("Le prof a ete ajouter avec succes.");
        setTeacher({
          fname: "",
          lname: "",
          phoneNum: "",
          typeOfPayment: 0,
          salary: 0,
        });
        setType({
          isTypeSelected: false,
          typeTitle: "",
        });
      } else props.showFailModal("Un erreur lors de l'ajout du prof.");
    });
  }

  return (
    <div className="space">
      <div className="space-form">
        <div className="space-labels">
          <ul>
            <li className="space-lable-li">Prenom:</li>
            <li className="space-lable-li">Nom:</li>
            <li className="space-lable-li">Numero du telephone:</li>
            <li className="space-lable-li">Type du contrat:</li>
            {isTypeSelected && <li className="space-lable-li">{typeTitle}</li>}
          </ul>
        </div>
        <div className="space-inputs">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                name="lname"
                placeholder="Taper ici"
                value={lname}
                className="form-control "
                onChange={handleChange}
                required
              ></input>
            </div>

            <div className="mb-4">
              <input
                name="fname"
                placeholder="Taper ici"
                value={fname}
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
                  <option type="number" key={index} value={index}>
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
            <Button color="primary"></Button>
          </form>
        </div>
      </div>
    </div>
  );
}
