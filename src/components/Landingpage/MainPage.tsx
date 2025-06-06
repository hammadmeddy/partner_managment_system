import React from "react";
import DashboardCards from "./DashboardCards";
import BecomePartner from "./BecomePartner";

const MainPage = () => {
  return (
    <>
      <div className="px-[220px]  items-center justify-center flex-row text-center">
        <h1 className="pt-12 text-5xl font-bold text-[#111827] mb-6">
          Partner Management System – Easy Workflow (Who Does What)
        </h1>

        <p className="text-xl text-[#4B5563] max-w-3xl mx-auto leading-relaxed">
          A unified platform connecting manufacturers, distributors, and system
          integrators. Streamline projects, orders, rebates, and support in one
          beautiful, intuitive experience.
        </p>
      </div>
      <DashboardCards />
      <BecomePartner />
    </>
  );
};

export default MainPage;
