/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyUS(props) {
  const { why_us, why_us_parag } = props.lang;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="why-us row" id="why-us">
      <div className="col-6 section-description" data-aos="fade-right">
        <div>
          <h1 className="row-title left">{why_us}</h1>
        </div>
        <div className="section-parag">
          <p
            className="row-parag light left"
            dangerouslySetInnerHTML={{ __html: why_us_parag }}
          ></p>
        </div>
      </div>
      <div className="col-6 why-us-img" data-aos="fade-left">
        <img
          src="/images/Classroom.svg"
          alt="classroom"
          height="80%"
          width="80%"
        />
      </div>
    </div>
  );
}
