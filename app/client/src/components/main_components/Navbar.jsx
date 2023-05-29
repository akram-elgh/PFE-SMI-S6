import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PaymentIcon from "@mui/icons-material/Payment";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import PersonIcon from "@mui/icons-material/Person";
import SensorDoorIcon from "@mui/icons-material/SensorDoor";
import ManIcon from "@mui/icons-material/Man";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PaidIcon from "@mui/icons-material/Paid";
import NotificationsIcon from "@mui/icons-material/Notifications";

export default function Navbar(props) {
  const [activeTab, setActiveTab] = useState("home");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div
      className="navbar"
      onMouseOver={props.onMouseOver}
      onMouseLeave={props.onMouseLeave}
      style={props.style}
    >
      <ul>
        <li
          className={`nav-item ${activeTab === "home" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Acceuil");
            handleTabClick("home");
          }}
        >
          <HomeIcon fontSize="large" color="grey" /> Acceuil
        </li>
        <li
          className={`nav-item ${activeTab === "notification" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Notifications des demandes en ligne");
            handleTabClick("notification");
          }}
        >
          <NotificationsIcon fontSize="large" color="grey" /> Notifications
        </li>
        <li
          className={`nav-item ${activeTab === "payment" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Espace payment");
            handleTabClick("payment");
          }}
        >
          <PaymentIcon fontSize="large" /> Espace Paiment
        </li>
        <li
          className={`nav-item ${activeTab === "enrollment" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Espace Inscription");
            handleTabClick("enrollment");
          }}
        >
          <AppRegistrationIcon fontSize="large" /> Espace Inscription
        </li>
        <li
          className={`nav-item ${activeTab === "student" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Espace Etudiant");
            handleTabClick("student");
          }}
        >
          <PersonIcon fontSize="large" /> Espace Etudiant
        </li>
        <li
          className={`nav-item ${activeTab === "class" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Espace Classe");
            handleTabClick("class");
          }}
        >
          <SensorDoorIcon fontSize="large" /> Espace classe
        </li>
        <li
          className={`nav-item ${activeTab === "prof" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Espace Prof");
            handleTabClick("prof");
          }}
        >
          <ManIcon fontSize="large" /> Espace Prof
        </li>
        <li
          className={`nav-item ${activeTab === "schedule" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Espace Emploi");
            handleTabClick("schedule");
          }}
        >
          <CalendarMonthIcon fontSize="large" /> Espace Emploi
        </li>
        <li
          className={`nav-item ${activeTab === "finance" ? "active" : ""}`}
          onClick={() => {
            props.onClick("Espace Finance");
            handleTabClick("finance");
          }}
        >
          <PaidIcon fontSize="large" /> Espace Finance
        </li>
      </ul>
    </div>
  );
}
