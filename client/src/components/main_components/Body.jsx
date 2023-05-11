import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Enrollment from "./Enrollment";
import Class from "./Class";
import Teacher from "./Teacher";
import Student from "./Student";
import Modal from "./Modal";
import Payment from "./Payment";
import Schedule from "./Schedule";

export default function Body(props) {
  const [activeTab, setActiveTab] = useState("Acceuil");
  const [modal, setShowModal] = useState({
    showModal: false,
    title: "",
    body: "",
    color: "",
    classe: "",
  });

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
      <Navbar onClick={handleClick}></Navbar>
      {activeTab === "Acceuil" && <div>home</div>}
      {activeTab === "Espace Payment" && (
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
      {activeTab === "Espace Emploi" && <Schedule></Schedule>}
      {activeTab === "Espace Finance" && <div>finance</div>}
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
