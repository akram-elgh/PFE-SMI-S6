/* eslint-disable react/prop-types */
export default function LandingPage(props) {
  const { landing_title, landing_parag1, landing_parag2, our_courses, enroll } =
    props.lang;
  return (
    <div className="landing-page row" id="landing-page">
      <div className="landing-page-description col-4">
        <div>
          <h1 className="title light left">{landing_title}</h1>
        </div>
        <div className="landing-page-parag light left">
          <p dangerouslySetInnerHTML={{ __html: landing_parag1 }}></p>
        </div>
        <div className="enroll-now">
          <div className="landing-page-parag light left">
            <p>{landing_parag2}</p>
          </div>
          <div className="landing-page-buttons left">
            <button className="btn btn-lg btn-courses">
              <a href="#our-courses">{our_courses}</a>
            </button>
            <button className="btn btn-lg btn-enroll">
              <a href="#enroll">{enroll}</a>
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
