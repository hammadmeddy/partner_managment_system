import { Eye } from "lucide-react";

interface CaseItemProps {
  id: string;
  title: string;
  status: string;
  priority: string;
  created: string;
  agent: string;
  statusColor: string;
  priorityColor: string;
  onViewDetails: (id: string) => void;
}

export default function CaseItem({
  id,
  title,
  status,
  priority,
  created,
  agent,
  statusColor,
  priorityColor,
  onViewDetails,
}: CaseItemProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
      <div className="flex justify-between items-start mb-4">
        <div>
          <div className="flex items-center justify-start  mb-2 gap-2">
            <h3 className="font-semibold text-[#1F2937]">{title}</h3>{" "}
            <span
              className="px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: statusColor }}
            >
              {status}
            </span>
            <span
              className="px-3 py-1 rounded-full text-sm font-medium text-white"
              style={{ backgroundColor: priorityColor }}
            >
              {priority}
            </span>
          </div>
          <div className="text-sm text-[#6B7280]">
            <span>Case ID: {id}</span>
            <div className="space-x-1">
              <span>Created: {created}</span>

              <span>• Agent: {agent}</span>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={() => onViewDetails(id)}
            className="bg-[#FFFF00] text-white font-semibold px-4 py-2 rounded-lg hover:bg-[#E6E600] transition-colors flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>View Details</span>
          </button>
        </div>
      </div>
    </div>
  );
}
