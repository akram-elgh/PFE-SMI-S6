import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Enrollment from "./Enrollment";
import Class from "./Class";
import Teacher from "./Teacher";
import Student from "./Student";
import Modal from "../sub-components/Modal";
import Payment from "./Payment";
import Schedule from "./Schedule";
import Finance from "./finance_components/Finance";
import Home from "./home_components/Home";
import Requests from "./request_components/Requests.jsx";

export default function Body(props) {
  const [activeTab, setActiveTab] = useState("Acceuil");
  const [modal, setShowModal] = useState({
    showModal: false,
    title: "",
    body: "",
    color: "",
    classe: "",
  });
  const [mouseOver, setMouseOver] = useState(false);

  const { showModal, title, body, color, classe } = modal;

  const handleClick = (tabName) => {
    setActiveTab(tabName);
  };

  useEffect(() => {
    props.onClick(activeTab);
  }, [activeTab, props]);

  function handleShowSuccessModal(body) {
    setShowModal((prevValues) => {
      return {
        showModal: true,
        title: "Succes",
        body: body,
        color: "green",
        classe: "success",
      };
    });
  }
  function handleShowFailModal(body) {
    setShowModal({
      showModal: true,
      title: "Erreur",
      body: body,
      color: "red",
      classe: "danger",
    });
  }

  function handleClose() {
    setShowModal(false);
  }
  return (
    <main className="main-container">
      <Navbar
        onClick={handleClick}
        onMouseOver={() => setMouseOver(true)}
        onMouseLeave={() => setMouseOver(false)}
        style={{ width: mouseOver ? "16%" : "" }}
      ></Navbar>
      <div
        className={`space${activeTab === "Espace Finance" ? "-finance" : ""}`}
        style={{ width: mouseOver ? "85%" : "" }}
      >
        {activeTab === "Acceuil" && <Home></Home>}
        {activeTab === "Notifications des demandes en ligne" && (
          <Requests
            showSuccessModal={handleShowSuccessModal}
            showFailModal={handleShowFailModal}
          ></Requests>
        )}
        {activeTab === "Espace payment" && (
          <Payment
            showSuccessModal={handleShowSuccessModal}
            showFailModal={handleShowFailModal}
          ></Payment>
        )}
        {activeTab === "Espace Inscription" && (
          <Enrollment
            showSuccessModal={handleShowSuccessModal}
            showFailModal={handleShowFailModal}
          ></Enrollment>
        )}
        {activeTab === "Espace Etudiant" && (
          <Student
            showSuccessModal={handleShowSuccessModal}
            showFailModal={handleShowFailModal}
          ></Student>
        )}
        {activeTab === "Espace Classe" && (
          <Class
            showSuccessModal={handleShowSuccessModal}
            showFailModal={handleShowFailModal}
          ></Class>
        )}
        {activeTab === "Espace Prof" && (
          <Teacher
            showSuccessModal={handleShowSuccessModal}
            showFailModal={handleShowFailModal}
          ></Teacher>
        )}
        {activeTab === "Espace Emploi" && (
          <Schedule
            showSuccessModal={handleShowSuccessModal}
            showFailModal={handleShowFailModal}
          ></Schedule>
        )}
        {activeTab === "Espace Finance" && (
          <Finance
            showSuccessModal={handleShowSuccessModal}
            showFailModal={handleShowFailModal}
          ></Finance>
        )}
      </div>
      <Modal
        show={showModal}
        title={title}
        body={body}
        color={color}
        classe={classe}
        onClose={handleClose}
      ></Modal>
    </main>
  );
}
