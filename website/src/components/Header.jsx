import { useEffect, useState } from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

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
  return (
    <header
      className={`header ${darkMode ? "dark" : ""} ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="logo">
        <a href="#landing-page">
          <img
            src="/images/logo.png"
            alt="logo"
            width="140px"
            height="140px"
          ></img>
        </a>
      </div>
      <div className="nav-links">
        <ul className="nav-links-ul">
          <li className="nav-links-li btn-enroll">
            <a href="">S&apos;inscrire</a>
          </li>
          <li className="nav-links-li">
            <a href="#landing-page">Acceuil</a>
          </li>
          <li className="nav-links-li">
            <a href="#our-mission">Notre mission</a>
          </li>
          <li className="nav-links-li">
            <a href="#our-courses">Nos cours</a>
          </li>
          <li className="nav-links-li">
            <a href="#contatc">Contactez nous</a>
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
