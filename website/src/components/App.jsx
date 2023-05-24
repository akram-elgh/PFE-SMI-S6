import LandingPage from "./LandingPage.jsx";
import OurMission from "./OurMission.jsx";
import WhyUS from "./WhyUS.jsx";
import Header from "./Header.jsx";
import OurCourses from "./OurCourses.jsx";
import Enroll from "./Enroll.jsx";
import { useState } from "react";
import ar from "./languages/ar.json";
import fr from "./languages/fr.json";

export default function App() {
  const [isLangAr, setIsLangAr] = useState(false);
  const lang = isLangAr ? ar : fr;
  return (
    <div>
      <Header onClick={(lang) => setIsLangAr(lang)} lang={lang}></Header>
      <LandingPage lang={lang}></LandingPage>
      <OurMission lang={lang}></OurMission>
      <WhyUS lang={lang}></WhyUS>
      <OurCourses lang={lang}></OurCourses>
      <Enroll lang={lang}></Enroll>
    </div>
  );
}
