/* eslint-disable react/prop-types */
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurCoursesCards from "./OurCoursesCards.jsx";
import Languages from "./Languages.jsx";
import AcademicSupport from "./AcademicSupport.jsx";

export default function OurCourses(props) {
  const { lang } = props;

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <OurCoursesCards lang={lang}></OurCoursesCards>
      <Languages lang={lang}></Languages>
      <AcademicSupport lang={lang}></AcademicSupport>
    </>
  );
}
