import React from "react";

const Total = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center">
      <div className="text-[#242E3E] font-bold text-sm py-6 px-3 mt-4">
        Total
        <select className="w-50% text-sm md:ml-2 border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg py-[11px]">
          <option value="USD">USD ($) - United State Dollar</option>
          <option value="Option 2%">Option 2</option>
          <option value="Option 3%">Option 3</option>
        </select>
      </div>
      <div className="text-[#242E3E] pl-3 font-bold text-[24px]">$190.00</div>
    </div>
  );
};

export default Total;
