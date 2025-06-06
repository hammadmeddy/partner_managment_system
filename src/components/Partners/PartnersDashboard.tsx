import React from "react";
import PartnersDashboardCards from "./PartnersDashboardCards";
import RecentActivity from "../Manufacturer/RecentActivity";
import PartnersQuickAction from "./PartnersQuickAction";

const PartnersDashboard = () => {
  return (
    <div className="space-y-8">
      <span>
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          Partner Dashboard
        </h1>
        <p className="text-[#8898aa]">
          Welcome back! Here's what's happening with your partner activities.
        </p>
      </span>
      <PartnersDashboardCards />
      <span className="lg:flex gap-5">
        <PartnersQuickAction /> <RecentActivity />
      </span>
    </div>
  );
};

export default PartnersDashboard;
