import React, { useEffect } from "react";
import BasicDetail from "./BasicDetail";
import Bill from "./Bill";
import { useState } from "react";
import DynamicButton from "../DynamicButton";

const AddBill = () => {
  const [isBasicDetailValid, setIsBasicDetailValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(isBasicDetailValid);
  }, [isBasicDetailValid]);
  return (
    <div className="space-y-5">
      <BasicDetail setIsValid={setIsBasicDetailValid} /> <Bill />
      <div className="float-right pb-5">
        <DynamicButton
          type="button"
          onClick={() => console.log("Cancel clicked")}
          name="Cancel"
          className="mr-2 border-[1px] border-[#1D89E4] text-[#1D89E4] bg-transparent"
        >
          Cancel
        </DynamicButton>
        <DynamicButton
          type="button"
          onClick={() => console.log("Save clicked")}
          name="Save"
          className="text-white"
          disabled={!isValid} // Disable the button if the form is invalid
        >
          Save
        </DynamicButton>
      </div>
    </div>
  );
};

export default AddBill;
