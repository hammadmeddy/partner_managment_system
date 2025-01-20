import React from "react";
import DynamicButton from "../DynamicButton";
import BasicInfo from "./BasicInfo";

const NewCustomer = () => {
  return (
    <div className="space-y-3 mb-10">
      <BasicInfo />
      <div className="float-right">
        <DynamicButton
          type="button"
          onClick="onClick"
          name="Cancel"
          className="mr-2 border-[1px] border-[#1D89E4] text-[#1D89E4] bg-transparent"
        >
          Cancel
        </DynamicButton>
        <DynamicButton
          type="button"
          onClick="onClick"
          name="Save"
          className="text-white"
        >
          Save
        </DynamicButton>
      </div>
    </div>
  );
};

export default NewCustomer;
