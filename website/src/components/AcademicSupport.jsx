/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AcademicSupport(props) {
  const { academic_parag_title, academic_parag } = props.lang;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="our-courses-description-2 light row">
      <div className="our-courses-description-parag row">
        <div
          className="our-courses-description-image col-6"
          data-aos="fade-right"
        >
          <img
            src="/images/graduation.svg"
            alt="english course"
            height="80%"
            width="60%"
          />
        </div>
        <div
          className="our-courses-description-paragraph col-6"
          data-aos="fade-left"
        >
          <h3 className="row-parag-title light left">{academic_parag_title}</h3>
          <p
            className="row-parag light left"
            dangerouslySetInnerHTML={{ __html: academic_parag }}
          ></p>
        </div>
      </div>
    </div>
  );
}
