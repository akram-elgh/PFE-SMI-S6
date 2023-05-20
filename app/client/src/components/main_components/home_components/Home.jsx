import React from "react";
import HomeSchedule from "./HomeSchedule.jsx";
import HomeBlackList from "./HomeBlackList.jsx";
import HomeRequests from "./HomeRequests.jsx";

export default function Home() {
  return (
    <div className="home-space">
      <div className="home-space-left">
        <div className="home-space-schedule">
          <div className="mb-4">
            <h1>Emploi du temps d'aujourd'hui</h1>
          </div>
          <HomeSchedule></HomeSchedule>
        </div>
        <div className="home-space-requests">
          <div className="mb-4">
            <h1>Les demandes d'inscription</h1>
          </div>
          <HomeRequests></HomeRequests>
        </div>
      </div>
      <div className="home-space-right">
        <div className="home-space-blacklist">
          <div className="mb-4">
            <h1>Blacklist</h1>
            <p>La liste des etudiants qui n'ont pas encore paye ce mois</p>
          </div>
          <HomeBlackList></HomeBlackList>
        </div>
      </div>
    </div>
  );
}
