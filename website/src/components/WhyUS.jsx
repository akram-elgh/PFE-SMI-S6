import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function WhyUS() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="why-us row" id="why-us">
      <div className="col-6 section-description" data-aos="fade-right">
        <div>
          <h1 className="row-title">Pourquoi Markaz Nour Al Ilem</h1>
        </div>
        <div className="section-parag">
          <p className="row-parag light">
            Chez Markaz Nour Al Ilem, nous avons les meilleurs enseignants de
            Tetouan. Leur expertise dans toutes les matières est bien connue, ce
            qui en fait le choix idéal pour votre apprentissage. Faites
            confiance à nos enseignants expérimentés pour une expérience
            d&apos;apprentissage exceptionnelle.
          </p>
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
