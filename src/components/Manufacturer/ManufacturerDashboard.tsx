import React from "react";
import ManufacturerDashboardCards from "./MAnufacturerDashboardCards";
import ManufacturerQuickActions from "./ManufacturerQuickActions";
import RecentActivity from "./RecentActivity";

const ManufacturerDashboard = () => {
  return (
    <div className="space-y-8">
      <span>
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          Manufacturer Dashboard
        </h1>
        <p className="text-[#8898aa]">
          Welcome back! Here's what's happening with your manufacturer
          activities.
        </p>
      </span>
      <ManufacturerDashboardCards />
      <span className="lg:flex gap-5">
        <ManufacturerQuickActions /> <RecentActivity />
      </span>
    </div>
  );
};

export default ManufacturerDashboard;
