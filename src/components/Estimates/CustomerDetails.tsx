import React from "react";
import { useState } from "react";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import BillTo from "./BillTo";
import EstimateDetail from "./EstimateDetail";
import AllItems from "./AllItems";
import Discount from "./Discount";
import Total from "./Total";

const CustomerDetails = () => {
  const [isCustomerDetailsVisible, setIsCustomerDetailsVisible] =
    useState(false);
  const toggleCustomerDetailsVisibility = () => {
    setIsCustomerDetailsVisible(!isCustomerDetailsVisible); // Toggle the visibility state
  };

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
      <div className="flex justify-between items-center mb-3">
        <span className="pb-3 text-[#242E3E] font-bold text-base">
          Customer Details
        </span>
        <button
          onClick={toggleCustomerDetailsVisibility}
          className="text-lg font-bold px-2 py-1 rounded"
          title={
            isCustomerDetailsVisible
              ? "Close Customer Details"
              : "Open Customer Details"
          }
        >
          <img
            src={isCustomerDetailsVisible ? pointerdown : pointerup}
            alt={
              isCustomerDetailsVisible
                ? "Close Customer Details"
                : "Open Customer Details"
            }
          />
        </button>
      </div>
      {isCustomerDetailsVisible && (
        <>
          <BillTo /> <EstimateDetail /> <AllItems /> <Discount /> <Total />
        </>
      )}
    </div>
  );
};

export default CustomerDetails;
