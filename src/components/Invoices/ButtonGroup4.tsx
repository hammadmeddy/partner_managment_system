import React from "react";
import DynamicButton from "../DynamicButton";
import filter from "../../images/filter.png";
import invoices from "../../images/invoices.png";

const ButtonGroup4 = ({ openModal, activeFiltersCount }) => {
  return (
    <div className="flex justify-end gap-4 mb-4">
      {/* Filter Button */}
      <DynamicButton
        type="button"
        name="Filters"
        onClick={openModal}
        className="inline-flex gap-2 text-[#595959] border-[1px] border-[#ECE9E9] justify-center bg-white items-center"
      >
        <img src={filter} alt="Filter Icon" />
        Filters
        {activeFiltersCount > 0 && (
          <span className="text-xs font-bold text-white bg-[#F23030] rounded-full px-2.5 py-1 mr-2">
            {activeFiltersCount}
          </span>
        )}
      </DynamicButton>

      {/* Create Estimate Button */}
      <DynamicButton
        onClick=""
        name="Create Estimate"
        type="submit"
        className="text-white inline-flex justify-center items-center"
      >
        <img src={invoices} alt="Button Icon" className="mr-2 w-4 h-4" />
        Create Invoices
      </DynamicButton>
    </div>
  );
};

export default ButtonGroup4;
