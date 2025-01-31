import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import calender from "../../images/calender.png";

const EstimateDetail = () => {
  const [estimateNumber, setEstimateNumber] = useState("5");
  const [customerRef, setCustomerRef] = useState("Lorem Ipsum");
  const [date, setDate] = useState(new Date());
  const [validUntil, setValidUntil] = useState(new Date());

  const formatDate = (date) => format(date, "dd MMM yyyy");

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        readOnly
        className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-[#242E3E] text-sm pr-10"
      />
      <img
        src={calender}
        alt="Calendar Icon"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer"
        onClick={onClick}
        ref={ref}
      />
    </div>
  ));

  return (
    <div className="flex flex-col md:flex-row gap-[16px] py-6">
      {/* Estimate Number */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-[#595959] mb-1">
          Estimate Number
        </label>
        <textarea
          value={estimateNumber}
          onChange={(e) => setEstimateNumber(e.target.value)}
          className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-[#242E3E] text-sm resize-none"
          rows={1}
        ></textarea>
      </div>

      {/* Customer Ref */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-[#595959] mb-1">
          Customer Ref
        </label>
        <textarea
          value={customerRef}
          onChange={(e) => setCustomerRef(e.target.value)}
          className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-[#242E3E] text-sm resize-none"
          rows={1}
        ></textarea>
      </div>

      {/* Date */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-[#595959] mb-1">
          Date
        </label>
        <DatePicker
          selected={date}
          onChange={(selectedDate) => setDate(selectedDate)}
          dateFormat="dd MMM yyyy"
          customInput={<CustomInput />}
          wrapperClassName="w-full" // Ensures the wrapper takes full width
        />
      </div>

      {/* Valid Until */}
      <div className="flex-1">
        <label className="block text-sm font-medium text-[#595959] mb-1">
          Valid Until
        </label>
        <DatePicker
          selected={validUntil}
          onChange={(selectedDate) => setValidUntil(selectedDate)}
          dateFormat="dd MMM yyyy"
          customInput={<CustomInput />}
          wrapperClassName="w-full" // Ensures the wrapper takes full width
        />
      </div>
    </div>
  );
};

export default EstimateDetail;
