import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import OurCoursesCards from "./OurCoursesCards.jsx";
import Languages from "./Languages.jsx";
import AcademicSupport from "./AcademicSupport.jsx";

export default function OurCourses() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <OurCoursesCards></OurCoursesCards>
      <Languages></Languages>
      <AcademicSupport></AcademicSupport>
    </>
  );
}
