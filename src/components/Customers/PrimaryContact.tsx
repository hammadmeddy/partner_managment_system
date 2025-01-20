import React, { useState } from "react";
import phone from "../../images/phone.png";
import customer from "../../images/customer.png";

const PrimaryContact = () => {
  const [formData, setFormData] = useState({
    name: "Lorem",
    lastname: "Ipsum",
    email: "Lorem",
    phone: "Ipsum",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <div className="mt-5 rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[16px]">
        <div className="flex justify-between items-center mb-3">
          <span className="pb-3 text-[#242E3E] font-bold text-base">
            Primary Contact
          </span>
        </div>
        <span className="flex justify-between items-center gap-[16px]">
          <p className="w-full text-[#595959] font-normal text-xs">
            First Name
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </p>
          <p className="w-full text-[#595959] font-normal text-xs">
            Last Name
            <input
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </p>
        </span>
        <span className="my-5 flex justify-between items-center gap-[16px]">
          <p className="w-full text-[#595959] font-normal text-xs">
            Email
            <input
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </p>
          <p className="w-full text-[#595959] font-normal text-xs">
            Phone
            <input
              type="text"
              value={formData.lastname}
              onChange={handleInputChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </p>
        </span>
        <div className="flex justify-end">
          <button className="text-[#1D89E4] hover:cursor-pointer flex items-center gap-1">
            <img src={phone} alt="Customer icon" className="h-5 w-5" />
            Add Phone
          </button>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="text-[#1D89E4] hover:cursor-pointer flex items-center gap-1">
          <img src={customer} alt="Customer icon" className="h-5 w-5" />
          Add contact
        </button>
      </div>
    </>
  );
};
export default PrimaryContact;
