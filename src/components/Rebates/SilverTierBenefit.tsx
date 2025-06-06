import React from "react";

const SilverTierBenefit = () => {
  return (
    <div className="space-y-6">
      <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">
          Silver Tier Benefits
        </h2>

        <div className="mb-6">
          <div className="flex justify-between items-center">
            <span className="text-[#6B7280]">Rebate Rate</span>
            <span className="text-[#3B82F6] font-bold text-xl">3.5%</span>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-[#6B7280] mb-3">Included Benefits:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
              <span className="text-[#6B7280]">Quarterly bonus</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
              <span className="text-[#6B7280]">Priority support</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
              <span className="text-[#6B7280]">Marketing co-op</span>
            </div>
          </div>
        </div>

        <button className="w-full bg-gradient-to-r from-[#4299E1] to-[#9F7AEA] text-[#FFFFFF] py-3 rounded-xl font-medium hover:from-#3182CE hover:to-[#805AD5] transition-all">
          View All Tiers
        </button>
      </div>
    </div>
  );
};

export default SilverTierBenefit;
