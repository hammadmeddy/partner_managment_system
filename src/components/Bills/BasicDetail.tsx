import React from "react";
import { useState, useEffect } from "react";
import { forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
import calender from "../../images/calender.png";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import {
  handleBillDateChange,
  handleDueDateChange,
} from "../../utils/global functions/filter";

const BasicDetail = ({ setIsValid }) => {
  const [isBasicDetailVisible, setIsBasicDetailVisible] = useState(false);
  const [billDate, setBillDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(
    new Date(new Date(new Date().setDate(new Date().getDate() + 3)))
  );
  const formatDate = (date) => format(date, "dd MMM yyyy");
  const initialState = {
    choosevendor: "",
    currency: "",
    billdate: "",
    duedate: "",
    poandso: "",
    billno: "",
    notes: "",
  };
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    const isValid =
      formData.choosevendor &&
      formData.currency &&
      formData.billdate &&
      formData.duedate &&
      formData.poandso &&
      formData.billno &&
      formData.notes;
    setIsValid(isValid);
  }, [formData, setIsValid]);

  const toggleBasicDetailVisibility = () => {
    setIsBasicDetailVisible(!isBasicDetailVisible);
  };

  const handleBasicDetailChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const CustomInput = React.memo(
    forwardRef(({ value, onClick }, ref) => (
      <div className="relative w-full">
        <input
          type="text"
          value={value}
          readOnly
          onClick={onClick}
          className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-[#242E3E] text-sm pr-10 cursor-pointer"
          ref={ref}
        />
        <img
          src={calender}
          alt="Calendar Icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-5 w-5 cursor-pointer"
          onClick={onClick}
        />
      </div>
    ))
  );

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px]">
      <div className="flex justify-between items-center mb-3">
        <span className="pb-3 text-[#242E3E] font-bold text-base">
          Basic Detail
        </span>
        <button
          onClick={toggleBasicDetailVisibility}
          className="text-lg font-bold px-2 py-1 rounded"
          title={isBasicDetailVisible ? "Close" : "Open"}
        >
          <img
            src={isBasicDetailVisible ? pointerdown : pointerup}
            alt={isBasicDetailVisible ? "Close" : "Open"}
          />
        </button>
      </div>

      {isBasicDetailVisible && (
        <div className="space-y-5">
          <span className="flex justify-between items-center flex-wrap md:flex-nowrap gap-[16px]">
            <div className="w-full text-[#595959] font-normal text-xs">
              <label>Choose Vendor</label>
              <select
                name="choosevendor"
                value={formData.choosevendor}
                onChange={handleBasicDetailChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              >
                <option value="">Select Vendor</option>
                <option value="Lorem">Lorem</option>
                <option value="Lorem2">Lorem2</option>
                <option value="Lorem3">Lorem3</option>
              </select>
            </div>

            <div className="w-full text-[#595959] font-normal text-xs">
              <label>Currency</label>
              <input
                placeholder="Enter currency..."
                name="currency"
                type="text"
                value={formData.currency}
                onChange={handleBasicDetailChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              ></input>
            </div>
          </span>

          <span className="flex justify-between items-center flex-wrap md:flex-nowrap gap-[16px]">
            <div className="w-full text-[#595959] font-normal text-xs">
              <label>Bill Date</label>
              <DatePicker
                selected={billDate}
                onChange={(selectedDate) =>
                  handleBillDateChange(
                    selectedDate,
                    setBillDate,
                    setDueDate,
                    setFormData,
                    formatDate,
                    dueDate
                  )
                }
                dateFormat="dd MMM yyyy"
                customInput={<CustomInput />}
                wrapperClassName="w-full"
              />
            </div>
            <div className="w-full text-[#595959] font-normal text-xs">
              <label>Due Date</label>
              <DatePicker
                selected={dueDate}
                onChange={(selectedDate) =>
                  handleDueDateChange(
                    selectedDate,
                    billDate,
                    setDueDate,
                    setFormData,
                    formatDate
                  )
                }
                dateFormat="dd MMM yyyy"
                customInput={<CustomInput />}
                wrapperClassName="w-full"
              />
            </div>
          </span>
          <span className="flex justify-between items-center flex-wrap md:flex-nowrap gap-[16px]">
            <div className="w-full text-[#595959] font-normal text-xs">
              <label>P.O/S.O</label>
              <input
                placeholder="Enter P.O/S.O..."
                name="poandso"
                type="text"
                value={formData.poandso}
                onChange={handleBasicDetailChange}
                className="w-full border-[1px] border-[#ECE9E9] rounded-lg p-2 text-sm resize-none"
              ></input>
            </div>
            <div className="w-full text-[#595959] font-normal text-xs">
              <label>Bill #</label>
              <input
                placeholder="Enter Bill #..."
                name="billno"
                type="text"
                value={formData.billno}
                onChange={handleBasicDetailChange}
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
              onChange={handleBasicDetailChange}
              className="w-full border-[1px] border-[#ECE9E9] bg-white rounded-lg p-2 text-sm resize-none"
            ></input>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicDetail;
