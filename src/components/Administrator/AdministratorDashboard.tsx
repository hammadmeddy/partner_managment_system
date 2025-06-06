import React from "react";

import RecentActivity from "../Manufacturer/RecentActivity";
import AdminDashboardCards from "./AdminDashboardCards";
import AdminQuickActions from "./AdminQuickActions";

const AdministratorDashboard = () => {
  return (
    <div className="space-y-8">
      <span>
        <h1 className="text-3xl font-bold text-[#212529] mb-2">
          Admin Dashboard
        </h1>
        <p className="text-[#8898aa]">
          Welcome back! Here's what's happening with your admin activities.
        </p>
      </span>
      <AdminDashboardCards />
      <span className="lg:flex gap-5">
        <AdminQuickActions /> <RecentActivity />
      </span>
    </div>
  );
};

export default AdministratorDashboard;
