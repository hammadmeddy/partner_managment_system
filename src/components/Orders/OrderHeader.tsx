import { PlusIcon } from "lucide-react";
import React from "react";

const OrderHeader = () => {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-[#0f172a]">Order Management</h1>
        <p className="text-[#64748b] mt-1">
          Track orders and browse our product catalog
        </p>
      </div>
      <button
        className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-6 py-3 rounded-xl flex items-center transition-colors duration-200"
        style={{
          backgroundImage: "linear-gradient(to right, #4f46e5, #9333ea)",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-grid2x2 w-5 h-5 mr-3"
        >
          <path d="M12 3v18"></path>
          <path d="M3 12h18"></path>
          <rect x="3" y="3" width="18" height="18" rx="2"></rect>
        </svg>
        Browse Catalogue
      </button>
    </div>
  );
};

export default OrderHeader;
