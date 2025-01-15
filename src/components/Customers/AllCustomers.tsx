import React from "react";
import usericon from "../../images/usericon.png";
import upload from "../../images/upload.png";
import DynamicButton from "../DynamicButton";

const AllCustomers = () => {
  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#242E3E]">All Customers</h2>
        <div className="flex items-center gap-2">
          <DynamicButton
            onClick=""
            type="Button"
            name="Edit Columns"
            className="text-[#1D89E4] border-[1px] border-[#1D89E4] bg-white inline-flex justify-center items-center"
          >
            <img
              src={upload}
              alt="Upload icon"
              className="mr-2 w-4 h-4"
              style={{
                fill: "#1D89E4",
              }}
            />
            Import from CSV
          </DynamicButton>
          <DynamicButton
            onClick=""
            type="Button"
            name="Edit Columns"
            className="text-white inline-flex justify-center items-center"
          >
            <img
              src={usericon}
              alt="Customer icon"
              className="mr-2 w-4 h-4"
              style={{
                filter: "brightness(0) saturate(100%) invert(100%)",
              }}
            />
            Add Columns
          </DynamicButton>
        </div>
      </div>
    </div>
  );
};

export default AllCustomers;
