import React from "react";
import HomeSchedule from "./HomeSchedule.jsx";

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
        <div className="home-space-requests">Requests</div>
      </div>
      <div className="home-space-right">
        <div className="home-space-blacklist">Blacklist</div>
      </div>
    </div>
  );
}
