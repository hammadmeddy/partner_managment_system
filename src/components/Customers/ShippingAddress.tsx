import React from "react";

const ShippingAddress = ({
  formData,
  setFormData,
  initialState,
  handleShippingChange,
}) => {
  const handleClearAddress = () => {
    setFormData(initialState);
  };

  return (
    <div className="mt-[16px] rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px]">
      <div className="pb-6 text-[#242E3E] font-bold text-base">
        Shipping Address
      </div>

      <div className="space-y-5">
        <span className="flex justify-between items-center md:flex-nowrap  flex-wrap gap-[16px]">
          <div className="flex flex-col w-full text-[#595959] font-normal text-xs">
            <label> Address</label>
            <input
              placeholder="Enter address..."
              name="address"
              type="text"
              value={formData.address}
              onChange={handleShippingChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
          <div className="flex flex-col w-full text-[#595959] font-normal text-xs">
            <label>Address 2 (Optional)</label>
            <input
              placeholder="Enter address 2..."
              name="address2"
              type="text"
              value={formData.address2}
              onChange={handleShippingChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
        </span>
        <span className="flex justify-between items-center md:flex-nowrap flex-wrap gap-[16px]">
          <div className="flex flex-col w-full text-[#595959] font-normal text-xs">
            <label>Country</label>
            <select
              name="country"
              value={formData.country}
              onChange={handleShippingChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            >
              <option value="Select country">Select country</option>
              <option value="Lorem">Lorem</option>
              <option value="Lorem2">Lorem2</option>
              <option value="Lorem3">Lorem3</option>
            </select>
          </div>
          <div className="flex flex-col w-full text-[#595959] font-normal text-xs">
            <label>Province, State</label>
            <select
              name="provinceandstate"
              value={formData.provinceandstate}
              onChange={handleShippingChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            >
              <option value="Select province/state">
                Select province/state
              </option>
              <option value="Lorem">Lorem</option>
              <option value="Lorem2">Lorem2</option>
              <option value="Lorem3">Lorem3</option>
            </select>
          </div>
        </span>
        <span className="flex justify-between items-center gap-[16px] md:flex-nowrap flex-wrap">
          <div className="flex flex-col w-full text-[#595959] font-normal text-xs">
            <label>City</label>
            <input
              placeholder="Enter city name..."
              name="city"
              type="text"
              value={formData.city}
              onChange={handleShippingChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
          <div className="flex flex-col w-full text-[#595959] font-normal text-xs">
            <label> Postal</label>
            <input
              placeholder="Enter postal code..."
              name="postal"
              type="text"
              value={formData.postal}
              onChange={handleShippingChange}
              className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
        </span>
      </div>
      <div className="flex justify-end">
        <button
          onClick={handleClearAddress}
          className="text-[#1D89E4] hover:cursor-pointer font-bold pt-[20px] flex items-center gap-1"
        >
          Clear Address
        </button>
      </div>
    </div>
  );
};

export default ShippingAddress;
