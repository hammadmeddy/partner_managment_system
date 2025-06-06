import React from "react";

const RebateRecentHistory = () => {
  const history = [
    {
      quarter: "Q4 2023",
      sales: "$245,000 sales",
      amount: "$12,250",
      status: "Paid",
    },
    {
      quarter: "Q3 2023",
      sales: "$195,000 sales",
      amount: "$9,750",
      status: "Paid",
    },
    {
      quarter: "Q2 2023",
      sales: "$172,000 sales",
      amount: "$8,600",
      status: "Paid",
    },
  ];
  return (
    <div className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-6 shadow-sm">
      <h2 className="text-2xl font-bold text-[#1A1A1A] mb-6">Recent History</h2>

      <div>
        {history.map((item, index) => (
          <div key={index} className="flex items-center gap-4 py-3">
            <div className="w-1 h-12 bg-[#10B981] rounded-full"></div>
            <div className="flex-1">
              <h3 className="font-bold text-[#1A1A1A]">{item.quarter}</h3>
              <p className="text-[#6B7280]">{item.sales}</p>
            </div>
            <div className="text-right">
              <p className="font-bold text-[#10B981] text-lg">{item.amount}</p>
              <span className="bg-[#10B981] bg-opacity-10 text-[#10B981] px-2 py-1 rounded text-sm font-medium">
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RebateRecentHistory;
