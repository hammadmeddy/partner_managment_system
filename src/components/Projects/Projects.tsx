import React from "react";
import ProjectHeader from "./ProjectHeader";
import ProjectDashboardCards from "./ProjectDashboadCard";
import ProjectTabs from "./ProjectTabs";

const Projects = () => {
  return (
    <div className="min-h-screen">
      <ProjectHeader />
      <ProjectDashboardCards />
      <ProjectTabs />
    </div>
  );
};

export default Projects;
