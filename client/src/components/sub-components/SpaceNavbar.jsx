import React, { useState } from "react";

export default function SpaceNavbar(props) {
  const [activeTab, setActiveTab] = useState("search");
  const handleClick = (tabName) => setActiveTab(tabName);
  return (
    <div className="space-navbar">
      {Number(props.number) === 4 && (
        <div
          className={`space-navbar-item ${activeTab === "add" ? "active" : ""}`}
          onClick={() => {
            props.onClick("add");
            handleClick("add");
          }}
        >
          <h3>Ajouter</h3>
        </div>
      )}
      <div
        className={`space-navbar-item ${
          activeTab === "search" ? "active" : ""
        }`}
        onClick={() => {
          props.onClick("search");
          handleClick("search");
        }}
      >
        <h3>Chercher</h3>
      </div>
      <div
        className={`space-navbar-item ${
          activeTab === "modify" ? "active" : ""
        }`}
        onClick={() => {
          props.onClick("modify");
          handleClick("modify");
        }}
      >
        <h3>Modififer</h3>
      </div>
      <div
        className={`space-navbar-item ${
          activeTab === "delete" ? "active" : ""
        }`}
        onClick={() => {
          props.onClick("delete");
          handleClick("delete");
        }}
      >
        <h3>Suprimer</h3>
      </div>
    </div>
  );
}
