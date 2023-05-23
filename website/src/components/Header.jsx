/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header(props) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [arLang, setarLang] = useState(false);
  const { home, enroll, our_courses, our_mission, contact_us, lang } =
    props.lang;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    const elements = document.querySelectorAll(".light");
    elements.forEach((e) => {
      e.classList.toggle("dark");
    });
    setDarkMode(!darkMode);
  }

  function handleLangClick() {
    props.onClick(!arLang);
    setarLang(!arLang);
    const elements = document.querySelectorAll(".left");
    elements.forEach((e) => {
      e.classList.toggle("right");
    });
  }

  return (
    <header
      className={`header ${darkMode ? "dark" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        <a href="#landing-page">
          <img src="/images/logo.png" alt="logo" width="30%" height="30%"></img>
        </a>
      </div>
      <div className="nav-links">
        <ul className="nav-links-ul">
          <li className="nav-links-li btn-enroll">
            <a href="">{enroll}</a>
          </li>
          <li className="nav-links-li">
            <a href="#landing-page">{home}</a>
          </li>
          <li className="nav-links-li">
            <a href="#our-mission">{our_mission}</a>
          </li>
          <li className="nav-links-li">
            <a href="#our-courses">{our_courses}</a>
          </li>
          <li className="nav-links-li">
            <a href="#contatc">{contact_us}</a>
          </li>
          <li onClick={handleLangClick} className="language-switcher">
            {lang}
          </li>
          <li className="mode-switcher light" onClick={handleClick}>
            {!darkMode ? (
              <DarkModeIcon fontSize="medium"></DarkModeIcon>
            ) : (
              <LightModeIcon fontSize="medium"></LightModeIcon>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
}
