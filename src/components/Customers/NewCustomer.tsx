import React, { useState, useEffect } from "react";
import DynamicButton from "../DynamicButton";
import BasicInfo from "./BasicInfo";
import Billing from "./Billing";
import Shipping from "./Shipping";

const NewCustomer = () => {
  const [isBasicInfoValid, setIsBasicInfoValid] = useState(false);
  const [isBillingValid, setIsBillingValid] = useState(false);
  const [isShippingValid, setIsShippingValid] = useState(false);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(isBasicInfoValid && isBillingValid && isShippingValid);
  }, [isBasicInfoValid, isBillingValid, isShippingValid]);

  return (
    <div className="space-y-3 mb-10">
      <BasicInfo setIsValid={setIsBasicInfoValid} />
      <Billing setIsValid={setIsBillingValid} />
      <Shipping setIsValid={setIsShippingValid} />
      <div className="float-right">
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

export default NewCustomer;
