import React, { useState } from "react";
import DynamicButton from "../DynamicButton";
import edit from "../../images/edit.png";
import deleteicon from "../../images/deleteicon.png";
import visibility from "../../images/visibility.png";
import moreverticaldouble from "../../images/moreverticaldouble.png";

const AllItems = () => {
  const [rowData, setRowData] = useState({
    Item: "Automated Survey/ Feedback Software",
    Quantity: 1,
    Price: 15000,
    Amount: 200, // Automatically calculated
    Tax: "", // Selected tax
  });

  const handleInputChange = (e, field) => {
    const value =
      field === "Quantity" || field === "Price"
        ? parseFloat(e.target.value) || 0
        : e.target.value;
    const updatedData = { ...rowData, [field]: value };

    setRowData(updatedData);
  };

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#242E3E]">All Items</h2>
        <DynamicButton
          onClick=""
          type="Button"
          name="Edit Columns"
          className="text-white inline-flex justify-center items-center"
        >
          <img
            src={edit}
            alt="Edit Icon"
            className="mr-2 w-4 h-4"
            style={{
              filter: "brightness(0) saturate(100%) invert(100%)",
            }}
          />
          Edit Columns
        </DynamicButton>
      </div>
      <div className="overflow-x-auto rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
        <table className="w-full">
          <thead>
            <tr className="text-[#595959] font-bold text-xs pb-[10px] border-b border-[#ECE9E9]">
              {["Items", "Quantity", "Price", "Amount", "Tax", "Actions"].map(
                (header) => (
                  <th key={header} className="text-left text-sm px-2 md:px-0">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#ECE9E9] px-[6px] py-[10px]">
              <td className="py-[10px] px-2 md:px-0 text-sm font-normal text-[#242E3E] inline-flex justify-center items-center gap-[8px]">
                <img src={moreverticaldouble} alt="More vertical double icon" />
                {rowData.Item}
              </td>
              <td className="py-[10px] px-2 md:px-0">
                <input
                  type="number"
                  value={rowData.Quantity}
                  onChange={(e) => handleInputChange(e, "Quantity")}
                  className=" text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                />
              </td>
              <td className="py-[10px] px-2 md:px-0">
                <input
                  type="number"
                  value={rowData.Price}
                  onChange={(e) => handleInputChange(e, "Price")}
                  className="text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                />
              </td>
              <td className="py-[20px] px-2 md:px-0 text-sm text-[#242E3E] font-normal">
                ${rowData.Amount.toFixed(2)}
              </td>
              <td className="py-[10px]">
                <select
                  value={rowData.Tax}
                  onChange={(e) => handleInputChange(e, "Tax")}
                  className="text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg py-[10px]"
                >
                  <option value="">Select tax</option>
                  <option value="10%">10%</option>
                  <option value="15%">15%</option>
                  <option value="20%">20%</option>
                  <option value="25%">25%</option>
                  <option value="30%">30%</option>
                </select>
              </td>
              <td className="flex px-2 md:px-0 items-center gap-[10px]">
                <button>
                  <img src={visibility} alt="visibility icon" />
                </button>
                <button>
                  <img src={deleteicon} alt="delete icon" />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <DynamicButton
          type="button"
          name="Add Items"
          onClick="onClick"
          className="text-[#1D89E4] bg-white md:float-right"
        >
          + Add Items
        </DynamicButton>
      </div>
    </div>
  );
};

export default AllItems;
