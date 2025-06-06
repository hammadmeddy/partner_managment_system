import React from "react";
import DistributorDashboardCards from "./DistributorDashboardCards";
import RecentActivity from "../Manufacturer/RecentActivity";
import DistributorQuickActions from "./DistributorQuickActions";

const DistributorDashboard = () => {
  return (
    <div className="space-y-8">
      <span>
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          Distributor Dashboard
        </h1>
        <p className="text-[#8898aa]">
          Welcome back! Here's what's happening with your distributor
          activities.
        </p>
      </span>
      <DistributorDashboardCards />
      <span className="lg:flex gap-5">
        <DistributorQuickActions /> <RecentActivity />
      </span>
    </div>
  );
};

export default DistributorDashboard;
