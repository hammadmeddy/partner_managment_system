import React, { useState, useEffect } from "react";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import PrimaryContact from "./PrimaryContact";

const BasicInfo = ({ setIsValid }) => {
  const [isBasicInfoVisible, setIsBasicInfoVisible] = useState(false);

  const initialState = {
    customername: "",
    accountnumber: "",
    website: "",
    notes: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
  };

  const [formData, setFormData] = useState(initialState);

  // This will be triggered whenever formData changes
  useEffect(() => {
    const isValid =
      formData.name &&
      formData.phone &&
      formData.email &&
      formData.accountnumber &&
      formData.customername &&
      formData.lastname &&
      formData.notes &&
      formData.website;

    // Pass the validation status back to the parent
    setIsValid(isValid);
  }, [formData, setIsValid]); // Dependencies: Runs when any part of formData changes

  const toggleBasicInfoVisibility = () => {
    setIsBasicInfoVisible(!isBasicInfoVisible); // Toggle the visibility state
  };

  const handleBasicInfoChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px]">
      <div className="flex justify-between items-center mb-3">
        <span className="pb-3 text-[#242E3E] font-bold text-base">
          Basic Information
        </span>
        <button
          onClick={toggleBasicInfoVisibility}
          className="text-lg font-bold px-2 py-1 rounded"
          title={isBasicInfoVisible ? "Close Footer" : "Open Footer"}
        >
          <img
            src={isBasicInfoVisible ? pointerdown : pointerup}
            alt={isBasicInfoVisible ? "Close Footer" : "Open Footer"}
          />
        </button>
      </div>

      {isBasicInfoVisible && (
        <div className="space-y-5">
          <div className="text-[#595959] font-normal text-xs">
            <label>Customer Name</label>
            <input
              placeholder="Enter customer name..."
              name="customername"
              type="text"
              value={formData.customername}
              onChange={handleBasicInfoChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
          <PrimaryContact
            formData={formData}
            setFormData={setFormData}
            initialState={initialState}
            handleBasicInfoChange={handleBasicInfoChange}
          />
          <span className="flex justify-between items-center flex-wrap md:flex-nowrap gap-[16px]">
            <div className="w-full text-[#595959] font-normal text-xs">
              <label>Account Number</label>
              <input
                placeholder="Enter account number..."
                name="accountnumber"
                type="text"
                value={formData.accountnumber}
                onChange={handleBasicInfoChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              ></input>
            </div>
            <div className="w-full text-[#595959] font-normal text-xs">
              <label>Website</label>
              <input
                placeholder="Enter website..."
                name="website"
                type="text"
                value={formData.website}
                onChange={handleBasicInfoChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              ></input>
            </div>
          </span>
          <div className="text-[#595959] font-normal text-xs">
            <label>Notes</label>
            <input
              placeholder="Enter note..."
              name="notes"
              type="text"
              value={formData.notes}
              onChange={handleBasicInfoChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicInfo;
