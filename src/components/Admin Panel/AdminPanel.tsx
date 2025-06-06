import { useState } from "react";
import AdminNav from "./AdminNav";
import AdminPanelHeader from "./AdminPanelHeader";
import AuditLogs from "./AuditLogs";
import PartnerApprovals from "./PartnerApprovals";
import StatsSection from "./StatSection";
import SystemSettings from "./SystemSettings";
import UserManagement from "./UserManagement";

export default function AdminPanel() {
  const [activeTab, setActiveTab] = useState("Partner Approvals");
  const tabs = [
    "Partner Approvals",
    "User Management",
    "Audit Logs",
    "System Settings",
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "Partner Approvals":
        return <PartnerApprovals />;
      case "User Management":
        return <UserManagement />;
      case "Audit Logs":
        return <AuditLogs />;
      case "System Settings":
        return <SystemSettings />;
      default:
        return <PartnerApprovals />;
    }
  };

  return (
    <div className="min-h-screen p-4">
      <div className="mx-auto">
        <AdminPanelHeader />
        <StatsSection />
        <AdminNav
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          tabs={tabs}
        />
        <div className="mb-8">{renderContent()}</div>
      </div>
    </div>
  );
}
