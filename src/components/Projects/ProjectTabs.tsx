import React ,{ useState } from "react";
import ProjectList from "./ProjectList";

const ProjectTabs = () => {
  const [activeTab, setActiveTab] = useState("active");

  return (
    <div>
      <div className="bg-[#f7fafc] p-2 w-full rounded-lg inline-flex mb-6">
        <button
          className={`px-4 py-2 rounded-lg text-md font-medium transition-colors ${
            activeTab === "active"
              ? "bg-white text-[#1E88E5]"
              : "text-[ #757575] hover:text-[ #212121]"
          }`}
          onClick={() => setActiveTab("active")}
        >
          Active Projects
        </button>
        <button
          className={`px-4 py-2 rounded-md text-md font-medium transition-colors ${
            activeTab === "completed"
              ? "bg-white text-[#1E88E5]"
              : "text-[ #757575] hover:text-[ #212121]"
          }`}
          onClick={() => setActiveTab("completed")}
        >
          Completed Projects
        </button>
        <button
          className={`px-4 py-2 rounded-md text-md font-medium transition-colors ${
            activeTab === "all"
              ? "bg-white text-[#1E88E5]"
              : "text-[ #757575] hover:text-[ #212121]"
          }`}
          onClick={() => setActiveTab("all")}
        >
          All Projects
        </button>
      </div>

      <ProjectList filter={activeTab} />
    </div>
  );
};

export default ProjectTabs;
