import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Languages() {
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
          <h3 className="row-parag-title light">Soutien scolaire</h3>
          <p className="row-parag light">
            Profitez d&apos;un soutien scolaire complet et d&apos;une
            préparation aux examens nationaux et régionaux dans toutes les
            matières, pour tous les niveaux et filières. Chez{" "}
            <span className="parag-title"> Markaz Nour Al Ilem </span>, nous
            sommes là pour vous accompagner vers la réussite académique. Nos
            enseignants expérimentés et dévoués vous fourniront l&apos;aide
            nécessaire pour exceller dans chaque discipline. Faites-nous
            confiance pour atteindre vos objectifs scolaires avec succès et
            devenir le meilleur !
          </p>
        </div>
      </div>
    </div>
  );
}
