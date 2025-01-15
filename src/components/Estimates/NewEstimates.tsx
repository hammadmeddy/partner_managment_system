import React from "react";
import Footer from "./Footer";
import Attachments from "./Attachments";
import BusinessDetails from "./BusinessDetails";
import CustomerDetails from "./CustomerDetails";
import DynamicButton from "../DynamicButton";

const NewEstimates = () => {
  return (
    <div className="space-y-3 mb-10">
      <BusinessDetails />
      <CustomerDetails />
      <Footer />
      <Attachments />
      <div className="float-right">
        <DynamicButton
          type="button"
          onClick="onClick"
          name="Preview"
          className="mr-2 border-[1px] border-[#1D89E4] text-[#1D89E4] bg-transparent"
        >
          Preview
        </DynamicButton>
        <DynamicButton
          type="button"
          onClick="onClick"
          name="Save & Continue"
          className="text-white"
        >
          Save & Continue
        </DynamicButton>
      </div>
    </div>
  );
};

export default NewEstimates;
