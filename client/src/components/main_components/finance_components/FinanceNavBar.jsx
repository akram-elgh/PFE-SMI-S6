import React, { useState } from "react";

export default function FinanceNavBar(props) {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className="space-navbar">
      <div
        className={`space-navbar-item ${activeTab === "info" ? "active" : ""}`}
        onClick={() => {
          setActiveTab("info");
          props.onClick("info");
        }}
      >
        <h3>Information general</h3>
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
        <h3>Modififer les contrats</h3>
      </div>
    </div>
  );
}
