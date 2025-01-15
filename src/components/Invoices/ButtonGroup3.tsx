import React, { useState } from "react";

const ButtonGroup3 = ({ onAllClick, onActiveClick, onDraftClick }) => {
  const [selectedButton, setSelectedButton] = useState("all");

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    if (button === "all") {
      onAllClick();
    } else if (button === "active") {
      onActiveClick();
    } else if (button === "draft") {
      onDraftClick();
    }
  };

  return (
    <div className="bg-white p-[8px] border-[1px] border-[#ECE9E9] justify-between rounded-lg flex mb-3">
      <button
        onClick={() => handleButtonClick("all")}
        className={`flex flex-1 px-2 py-1 md:px-[36px] md:py-[10px] items-center justify-center rounded-lg ${
          selectedButton === "all"
            ? "bg-[#1D89E4] text-white"
            : "bg-white text-[#242E3E]"
        } `}
      >
        All Invoices
      </button>
      <button
        onClick={() => handleButtonClick("active")}
        className={`flex flex-1 px-2 py-1 md:px-[36px] md:py-[10px] items-center justify-center rounded-lg ${
          selectedButton === "active"
            ? "bg-[#1D89E4] text-white"
            : "bg-white text-[#242E3E]"
        } `}
      >
        Active Invoices
      </button>
      <button
        onClick={() => handleButtonClick("draft")}
        className={`flex flex-1 px-2 py-1 md:px-[36px] md:py-[10px] items-center justify-center rounded-lg ${
          selectedButton === "draft"
            ? "bg-[#1D89E4] text-white"
            : "bg-white text-[#242E3E]"
        } `}
      >
        Draft Invoices
      </button>
    </div>
  );
};

export default ButtonGroup3;
