import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "../sub-components/Button";
import { getLevel } from "../functions/functions";

export default function Enrollment(props) {
  const levels = getLevel();
  const url = "http://localhost:3001/class";
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    bDate: "",
    level: "",
    phoneNum: "",
    parentNum: "",
    class_id: "",
  });
  const { fname, lname, bDate, level, phoneNum, parentNum, class_id } = student;
  const [classes, setClasses] = useState([{}]);
  useEffect(() => {
    axios.get(url).then((result) => setClasses(result.data));
  }, [url]);
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setStudent((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(student);
    if (Number(class_id) === 0) {
      props.showFailModal("Veuillez selectioner une classe.");
    }
    if (Number(level) === 0) {
      props.showFailModal("Veuillez selectioner un niveau.");
    }
  }

  return (
    <div className="space">
      <div className="space-form">
        <div className="space-labels">
          <ul>
            <li className="space-lable-li">Nom:</li>
            <li className="space-lable-li">Prenom:</li>
            <li className="space-lable-li">Date de naissance:</li>
            <li className="space-lable-li">Numero du telephone:</li>
            <li className="space-lable-li">Numero du telephone du parent:</li>
            <li className="space-lable-li">Niveau: </li>
            <li className="space-lable-li">Classe: </li>
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
                className="form-control"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lname"
                placeholder="Taper ici"
                value={lname}
                className="form-control"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="mb-4">
              <input
                type="date"
                name="bDate"
                placeholder="Taper ici"
                value={bDate}
                className="form-control"
                onChange={handleChange}
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
              ></input>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="parentNum"
                placeholder="Taper ici"
                value={parentNum}
                className="form-control"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="mb-4">
              <select
                type="text"
                name="level"
                placeholder="Taper ici"
                value={level}
                className="form-select"
                onChange={handleChange}
              >
                {levels.map((level, index) => {
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
                name="class_id"
                value={class_id}
                className="form-select"
                onChange={handleChange}
              >
                <option value="0" key={0}>
                  ---Selectioner une classe---
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
