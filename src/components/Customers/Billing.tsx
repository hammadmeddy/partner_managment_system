import React from "react";
import { useState, useEffect } from "react";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import BillingAddress from "./BillingAddress";

const Billing = ({ setIsValid }) => {
  const initialState = () => ({
    currency: "",
    address: "",
    address2: "",
    country: "",
    provinceandstate: "",
    city: "",
    postal: "",
  });
  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    const isValid =
      formData.country &&
      formData.postal &&
      formData.city &&
      formData.provinceandstate &&
      formData.address;
    setIsValid(isValid);
  }, [formData, setIsValid]);
  const [isBillingVisible, setIsBillingVisible] = useState(false);

  const toggleBillingVisibility = () => {
    setIsBillingVisible(!isBillingVisible); // Toggle the visibility state
  };
  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px]">
      <div className="flex justify-between items-center mb-3">
        <span className="pb-3 text-[#242E3E] font-bold text-base">Billing</span>
        <button
          onClick={toggleBillingVisibility}
          className="text-lg font-bold  px-2 py-1 rounded"
          title={isBillingVisible ? "Close Footer" : "Open Footer"}
        >
          <img
            src={isBillingVisible ? pointerdown : pointerup}
            alt={isBillingVisible ? "Close Footer" : "Open Footer"}
          />
        </button>
      </div>
      {isBillingVisible && (
        <>
          <span className="flex flex-col text-[#595959] font-normal text-xs ">
            Currency
            <select
              name="currency"
              value={formData.currency}
              onChange={handleBillingChange}
              className="p-2 text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg py-[10px]"
            >
              <option value="">Select Currency</option>
              <option value="USD ($) - United State Dollar">
                USD ($) - United State Dollar
              </option>
              <option value="Option 2">Option 2</option>
              <option value="Option 3">Option 3</option>
            </select>
          </span>
          <BillingAddress
            setFormData={setFormData}
            initialState={initialState}
            handleBillingChange={handleBillingChange}
            formData={formData}
          />
        </>
      )}
    </div>
  );
};

export default Billing;
