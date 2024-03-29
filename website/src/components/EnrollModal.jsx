/* eslint-disable react/prop-types */
import { useState } from "react";
import axios from "axios";

export default function EnrollModal(props) {
  const isDarkMode = !!document.querySelector(".dark");
  const [student, setStudent] = useState({
    fname: "",
    lname: "",
    bDate: "",
    phoneNum: "",
    parentNum: "",
    level: 0,
    type: 0,
    class_name: 0,
  });
  const [correctInput, setCorrectInput] = useState({
    show: false,
    correct: false,
    erro: false,
  });
  const { show, correct, error } = correctInput;
  const {
    modal_title,
    modal_li1,
    modal_li2,
    modal_li3,
    modal_li4,
    modal_li5,
    modal_li6,
    modal_li7,
    modal_li8,
    modal_li9,
    types,
    courses,
    levels,
    enroll_btn,
    modal_close,
    modal_success,
    modal_danger,
    modal_error,
  } = props.lang;
  const { fname, lname, bDate, phoneNum, parentNum, level, type, class_name } =
    student;

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
    if (Number(level) === 0 || Number(type) === 0 || Number(class_name) === 0)
      setCorrectInput({ show: true, correct: false });
    else {
      axios.post("http://localhost:3001/request", student).then((response) => {
        if (response.status === 200) {
          setCorrectInput({ show: true, correct: true });
          setStudent({
            fname: "",
            lname: "",
            bDate: "",
            phoneNum: "",
            parentNum: "",
            level: 0,
            type: 0,
            class_name: 0,
          });
        } else setCorrectInput({ show: true, correct: false });
      });
    }
  }

  return (
    <div
      className={`modal enroll-modal light ${isDarkMode ? "dark" : ""} ${
        props.show ? "show" : ""
      }`}
      tabIndex="-1"
    >
      <div className="modal-dialog modal-fullscreen ">
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title light">{modal_title}</h3>
            <button
              onClick={props.onClick}
              type="button"
              className="btn-close light"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="modal-description-row">
              <div className="col-6">
                {show && (
                  <p
                    className="light left"
                    style={{ color: correct ? "green" : "red", width: "90%" }}
                  >
                    {correct
                      ? modal_success
                      : error
                      ? modal_error
                      : modal_danger}
                  </p>
                )}
                <form className="modal-form" onSubmit={handleSubmit}>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      className={`form-control light left modal-input`}
                      id="floatingInput"
                      placeholder="Nom"
                      name="lname"
                      value={lname}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="floatingInput"
                      className="modal-label light left modal-input"
                    >
                      {modal_li1}
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      className="form-control light left modal-input"
                      id="floatingInput"
                      placeholder="Prenom"
                      name="fname"
                      value={fname}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="floatingInput"
                      className="modal-label light left modal-input"
                    >
                      {modal_li2}
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="date"
                      className="form-control light left modal-input"
                      id="floatingInput"
                      placeholder="Date de naissance"
                      name="bDate"
                      value={bDate}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="floatingInput"
                      className="modal-label light left modal-input"
                    >
                      {modal_li3}
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      className="form-control light left modal-input"
                      id="floatingInput"
                      placeholder="Password"
                      name="phoneNum"
                      value={phoneNum}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="floatingInput"
                      className="modal-label light left modal-input"
                    >
                      {modal_li4}
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="text"
                      className="form-control light left modal-input"
                      id="floatingInput"
                      placeholder="text"
                      name="parentNum"
                      value={parentNum}
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="floatingInput"
                      className="modal-label light left modal-input"
                    >
                      {modal_li5}
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <select
                      type="text"
                      className="form-select light left modal-input"
                      id="floatingInput"
                      placeholder="text"
                      name="level"
                      value={level}
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
                    <label
                      htmlFor="floatingInput"
                      className="modal-label light left modal-input"
                    >
                      {modal_li6}
                    </label>
                  </div>
                  <div className="form-floating mb-4">
                    <select
                      className="form-select modal-input left light"
                      id="floatingInput"
                      name="type"
                      value={type}
                      onChange={handleChange}
                      required
                    >
                      {types.map((type, index) => {
                        return (
                          <option value={index} key={index}>
                            {type}
                          </option>
                        );
                      })}
                    </select>
                    <label className="modal-label left" htmlFor="floatingInput">
                      {modal_li7}
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <select
                      className="form-select modal-input left light"
                      id="floatingInput"
                      name="class_name"
                      value={class_name}
                      onChange={handleChange}
                      required
                    >
                      <option value={0}>{modal_li9}</option>
                      {courses.map((course, index) => {
                        return (
                          <option value={course} key={index}>
                            {course}
                          </option>
                        );
                      })}
                    </select>
                    <label className="modal-label left" htmlFor="floatingInput">
                      {modal_li8}
                    </label>
                  </div>
                  <div className="left">
                    <button className="btn btn-enroll" type="submit">
                      {enroll_btn}
                    </button>
                  </div>
                </form>
              </div>
              <div className="row-img col-6 text-center">
                <img
                  src="/images/fill2.svg"
                  alt="filling the form"
                  height="70%"
                  width="70%"
                />
              </div>
            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={props.onClick}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              {modal_close}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
