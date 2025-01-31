import React from "react";
import { useState, useEffect } from "react";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import ShippingAddress from "./ShippingAddress";

const Shipping = ({ setIsValid }) => {
  const initialState = {
    shipto: "",
    phone: "",
    deliveryinstruction: "",
    address: "",
    address2: "",
    country: "",
    provinceandstate: "",
    city: "",
    postal: "",
  };

  const [formData, setFormData] = useState(initialState);
  useEffect(() => {
    const isValid =
      formData.shipto &&
      formData.phone &&
      formData.country &&
      formData.postal &&
      formData.city &&
      formData.provinceandstate &&
      formData.address &&
      formData.address2;
    setIsValid(isValid);
  }, [formData, setIsValid]);

  const [isShippingVisible, setIsShippingVisible] = useState(false);

  const toggleShippingVisibility = () => {
    setIsShippingVisible(!isShippingVisible); // Toggle the visibility state
  };
  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px]">
      <div className="flex justify-between items-center mb-3">
        <span className="pb-3 text-[#242E3E] font-bold text-base">
          Shipping
        </span>
        <button
          onClick={toggleShippingVisibility}
          className="text-lg font-bold  px-2 py-1 rounded"
          title={isShippingVisible ? "Close" : "Open"}
        >
          <img
            src={isShippingVisible ? pointerdown : pointerup}
            alt={isShippingVisible ? "Close" : "Open "}
          />
        </button>
      </div>
      {isShippingVisible && (
        <>
          <span className="flex flex-col text-[#595959] font-normal text-xs ">
            <label> Ship to</label>
            <input
              placeholder="Enter name..."
              name="shipto"
              type="text"
              value={formData.shipto}
              onChange={handleShippingChange}
              className="p-2 text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg py-[10px]"
            />
          </span>
          <ShippingAddress
            formData={formData}
            initialState={initialState}
            setFormData={setFormData}
            handleShippingChange={handleShippingChange}
          />
          <span className="mt-[20px] flex justify-between items-center gap-[16px]">
            <p className="w-full text-[#595959] font-normal text-xs">
              <label> Phone</label>
              <input
                placeholder="Enter phone number..."
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleShippingChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              ></input>
            </p>
            <p className="w-full text-[#595959] font-normal text-xs">
              <label>Delivery Instruction</label>
              <input
                name="deliveryinstruction"
                placeholder="Enter delivery instructions..."
                type="text"
                value={formData.deliveryinstruction}
                onChange={handleShippingChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              ></input>
            </p>
          </span>
        </>
      )}
    </div>
  );
};

export default Shipping;
