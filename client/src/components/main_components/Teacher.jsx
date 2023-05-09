import React, { useState } from "react";
import AddTeacher from "./teacher_components/AddTeacher";
import SpaceNavbar from "../sub-components/SpaceNavbar";
import SearchTeacher from "./teacher_components/SearchTeacher";
import UpdateTeacher from "./teacher_components/UpdateTeacher";

export default function Teacher(props) {
  const [activeTab, setActiveTab] = useState("add");
  const handleClick = (tabName) => setActiveTab(tabName);
  return (
    <div className="space">
      <SpaceNavbar onClick={handleClick} number="4"></SpaceNavbar>
      {activeTab === "add" && (
        <AddTeacher
          showSuccessModal={props.showSuccessModal}
          showFailModal={props.showFailModal}
        ></AddTeacher>
      )}
      {activeTab === "search" && <SearchTeacher></SearchTeacher>}
      {activeTab === "modify" && (
        <UpdateTeacher
          showSuccessModal={props.showSuccessModal}
          showFailModal={props.showFailModal}
        ></UpdateTeacher>
      )}
      {activeTab === "delete" && <div>Delete</div>}
    </div>
  );
}
