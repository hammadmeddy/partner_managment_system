import React, { useState } from "react";
import DynamicButton from "../DynamicButton";
import edit from "../../images/edit.png";
import deleteicon from "../../images/deleteicon.png";
import visibility from "../../images/visibility.png";
import moreverticaldouble from "../../images/moreverticaldouble.png";
import { handleInputChange } from "../../utils/global functions/filter";
import { addNewRow } from "../../utils/global functions/filter";

const AllItems = () => {
  const [rowsData, setRowsData] = useState([
    {
      id: 1,
      Item: "Automated Survey/ Feedback Software",
      Quantity: 1,
      Price: 15000,
      Amount: 200,
      Tax: "Select Tax",
    },
  ]);

  const [isEditable, setIsEditable] = useState(false); //State for editing columns
  const toggleEditMode = () => {
    setIsEditable((prevState) => !prevState);
  };

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold text-[#242E3E]">All Items</h2>
        <DynamicButton
          onClick={toggleEditMode}
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
          {isEditable ? "Save Changes" : "Edit Columns"}
        </DynamicButton>
      </div>
      <div className="overflow-x-auto rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
        <table className="w-full">
          <thead>
            <tr className="text-[#595959] font-bold text-xs pb-[10px] border-b border-[#ECE9E9]">
              {["Items", "Quantity", "Price", "Amount", "Tax", "Actions"].map(
                (header) => (
                  <th key={header} className="text-left text-sm px-2">
                    {header}
                  </th>
                )
              )}
            </tr>
          </thead>
          <tbody>
            {rowsData.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[#ECE9E9] px-[6px] py-[10px]"
              >
                <td className="py-[10px] px-2 text-sm font-normal text-[#242E3E] inline-flex justify-center items-center gap-[8px]">
                  <img
                    src={moreverticaldouble}
                    alt="More vertical double icon"
                  />
                  {row.Item}
                </td>
                <td className="py-[10px] px-2">
                  {isEditable ? (
                    <input
                      type="number"
                      value={row.Quantity}
                      onChange={(e) =>
                        handleInputChange(e, row.id, "Quantity", setRowsData)
                      }
                      className="text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                    />
                  ) : (
                    row.Quantity
                  )}
                </td>
                <td className="py-[10px] px-2">
                  {isEditable ? (
                    <input
                      type="number"
                      value={row.Price}
                      onChange={(e) =>
                        handleInputChange(e, row.id, "Price", setRowsData)
                      }
                      className="text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                    />
                  ) : (
                    row.Price
                  )}
                </td>
                <td className="py-[20px] px-2 text-sm text-[#242E3E] font-normal">
                  ${row?.Amount.toFixed(2)}
                </td>
                <td className="py-[10px]">
                  {isEditable ? (
                    <select
                      value={row.Tax}
                      onChange={(e) =>
                        handleInputChange(e, row.id, "Tax", setRowsData)
                      }
                      className="text-sm border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg py-[10px]"
                    >
                      <option value="">Select tax</option>
                      <option value="10%">10%</option>
                      <option value="15%">15%</option>
                      <option value="20%">20%</option>
                      <option value="25%">25%</option>
                      <option value="30%">30%</option>
                    </select>
                  ) : (
                    row.Tax
                  )}
                </td>
                <td className="flex px-2 text-center items-center pt-4.5 gap-[10px]">
                  <button>
                    <img src={visibility} alt="visibility icon" />
                  </button>
                  <button>
                    <img src={deleteicon} alt="delete icon" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <DynamicButton
          type="button"
          name="Add Items"
          onClick={() => addNewRow({ setRowsData, rowsData })}
          className="text-[#1D89E4] bg-white md:float-right"
        >
          + Add Items
        </DynamicButton>
      </div>
    </div>
  );
};

export default AllItems;
