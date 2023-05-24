/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Enroll(props) {
  const {
    enrollment,
    enroll_title1,
    enroll_title2,
    enroll_title3,
    enroll_li1,
    enroll_li2,
    enroll_li3,
    enroll_parag,
    enroll_btn,
  } = props.lang;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="enroll light row" id="enroll">
      <div className="row-description-title" data-aos="fade-bottom">
        <h1 className="row-title light text-center left">{enrollment}</h1>
      </div>
      <div className="row-description-parag row">
        <div className="our-courses-description-paragraph col-6">
          <div
            className="enroll-parag-section"
            data-aos="fade-right"
            style={{ "--number": 1 }}
          >
            <h3 className="row-parag-title enroll light left">
              {enroll_title1}
            </h3>
            <ul className="row-parag light left">
              <li className="enroll-li">{enroll_li1}</li>
              <li className="enroll-li">{enroll_li2}</li>
            </ul>
          </div>
          <div
            className="enroll-parag-section"
            data-aos="fade-right"
            style={{ "--number": 2 }}
          >
            <h3 className="row-parag-title enroll light left">
              {enroll_title2}
            </h3>
            <ul className="row-parag light left">
              <li className="enroll-li">{enroll_li3}</li>
            </ul>
          </div>
          <div
            className="enroll-parag-section"
            data-aos="fade-right"
            style={{ "--number": 3 }}
          >
            <h3 className="row-parag-title online enroll light left">
              {enroll_title3}
            </h3>
            <p className="row-parag light left">{enroll_parag}</p>
          </div>
          <div
            className="enroll-parag-section enroll-btn-section left"
            data-aos="fade-right"
            style={{ "--number": 4 }}
          >
            <button className="btn btn-enroll">{enroll_btn}</button>
          </div>
        </div>
        <div className="row-description-image col-6" data-aos="fade-left">
          <img
            src="/images/fill.svg"
            alt="english course"
            height="80%"
            width="60%"
          />
        </div>
      </div>
    </div>
  );
}
