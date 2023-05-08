import React, { useState } from "react";
import SpaceNavbar from "../sub-components/SpaceNavbar";
import SearchStudent from "./student_components/SearchStudent";
import UpdateStudent from "./student_components/UpdateStudent";

export default function Student(props) {
  const [activeTab, setActiveTab] = useState("search");
  const handleClick = (tabName) => setActiveTab(tabName);
  return (
    <div className="space">
      <SpaceNavbar onClick={handleClick} number="3"></SpaceNavbar>
      {activeTab === "search" && <SearchStudent></SearchStudent>}
      {activeTab === "modify" && (
        <UpdateStudent
          showSuccessModal={props.showSuccessModal}
          showFailModal={props.showFailModal}
        ></UpdateStudent>
      )}
      {activeTab === "delete" && <div>Delete</div>}
    </div>
  );
}
