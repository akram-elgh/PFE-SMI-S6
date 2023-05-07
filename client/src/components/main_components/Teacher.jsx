import React, { useState } from "react";
import AddTeacher from "./teacher_components/AddTeacher";
import SpaceNavbar from "../sub-components/SpaceNavbar";

export default function Teacher() {
  const [activeTab, setActiveTab] = useState("add");
  const handleClick = (tabName) => setActiveTab(tabName);
  return (
    <div className="space">
      <SpaceNavbar onClick={handleClick} number="4"></SpaceNavbar>
      {activeTab === "add" && <AddTeacher></AddTeacher>}
      {activeTab === "search" && <div>search</div>}
      {activeTab === "modify" && <div>Modify</div>}
      {activeTab === "delete" && <div>Delete</div>}
    </div>
  );
}
