import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Languages() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="our-courses-description-1 light row">
      <div className="our-courses-description-title" data-aos="fade-bottom">
        <h2>
          Voulez-vous maîtriser une langue ou vous préparer pour les examens ?
        </h2>
        <h2>Markaz Nour Al Ilem fait le choix idéal.</h2>
      </div>
      <div className="our-courses-description-parag row">
        <div
          className="our-courses-description-paragraph col-6"
          data-aos="fade-right"
        >
          <h3 className="row-parag-title light">
            Cours des langues et communication
          </h3>
          <p className="row-parag light">
            Découvrez le lieu idéal pour apprendre des langues telles que le
            français, l&apos;anglais et l&apos;allemand.
            <span className="parag-title"> Markaz Nour Al Ilem </span>
            vous offre un environnement propice à l&apos;apprentissage, des
            méthodes pédagogiques innovantes et des enseignants hautement
            qualifiés. Que vous souhaitiez améliorer vos compétences
            linguistiques, préparer un examen ou développer votre communication
            interculturelle, notre centre est là pour vous accompagner dans
            votre parcours d&apos;apprentissage des langues. Rejoignez-nous dès
            maintenant et ouvrez les portes d&apos;un monde de possibilités
            linguistiques.
          </p>
        </div>
        <div
          className="our-courses-description-image col-6"
          data-aos="fade-left"
        >
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
