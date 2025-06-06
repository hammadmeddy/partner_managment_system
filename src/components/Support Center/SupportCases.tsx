"use client";

import { Plus } from "lucide-react";
import CaseItem from "./CaseItem";

export default function SupportCases() {
  const supportCases = [
    {
      id: "CASE-001",
      title: "Device not responding after update",
      status: "In Progress",
      priority: "High",
      created: "2024-01-15",
      agent: "Sarah Johnson",
      statusColor: "#3B82F6",
      priorityColor: "#EF4444",
    },
    {
      id: "CASE-002",
      title: "Warranty claim for defective unit",
      status: "Closed",
      priority: "Medium",
      created: "2024-01-10",
      agent: "Mike Chen",
      statusColor: "#10B981",
      priorityColor: "#F59E0B",
    },
  ];

  const handleViewDetails = (caseId: string) => {
    console.log(`Viewing details for ${caseId}`);
    // Implement view details logic here
  };

  const handleNewCase = () => {
    console.log("Creating new case");
    // Implement new case logic here
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[#1F2937]">
          Your Support Cases
        </h2>
        <button
          onClick={handleNewCase}
          className="bg-[#FFFF00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#E6E600] transition-colors flex items-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Case</span>
        </button>
      </div>

      <div className="space-y-4">
        {supportCases.map((case_, index) => (
          <CaseItem
            key={index}
            id={case_.id}
            title={case_.title}
            status={case_.status}
            priority={case_.priority}
            created={case_.created}
            agent={case_.agent}
            statusColor={case_.statusColor}
            priorityColor={case_.priorityColor}
            onViewDetails={handleViewDetails}
          />
        ))}
      </div>
    </div>
  );
}
