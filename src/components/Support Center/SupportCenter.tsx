import { useState } from "react";
import Downloads from "./Downloads";
import WarrantyRMA from "./WarantyRMA";
import SupportCases from "./SupportCases";
import Contact from "./Contact";
import SupportCenterHeader from "./SupportCenterHeader";
import SupportCenterNav from "./SupportCenterNav";

export default function SupportCenter() {
  const [activeTab, setActiveTab] = useState("Downloads");
  const tabs = ["Downloads", "Warranty/RMA", "My Cases", "Contact"];

  const renderContent = () => {
    switch (activeTab) {
      case "Downloads":
        return <Downloads />;
      case "Warranty/RMA":
        return <WarrantyRMA />;
      case "My Cases":
        return <SupportCases />;
      case "Contact":
        return <Contact />;
      default:
        return <Downloads />;
    }
  };

  return (
    <div className="min-h-screen">
      <div className=" mx-auto ">
        <SupportCenterHeader />
        <SupportCenterNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />
        <div className="mb-8">{renderContent()}</div>
      </div>
    </div>
  );
}
