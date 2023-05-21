export default function LandingPage() {
  return (
    <div className="landing-page row" id="landing-page">
      <div className="landing-page-description col-4">
        <div>
          <h1 className="title">Soyer le meilleur !</h1>
        </div>
        <div className="landing-page-parag">
          <p>
            Développez vos potentiels linguistiques et académiques grâce à notre
            large choix de cours offerts par
            <span className="parag-title"> Markaz Nour Al Ilem</span>
          </p>
        </div>
        <div className="enroll-now">
          <div className="landing-page-parag">
            <p>Decouvrez nos offres des cours et inscrivez vous maintenant !</p>
          </div>
          <div className="landing-page-buttons">
            <button className="btn btn-lg btn-courses">
              <a href="#our-courses">Nos Cours</a>
            </button>
            <button className="btn btn-lg btn-enroll">
              <a href="#enroll">S&apos;inscrire</a>
            </button>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="landing-page-image">
          <img
            src="/images/best2.png"
            alt="best"
            width="90%"
            height="80%"
          ></img>
        </div>
      </div>
    </div>
  );
}
