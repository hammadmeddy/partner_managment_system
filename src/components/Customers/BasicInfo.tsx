import React from "react";
import { useState } from "react";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import PrimaryContact from "./PrimaryContact";

const BasicInfo = () => {
  const [isBasicInfoVisible, setIsBasicInfoVisible] = useState(false);

  const [formData, setFormData] = useState({
    customername: "Sami Hameed",
    accountnumber: "lorem ipsum",
    website: "lorem ipsum",
    notes:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temporunt ut...",
  });

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
          className="text-lg font-bold  px-2 py-1 rounded"
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
          <p className="text-[#595959] font-normal text-xs">
            Customer Name
            <input
              type="text"
              value={formData.customername}
              onChange={handleBasicInfoChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </p>
          <PrimaryContact />
          <span className="flex justify-between items-center gap-[16px]">
            <p className="w-full text-[#595959] font-normal text-xs">
              Account Number
              <input
                type="text"
                value={formData.accountnumber}
                onChange={handleBasicInfoChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              ></input>
            </p>
            <p className="w-full text-[#595959] font-normal text-xs">
              Website
              <input
                type="text"
                value={formData.website}
                onChange={handleBasicInfoChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              ></input>
            </p>
          </span>
          <p className="text-[#595959] font-normal text-xs">
            Notes
            <input
              type="text"
              value={formData.notes}
              onChange={handleBasicInfoChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </p>
        </div>
      )}
    </div>
  );
};
export default BasicInfo;
