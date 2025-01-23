import React from "react";
import DynamicButton from "../DynamicButton";
import { useState, useEffect } from "react";
import data from "../../utils/data.json";
import action from "../../images/action.png";
import arrows from "../../images/arrows.png";
import usericon from "../../images/usericon.png";
import upload2 from "../../images/upload2.png";
import search from "../../images/search.png";
import Pagination from "../Pagination";
import { customersheadings } from "../../utils/global funtions/headings";
import { useNavigate } from "react-router-dom";

const AllCustomers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [displayedRows, setDisplayedRows] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setDisplayedRows(filteredData.slice(startIndex, endIndex));
  }, [rowsPerPage, currentPage, filteredData]);

  const handleSearch = () => {
    const lowerCaseQuery = searchQuery.toLowerCase();
    const filtered = data.filter((item) => {
      const name = item.name ? item.name.toLowerCase() : "";
      return name.includes(lowerCaseQuery);
    });
    setFilteredData(filtered);
    setCurrentPage(1);
  };
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/newcustomer");
  };

  return (
    <div className="rounded-xl bg-[#FFFFFF] border-[1px] mt-2 border-[#ECE9E9] py-6 px-3">
      <div className="flex flex-col md:flex-row items-center justify-between px-2">
        <span className="pb-3 text-[#242E3E] font-bold text-base">
          All Customers
        </span>
        <div className="flex flex-col md:flex-row items-center gap-2">
          <div className="flex items-center border-[1px] border-[#ECE9E9] w-[264px] bg-white rounded-lg py-1">
            <DynamicButton
              onClick={handleSearch}
              type="Button"
              name="Search"
              className="text-[#595959] font-normal bg-transparent px-0 py-0 "
            >
              <img src={search} alt="Search icon" className="ml-2 w-4 h-4" />
            </DynamicButton>
            <input
              type="text"
              placeholder="Search by name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-grow px-2 py-1 text-[#595959] bg-transparent focus:outline-none"
            />
          </div>
          <DynamicButton
            onClick=""
            type="Button"
            name="Import"
            className="text-[#1D89E4] border-[1px] border-[#1D89E4] bg-white inline-flex justify-center items-center"
          >
            <img src={upload2} alt="Upload icon" className="mr-2 w-4 h-4" />
            Import from CSV
          </DynamicButton>
          <DynamicButton
            onClick={handleNavigate}
            type="Button"
            name="Add Customers"
            className="text-white inline-flex justify-center items-center"
          >
            <img
              src={usericon}
              alt="Customer icon"
              className="mr-2 w-4 h-4"
              style={{
                filter: "brightness(0) saturate(100%) invert(100%)",
              }}
            />
            Add Customer
          </DynamicButton>
        </div>
      </div>
      <div className="overflow-x-auto bg-[#FFFFFF]">
        <div className="min-w-[900px] grid grid-cols-6 border-b border-stroke">
          {customersheadings.map((heading, index) => (
            <div
              key={index}
              className="flex items-center px-3 py-4 text-[#595959]"
            >
              <p className="text-xs gap-1 font-bold flex items-center">
                {heading}
                <img src={arrows} alt="" />
              </p>
            </div>
          ))}
        </div>

        {/* Render displayed Rows */}
        {displayedRows.map((item, index) => (
          <div
            key={index}
            className="min-w-[900px] grid grid-cols-6 border-b border-stroke"
          >
            <div className="flex items-center justify-start px-3 py-4">
              <p className="text-sm text-[#242E3E] font-normal">
                {item?.name || ""}
              </p>
            </div>
            <div className="flex items-center justify-start px-3 py-4">
              <p className="text-sm text-[#242E3E] font-normal">
                {item?.email || ""}
              </p>
            </div>
            <div className="flex items-center justify-start px-3 py-4">
              <p className="text-sm text-[#242E3E] font-normal">
                {item?.phone || ""}
              </p>
            </div>
            <div className="flex items-center justify-start px-3 py-4">
              <p className="text-sm text-[#242E3E] font-normal">
                {item?.savedcards || ""}
              </p>
            </div>
            <div className="flex items-center justify-start px-3 py-4">
              <p className="text-sm text-[#242E3E] font-normal">
                {item?.balance || ""}
              </p>
            </div>
            <div className="flex items-center justify-start px-3 py-4">
              <img src={action} alt="Action Icon" className="h-6 w-6" />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        data={filteredData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
        setDisplayedRows={setDisplayedRows}
      />
    </div>
  );
};

export default AllCustomers;
