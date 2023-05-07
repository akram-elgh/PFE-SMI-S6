import React, { useState } from "react";
import SpaceNavbar from "../sub-components/SpaceNavbar";
import SearchStudent from "./student_components/SearchStudent";

export default function Student() {
  const [activeTab, setActiveTab] = useState("search");
  const handleClick = (tabName) => setActiveTab(tabName);
  return (
    <div className="space">
      <SpaceNavbar onClick={handleClick} number="3"></SpaceNavbar>
      {activeTab === "search" && <SearchStudent></SearchStudent>}
      {activeTab === "modify" && <div>Modify</div>}
      {activeTab === "delete" && <div>Delete</div>}
    </div>
  );
}
