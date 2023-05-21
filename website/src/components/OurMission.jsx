import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurMission() {
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
          <h1 className="row-title">Notre Mission</h1>
        </div>
        <div className="section-parag">
          <p className="row-parag light">
            Notre mission depuis 16 ans est de fournir un enseignement de
            qualité et un soutien académique exceptionnel. Chez Markaz Nour Al
            Ilem, nous sommes dédiés à aider nos étudiants à développer leurs
            compétences linguistiques et académiques. Avec notre équipe
            expérimentée et notre engagement envers l&apos;excellence, nous
            guidons nos étudiants vers la réussite et les préparons pour un
            avenir prometteur.
          </p>
        </div>
      </div>
    </div>
  );
}
