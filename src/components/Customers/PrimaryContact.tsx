import React, { useState } from "react";
import phone from "../../images/phone.png";
import customer from "../../images/customer.png";

const PrimaryContact = ({ formData, handleBasicInfoChange }) => {
  return (
    <>
      <div className="mt-5 rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[16px]">
        <div className="flex justify-between items-center mb-3">
          <span className="pb-3 text-[#242E3E] font-bold text-base">
            Primary Contact
          </span>
        </div>
        <span className="flex justify-between items-center flex-wrap md:flex-nowrap gap-[16px]">
          <div className="w-full text-[#595959] font-normal text-xs">
            <label>First Name</label>
            <input
              placeholder="Enter first name..."
              name="name"
              type="text"
              value={formData.name}
              onChange={handleBasicInfoChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
          <div className="w-full text-[#595959] font-normal text-xs">
            <label>Last Name</label>
            <input
              placeholder="Enter last name..."
              name="lastname"
              type="text"
              value={formData.lastname}
              onChange={handleBasicInfoChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
        </span>
        <span className="my-5 flex flex-wrap md:flex-nowrap justify-between items-center gap-[16px]">
          <div className="w-full text-[#595959] font-normal text-xs">
            <label> Email</label>
            <input
              placeholder="Enter email..."
              name="email"
              type="text"
              value={formData.email}
              onChange={handleBasicInfoChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
          <div className="w-full text-[#595959] font-normal text-xs">
            <label>Phone</label>
            <input
              placeholder="Enter phone number..."
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleBasicInfoChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
        </span>
        <div className="flex justify-end">
          <button
            onClick={() => console.log("Add phone clicked")}
            className="text-[#1D89E4] hover:cursor-pointer flex items-center gap-1"
          >
            <img src={phone} alt="Customer icon" className="h-5 w-5" />
            Add Phone
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <button
          onClick={() => console.log("Add contact clicked")}
          className="text-[#1D89E4] pr-3 hover:cursor-pointer flex items-center gap-1"
        >
          <img src={customer} alt="Customer icon" className="h-5 w-5" />
          Add contact
        </button>
      </div>
    </>
  );
};
export default PrimaryContact;
