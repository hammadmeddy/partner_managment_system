import React from "react";
import { useState } from "react";
import { handleInputChange } from "../../utils/global functions/filter";
import pointerdown from "../../images/pointerdown.png";
import pointerup from "../../images/pointerup.png";
import deleteicon from "../../images/deleteicon.png";
import DynamicButton from "../DynamicButton";
import { addNewLine } from "../../utils/global functions/filter";
import edit2 from "../../images/edit2.png";
import SummaryCard from "./SummaryCard";

const Bill = () => {
  const [isBasicDetailVisible, setIsBasicDetailVisible] = useState(false);

  const toggleBasicDetailVisibility = () => {
    setIsBasicDetailVisible(!isBasicDetailVisible);
  };

  const [rowsData, setRowsData] = useState([
    {
      id: 1,
      Item: "",
      ExpenseCategory: "",
      Description: "Lorem ipsum...",
      Quantity: 1,
      Price: 100,
      Tax: "Tax in %",
      Amount: "$200",
    },
  ]);

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[24px]">
      <div className="flex justify-between items-center mb-3">
        <span className="pb-3 text-[#242E3E] font-bold text-base">Bill</span>
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
        <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] p-[16px]">
          <div>
            <p className=" border-b border-[#ECE9E9] pb-3 text-[#242E3E] font-bold text-base">
              Lorem Ipsum
            </p>
            <div className="overflow-x-auto rounded-xl bg-[#FFFFFF] border-[#ECE9E9]">
              <table className="w-full">
                <thead>
                  <tr className="text-[#595959] font-bold text-xs pb-[10px] border-b border-[#ECE9E9]">
                    {[
                      "Item",
                      "Expense Category",
                      "Description",
                      "Quantity",
                      "Price",
                      "Tax",
                      "Amount",
                      "Actions",
                    ].map((header) => (
                      <th
                        key={header}
                        className="text-left text-sm px-[6px] py-3 gap-[16px]"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {rowsData.map((row) => (
                    <tr
                      key={row.id}
                      className="border-b border-[#ECE9E9]  px-[6px] py-[10px]"
                    >
                      <td className="py-[16px] px-[6px]">
                        <select
                          value={row.Item}
                          onChange={(e) =>
                            handleInputChange(e, row.id, "Item", setRowsData)
                          }
                          className="text-sm w-[120px] border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                        >
                          <option value="">Select Salary</option>
                          <option value="Item1">Item1</option>
                          <option value="Item2">Item2</option>
                          <option value="Item3">Item3</option>
                        </select>
                      </td>
                      <td className="py-[16px] px-[6px]">
                        <select
                          value={row.ExpenseCategory}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              row.id,
                              "Expense Category",
                              setRowsData
                            )
                          }
                          className="text-sm border-[#ECE9E9] w-[120px] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                        >
                          <option value="">Select Category</option>
                          <option value="Category1">Category1</option>
                          <option value="Category2">Category2</option>
                          <option value="Categor31">Category3</option>
                        </select>
                      </td>

                      <td className="py-[16px] px-[6px]">
                        <input
                          type="text"
                          value={row.Description}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              row.id,
                              "Description",
                              setRowsData
                            )
                          }
                          className="text-sm w-[120px] border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                        />
                      </td>
                      <td className="py-[16px] px-[6px]">
                        <input
                          type="number"
                          value={row.Quantity}
                          onChange={(e) =>
                            handleInputChange(
                              e,
                              row.id,
                              "Quantity",
                              setRowsData
                            )
                          }
                          className="text-sm border-[#ECE9E9] w-[120px] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                        />
                      </td>
                      <td className="py-[16px] px-[6px]">
                        <input
                          type="number"
                          value={row.Price}
                          onChange={(e) =>
                            handleInputChange(e, row.id, "Price", setRowsData)
                          }
                          className="text-sm w-[120px] border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                        />
                      </td>
                      <td className="py-[16px] px-[6px]">
                        <span className="flex items-center gap-2">
                          <input
                            type="text"
                            value={row.Tax}
                            onChange={(e) =>
                              handleInputChange(e, row.id, "Tax", setRowsData)
                            }
                            className="text-sm w-[120px] border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                          />
                          <button>
                            <img
                              src={edit2}
                              alt="edit icon"
                              className="h-4 w-4"
                            />
                          </button>
                        </span>
                      </td>
                      <td className="px-[6px] py-[16px]">
                        <input
                          type="text"
                          value={row.Amount}
                          onChange={(e) =>
                            handleInputChange(e, row.id, "Amount", setRowsData)
                          }
                          className="text-sm w-[120px] border-[#ECE9E9] border-[1px] text-[#242E3E] rounded-lg px-[6px] py-[10px]"
                        />
                      </td>
                      <td className="flex px-2 text-center items-center pt-6.5 gap-[10px]">
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
                name="Add a Line"
                onClick={() => addNewLine({ setRowsData, rowsData })}
                className="text-[#1D89E4] bg-white md:float-right"
              >
                + Add a Line
              </DynamicButton>
            </div>
          </div>
          <SummaryCard />
        </div>
      )}
    </div>
  );
};

export default Bill;
