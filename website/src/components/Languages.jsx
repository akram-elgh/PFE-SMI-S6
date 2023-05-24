/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Languages(props) {
  const {
    languages_title1,
    languages_title2,
    languages_parag_title,
    languages_parag,
  } = props.lang;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="our-courses-description-1 light row">
      <div className="our-courses-description-title" data-aos="fade-bottom">
        <h2>{languages_title1}</h2>
        <h2>{languages_title2}</h2>
      </div>
      <div className="our-courses-description-parag row">
        <div
          className="our-courses-description-paragraph col-6"
          data-aos="fade-right"
        >
          <h3 className="row-parag-title light left">
            {languages_parag_title}
          </h3>
          <p
            className="row-parag light left"
            dangerouslySetInnerHTML={{ __html: languages_parag }}
          ></p>
        </div>
        <div className="row-description-image col-6" data-aos="fade-left">
          <img
            src="/images/english.svg"
            alt="english course"
            height="80%"
            width="60%"
          />
        </div>
      </div>
    </div>
  );
}
