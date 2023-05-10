import React, { useState } from "react";
import AddClass from "./class_components/AddClass";
import SpaceNavbar from "../sub-components/SpaceNavbar";
import SearchClass from "./class_components/SearchClass";
import UpdateClass from "./class_components/UpdateClass";
import DeleteClass from "./class_components/DeleteClass";

export default function Class(props) {
  const [activeTab, setActiveTab] = useState("add");
  const handleClick = (tabName) => setActiveTab(tabName);
  return (
    <div className="space">
      <SpaceNavbar onClick={handleClick} number="4"></SpaceNavbar>
      {activeTab === "add" && (
        <AddClass
          showSuccessModal={props.showSuccessModal}
          showFailModal={props.showFailModal}
        ></AddClass>
      )}
      {activeTab === "search" && (
        <SearchClass
          showSuccessModal={props.showSuccessModal}
          showFailModal={props.showFailModal}
        ></SearchClass>
      )}
      {activeTab === "modify" && (
        <UpdateClass
          showSuccessModal={props.showSuccessModal}
          showFailModal={props.showFailModal}
        ></UpdateClass>
      )}
      {activeTab === "delete" && (
        <DeleteClass
          showSuccessModal={props.showSuccessModal}
          showFailModal={props.showFailModal}
        ></DeleteClass>
      )}
    </div>
  );
}
