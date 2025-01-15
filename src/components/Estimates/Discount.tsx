import React, { useState } from "react";
import DynamicButton from "../DynamicButton";
import edit from "../../images/edit.png";
import deleteicon from "../../images/deleteicon.png";

const Discount = () => {
  const [rowData, setRowData] = useState({
    Item: "Discount",
    Discription: "Lorem ipsum dolor sit amet con...",
    Subtotal: 100,
    Amount: 10, // Automatically calculated
  });

  const handleInputChange = (e, field) => {
    const value =
      field === "Subtotal" ? parseFloat(e.target.value) || 0 : e.target.value;
    const updatedData = { ...rowData, [field]: value };

    setRowData(updatedData);
  };

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3 mt-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#242E3E]">Discount</h2>
      </div>
      <div className="overflow-x-auto rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
        <table className="w-full">
          <thead>
            <tr className="text-[#595959] font-bold text-xs pb-[10px] border-b border-[#ECE9E9]">
              {["Items", "Discription", "Subtotal", "Amount", "Actions"].map(
                (header) => (
                  <th key={header} className="text-left text-sm px-2 md:px-0">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-[#ECE9E9] px-2 py-[10px] md:px-0">
              <td className="py-[10px] px-2 md:px-0 text-sm font-normal text-[#242E3E]">
                {rowData.Item}
              </td>
              <td className="py-[10px] px-2 md:px-0">
                <input
                  type="text"
                  value={rowData.Discription}
                  onChange={(e) => handleInputChange(e, "Discription")}
                  className="text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                />
              </td>
              <td className="py-[10px] inline-flex px-2 md:px-0">
                <input
                  type="number"
                  value={rowData.Subtotal}
                  onChange={(e) => handleInputChange(e, "Subtotal")}
                  className="text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                />
                <select
                  value={rowData.Subtotal}
                  onChange={(e) => handleInputChange(e, "Subtotal")}
                  className="text-sm ml-2 border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg py-[11px]"
                >
                  <option value="Dollar">$</option>
                  <option value="Ruppees">Rs.</option>
                  <option value="Pound">£</option>
                </select>
              </td>
              <td className="py-[20px] text-sm text-[#242E3E] px-2 md:px-0 font-normal">
                ${rowData.Amount.toFixed(2)}
              </td>
              <td className="flex items-center pl-3 px-2 md:px-0 gap-[10px]">
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
          + Add Discount
        </DynamicButton>
      </div>
    </div>
  );
};

export default Discount;
