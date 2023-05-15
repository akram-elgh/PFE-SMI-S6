import React, { useState } from "react";
import FinanceNavBar from "./FinanceNavBar.jsx";
import FinanceInfo from "./FinanceInfo.jsx";
import FinanceModify from "./FinanceModify.jsx";

export default function FinanceBody(props) {
  const [activeTab, setActiveTab] = useState("info");
  return (
    <div className="finance-body">
      <FinanceNavBar onClick={(tab) => setActiveTab(tab)}></FinanceNavBar>
      {activeTab === "info" && <FinanceInfo></FinanceInfo>}
      {activeTab === "modify" && <FinanceModify></FinanceModify>}
    </div>
  );
}
