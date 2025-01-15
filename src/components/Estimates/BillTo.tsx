import React, { useState } from "react";
import edit from "../../images/edit.png";
import customer from "../../images/customer.png";

const BillTo = () => {
  const [isEditing, setIsEditing] = useState(false); // For "Edit Customer"
  const [isEditing2, setIsEditing2] = useState(false); // For "Choose a different customer"
  const [billTo, setBillTo] = useState("Mr Naveed"); // Field value

  // Handle text change for "Edit Customer"
  const handleBillToChange = (e) => {
    setBillTo(e.target.value);
  };

  // Save actions for each state
  const handleSaveClick = () => setIsEditing(false); // Save for "Edit Customer"
  const handleSaveClick2 = () => setIsEditing2(false); // Save for "Choose a different customer"

  return (
    <div className="flex flex-col md:flex-row justify-between items-center rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3 mb-3">
      {/* Bill To Section */}
      <div className="flex flex-col items-center md:items-start">
        <span className="mb-2  text-[#595959] font-bold text-xs ">Bill To</span>
        {isEditing || isEditing2 ? (
          <input
            type="text"
            value={billTo}
            onChange={handleBillToChange}
            className="border-[1px] border-[#ECE9E9] p-1 rounded-md"
          />
        ) : (
          <span className="text-sm font-bold text-[#242E3E]">{billTo}</span>
        )}
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col md:flex-row gap-2">
        {/* Choose a Different Customer Button */}
        <button
          onClick={() => setIsEditing2(!isEditing2)}
          className="text-[#1D89E4] hover:cursor-pointer flex items-center gap-1"
        >
          {isEditing2 ? (
            <span onClick={handleSaveClick2}>Save</span>
          ) : (
            <>
              <img src={customer} alt="Customer icon" className="h-5 w-5" />
              Choose a different customer
            </>
          )}
        </button>

        {/* Edit Customer Button */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-[#1D89E4] hover:cursor-pointer flex items-center gap-1"
        >
          {isEditing ? (
            <span onClick={handleSaveClick}>Save</span>
          ) : (
            <>
              <img src={edit} alt="Edit icon" className="h-5 w-5" />
              Edit Customer
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default BillTo;
