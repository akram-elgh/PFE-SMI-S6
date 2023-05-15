import React, { useState } from "react";
import FinanceNavBar from "./FinanceNavBar.jsx";

export default function FinanceBody(props) {
  const [activeTab, setActiveTab] = useState("info");
  return (
    <div className="finance-body">
      <FinanceNavBar onClick={(tab) => setActiveTab(tab)}></FinanceNavBar>
      {activeTab === "info" && <div>Info</div>}
      {activeTab === "modify" && <div>modify</div>}
    </div>
  );
}
