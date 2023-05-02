import React, { useState } from "react";

export default function Teacher() {
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
  return (
    <div className="enrollment">
      <div className="enrollment-form">
        <div className="enrollment-labels">
          <ul>
            <li className="enrollment-lable-li">Prenom:</li>
            <li className="enrollment-lable-li">Nom:</li>
            <li className="enrollment-lable-li">Numero du telephone:</li>
            <li className="enrollment-lable-li">Type du payment:</li>
            <li className="enrollment-lable-li">Classe:</li>
          </ul>
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
            ></select>
          </form>
        </div>
      </div>
    </div>
  );
}
