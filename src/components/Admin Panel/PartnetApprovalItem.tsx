"use client";

import { Eye, Check, X } from "lucide-react";

export default function PartnerApprovalItem({
  company,
  email,
  category,
  region,
  date,
  onReview,
  onApprove,
  onReject,
}) {
  const getCategoryColor = (category) => {
    switch (category.toLowerCase()) {
      case "system integrator":
        return "#FFFF00";
      case "distributor":
        return "#8B5CF6";
      case "partner":
        return "#10B981";
      default:
        return "#6B7280";
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB] mb-4">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-semibold text-[#1F2937] mb-1">{company}</h3>
          <p className="text-[#6B7280] mb-2">{email}</p>
          <div className="flex items-center space-x-4 text-sm text-[#6B7280]">
            <span
              className="px-3 py-1 rounded-full text-white font-medium"
              style={{ backgroundColor: getCategoryColor(category) }}
            >
              {category}
            </span>
            <span>{region}</span>
            <span>Submitted {date}</span>
          </div>
        </div>
        <div className="flex space-x-2">
          <button
            onClick={() => onReview(company)}
            className="bg-[#FFFF00] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#E6E600] transition-colors flex items-center space-x-2"
          >
            <Eye className="w-4 h-4" />
            <span>Review</span>
          </button>
          <button
            onClick={() => onApprove(company)}
            className="bg-[#10B981] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#059669] transition-colors flex items-center space-x-2"
          >
            <Check className="w-4 h-4" />
            <span>Approve</span>
          </button>
          <button
            onClick={() => onReject(company)}
            className="bg-[#8B5CF6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#7C3AED] transition-colors flex items-center space-x-2"
          >
            <X className="w-4 h-4" />
            <span>Reject</span>
          </button>
        </div>
      </div>
    </div>
  );
}
