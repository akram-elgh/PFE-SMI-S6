/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurMission(props) {
  const { our_mission, our_mission_parag } = props.lang;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="our-mission row" id="our-mission">
      <div className="our-mission-img col-6" data-aos="fade-right">
        <img
          src="/images/Teaching.svg"
          alt="teacher image"
          height="80%"
          width="80%"
        />
      </div>
      <div className="section-description col-6" data-aos="fade-left">
        <div className="our-mission-title ">
          <h1 className="row-title left">{our_mission}</h1>
        </div>
        <div className="section-parag">
          <p
            className="row-parag light left"
            dangerouslySetInnerHTML={{ __html: our_mission_parag }}
          ></p>
        </div>
      </div>
    </div>
  );
}
