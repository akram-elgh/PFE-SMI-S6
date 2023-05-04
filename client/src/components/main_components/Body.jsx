import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Enrollment from "./Enrollment";
import Class from "./Class";
import Modal from "./Modal";
import Teacher from "./Teacher";

export default function Body(props) {
  const [activeTab, setActiveTab] = useState("Acceuil");

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    props.onClick(activeTab);
  }, [activeTab, props]);

  return (
    <main className="main-container">
      <Modal title="Succes" body="hello"></Modal>

      <Navbar onClick={handleClick}></Navbar>
      {activeTab === "Acceuil" && <div>home</div>}
      {activeTab === "Espace Payment" && <div>payment</div>}
      {activeTab === "Espace Inscription" && <Enrollment></Enrollment>}
      {activeTab === "Espace Etudiant" && <div>student</div>}
      {activeTab === "Espace Classe" && <Class></Class>}
      {activeTab === "Espace Prof" && <Teacher></Teacher>}
      {activeTab === "Espace Emploi" && <div>schedule</div>}
      {activeTab === "Espace Finance" && <div>finance</div>}
    </main>
  );
}
