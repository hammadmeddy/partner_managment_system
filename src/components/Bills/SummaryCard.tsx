import React from "react";

const SummaryCard = () => {
  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[16px]">
      <div className="flex justify-between py-2">
        <span className="text-[#242E3E] text-[14px]">Subtotal:</span>
        <span className="text-[#242E3E] text-[14px] font-bold">$400.00</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-[#242E3E] text-[14px]">Tax:</span>
        <span className="text-[#242E3E] text-[14px] font-bold">$3.00</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-[#242E3E] text-[14px]">Total (USD):</span>
        <span className="text-[#242E3E] text-[14px] font-bold">$403.00</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-[#242E3E] text-[14px]">Total Paid (USD):</span>
        <span className="text-[#242E3E] text-[14px] font-bold ">$0.00</span>
      </div>
      <div className="flex justify-between py-2">
        <span className="text-[#242E3E] text-[14px]">Amount Due (USD):</span>
        <span className="text-[#242E3E] text-[14px] font-bold">$403.00</span>
      </div>
    </div>
  );
};

export default SummaryCard;
