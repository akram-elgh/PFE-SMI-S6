import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Teacher() {
  const url = "http://localhost:3001/class";
  const [classes, setClasses] = useState([]);
  const [teacher, setTeacher] = useState({
    fname: "",
    lname: "",
    phoneNum: "",
    typeOfPayment: 0,
    class: 0,
  });
  const { fname, lname, phoneNum, typeOfPayment, classId } = teacher;
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setTeacher((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  useEffect(() => {
    axios.get(url).then((response) => setClasses(response.data));
  }, [url]);

  return (
    <div className="space">
      <div className="space-form">
        <div className="space-labels">
          <ul>
            <li className="space-lable-li">Prenom:</li>
            <li className="space-lable-li">Nom:</li>
            <li className="space-lable-li">Numero du telephone:</li>
            <li className="space-lable-li">Type du payment:</li>
            <li className="space-lable-li">Classe:</li>
          </ul>
        </div>
        <div className="space-inputs">
          <form>
            <div className="mb-3">
              <input
                type="text"
                name="fname"
                placeholder="Taper ici"
                value={fname}
                className="form-control "
                onChange={handleChange}
              ></input>
            </div>

            <div className="mb-3">
              <input
                name="lname"
                placeholder="Taper ici"
                value={lname}
                className="form-control"
                onChange={handleChange}
                aria-label="Default select example"
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
                type="number"
                name="typeOfPayment"
                placeholder="Taper ici"
                value={typeOfPayment}
                className="form-control"
                onChange={handleChange}
              ></input>
            </div>
            <select
              type="number"
              name="class_id"
              placeholder="Taper ici"
              value={classId}
              className="form-select"
            >
              <option key={0}>---Selectioner unse classe---</option>
              {classes.map((classe) => {
                return (
                  <option key={classe.class_id} value={classe.class_id}>
                    {classe.class_name}
                  </option>
                );
              })}
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
