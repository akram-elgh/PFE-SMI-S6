import React, { useState } from "react";
import AddClass from "./class_components/AddClass";
import SpaceNavbar from "../sub-components/SpaceNavbar";

export default function Class() {
  const [activeTab, setActiveTab] = useState("add");
  const handleClick = (tabName) => setActiveTab(tabName);
  return (
    <div className="space">
      <SpaceNavbar onClick={handleClick} number="4"></SpaceNavbar>
      {activeTab === "add" && <AddClass></AddClass>}
      {activeTab === "search" && <div>search</div>}
      {activeTab === "modify" && <div>Modify</div>}
      {activeTab === "delete" && <div>Delete</div>}
    </div>
  );
}
