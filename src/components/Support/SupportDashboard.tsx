import React from "react";
import SupportDashboardCards from "./SupportDashboardCards";
import SupportQuickActions from "./SupportQuickActions";
import RecentActivity from "../Manufacturer/RecentActivity";

const SupportDashboard = () => {
  return (
    <div className="space-y-8">
      <span>
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          Support Dashboard
        </h1>
        <p className="text-[#8898aa]">
          Welcome back! Here's what's happening with your support activities.
        </p>
      </span>
      <SupportDashboardCards />
      <span className="lg:flex gap-5">
        <SupportQuickActions /> <RecentActivity />
      </span>
    </div>
  );
};

export default SupportDashboard;
