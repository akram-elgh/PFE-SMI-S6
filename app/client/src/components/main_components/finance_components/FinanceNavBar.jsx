import React, { useState } from "react";

export default function FinanceNavBar(props) {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="space-navbar mb-5">
      <div
        className={`space-navbar-item ${activeTab === "info" ? "active" : ""}`}
        onClick={() => {
          setActiveTab("info");
          props.onClick("info");
        }}
      >
        <h3>Informations générales</h3>
      </div>
      <div
        className={`space-navbar-item ${
          activeTab === "modify" ? "active" : ""
        }`}
        onClick={() => {
          setActiveTab("modify");
          props.onClick("modify");
        }}
      >
        <h3>Modifier les contrats</h3>
      </div>
    </div>
  );
}
