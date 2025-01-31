import React from "react";
import reportcards from "../../utils/reportcards.json";

const FinancialStatement = () => {
  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px] ">
      <p className="pb-3 text-[#242E3E] font-bold text-base">
        Financial statements
      </p>
      <p className="text-[#595959]">
        Get a clear picture of how your business is doing. Use these core
        statements to better understand your financial health.
      </p>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] gap-y-6 mt-6">
          {reportcards.map((report, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 border-[1px] border-[#ECE9E9]"
            >
              <h3 className="text-[16px] font-bold text-[#242E3E]">
                {report.title}
              </h3>
              <p className="text-sm text-[#595959] mt-2">
                {report.description}
              </p>
              <button className="text-[#1D89E4] text-sm font-bold mt-4 block hover:underline">
                {report.link}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinancialStatement;
