/* eslint-disable react/prop-types */
import { useState } from "react";

export default function EnrollModal(props) {
  const isDarkMode = !!document.querySelector(".dark");
  const [student, setStudent] = useState({});
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
    courses,
    levels,
    enroll_btn,
    modal_close,
  } = props.lang;
  const { fname, lname, bDate, phoneNum, parentNum, level, class_name } =
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
                <form className="modal-form">
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control light left modal-input"
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
                  <div className="form-floating mb-3">
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
                  <div className="form-floating mb-3">
                    <input
                      type="date"
                      className="form-control light left modal-input"
                      id="floatingInput"
                      placeholder="Date de naissance"
                      name="bdate"
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
                  <div className="form-floating mb-3">
                    <select
                      type="text"
                      className="form-select light left modal-input"
                      id="floatingInput"
                      placeholder="text"
                      name="phoneNum"
                      value={phoneNum}
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
                      {modal_li4}
                    </label>
                  </div>
                  <div className="form-floating mb-3">
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
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control light left modal-input"
                      id="floatingInput"
                      placeholder="Password"
                      name="level"
                      value={level}
                      onChange={handleChange}
                      required
                    />
                    <label
                      htmlFor="floatingInput"
                      className="modal-label light left modal-input"
                    >
                      {modal_li6}
                    </label>
                  </div>
                  <div className="form-floating mb-3">
                    <select
                      className="form-select modal-input left light"
                      id="floatingInput"
                      name="class_name"
                      value={class_name}
                      required
                    >
                      <option value={0}>{modal_li8}</option>
                      {courses.map((course, index) => {
                        return (
                          <option value={course} key={index}>
                            {course}
                          </option>
                        );
                      })}
                    </select>
                    <label className="modal-label left" htmlFor="floatingInput">
                      {modal_li7}
                    </label>
                  </div>
                  <div className="mb-3 left">
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
