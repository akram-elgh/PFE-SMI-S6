import React, { useState, useEffect } from "react";
import axios from "axios";
// import Modal from "./Modal";

export default function Enrollment() {
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
    axios.get(url).then((result) => {
      console.log(result.data);
      setClasses(result.data);
    });
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
  return (
    <div className="enrollment">
      <div className="enrollment-form">
        <div className="enrollment-labels">
          <ul>
            <li className="enrollment-lable-li">Nom:</li>
            <li className="enrollment-lable-li">Prenom:</li>
            <li className="enrollment-lable-li">Date de naissance:</li>
            <li className="enrollment-lable-li">Numero du telephone:</li>
            <li className="enrollment-lable-li">
              Numero du telephone du parent:
            </li>
            <li className="enrollment-lable-li">Niveau: </li>
            <li className="enrollment-lable-li">Classe: </li>
          </ul>
        </div>
        <div className="enrollment-inputs">
          <form>
            <div className="mb-3">
              <input
                type="text"
                name="fname"
                placeholder="Taper ici"
                value={fname}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="lname"
                placeholder="Taper ici"
                value={lname}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="date"
                name="bDate"
                placeholder="Taper ici"
                value={bDate}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="phoneNum"
                placeholder="Taper ici"
                value={phoneNum}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="parentNum"
                placeholder="Taper ici"
                value={parentNum}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <input
                type="text"
                name="level"
                placeholder="Taper ici"
                value={level}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <div className="mb-3">
              <select
                name="class_id"
                value={class_id}
                className="form-control"
                onChange={handleChange}
              >
                <option value="0" key="0">
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
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
