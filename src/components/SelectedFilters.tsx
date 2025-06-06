import React from "react";
import cancel from "../images/cancel.png"; // Adjust the path as needed
import { handleFilterRemove } from "../utils/global functions/filter";

const SelectedFilters = ({
  selectedFilters,
  setFromDate,
  setToDate,
  setStatus,
  setVendor,
  initialFromDate,
  initialToDate,
  initialStatus,
  initialVendor,
}) => {
  return (
    <div className="flex items-center pb-3 flex-wrap gap-2">
      {/* Selected Filters Display */}
      {selectedFilters?.map((filter, index) => (
        <div
          key={index}
          className="inline-flex border-[1px] rounded-xl px-2 py-1 text-sm font-medium border-[#ECE9E9] bg-[#F4F8FF]"
        >
          <p className="text-[#595959]"> {filter?.label}:</p>{" "}
          <p className="text-[#242E3E]">{filter?.value}</p>
          {/* Close Button for each filter */}
          <button
            type="button"
            onClick={() =>
              handleFilterRemove(
                filter?.label,
                setFromDate,
                setToDate,
                setStatus,
                setVendor,
                initialFromDate,
                initialToDate,
                initialStatus,
                initialVendor
              )
            }
            className="ml-2"
          >
            <img src={cancel} alt="Cancel" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default SelectedFilters;
