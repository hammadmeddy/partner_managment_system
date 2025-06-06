import { PlusIcon } from "lucide-react";
import React from "react";

const ProjectHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-[#0f172a]">
          Project Management
        </h1>
        <p className="text-[#64748b] mt-1">
          Track and manage your project portfolio
        </p>
      </div>
      <button
        className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-6 py-3 rounded-xl flex items-center transition-colors duration-200"
        style={{
          backgroundImage: "linear-gradient(to right, #4f46e5, #9333ea)",
        }}
      >
        <PlusIcon className="w-5 h-5 mr-2" />
        New Project
      </button>
    </div>
  );
};

export default ProjectHeader;
