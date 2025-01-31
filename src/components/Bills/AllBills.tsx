import React, { useState, useEffect } from "react";
import data from "../../utils/data.json";
import action from "../../images/action.png";
import arrows from "../../images/arrows.png";
import Filter from "../../components/Filter";
import SelectedFilters from "../SelectedFilters";
import { getStatusStyle2 } from "../../utils/global functions/statusstyle";
import { formatDate } from "../../utils/global functions/dateformat";
import { billsheadings } from "../../utils/global functions/headings";
import { activeFiltersCount } from "../../utils/global functions/filter";
import { handleApplyFilter } from "../../utils/global functions/filter";
import { getSelectedFilters } from "../../utils/global functions/filter";
import Pagination from "../Pagination";
import ButtonGroup5 from "./ButtonGroup5";

const AllBills = () => {
  // Initial state for filter values
  const initialFromDate = "";
  const initialToDate = "";
  const initialVendor = "";

  // State for filter values
  const [fromDate, setFromDate] = useState(initialFromDate);
  const [toDate, setToDate] = useState(initialToDate);
  const [vendor, setVendor] = useState(initialVendor);
  const [filteredData, setFilteredData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [displayedRows, setDisplayedRows] = useState([]);

  // Get selected filters for display
  const selectedFilters = getSelectedFilters({
    fromDate,
    toDate,
    vendor,
    formatDate,
  });

  // Paginate the data when filteredData or page changes
  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setDisplayedRows(filteredData.slice(startIndex, endIndex));
  }, [rowsPerPage, currentPage, filteredData]);

  // Open and close modal handlers
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
        <div className="flex flex-col md:flex-row items-center justify-between px-2">
          <span className="pb-3 text-[#242E3E] font-bold text-base">
            All Bills
          </span>
          <span>
            <div className="flex justify-end gap-2 items-center">
              <div className="hidden sm:flex flex-wrap gap-2">
                <SelectedFilters
                  selectedFilters={selectedFilters}
                  setFromDate={setFromDate}
                  setToDate={setToDate}
                  setVendor={setVendor}
                  initialFromDate={initialFromDate}
                  initialToDate={initialToDate}
                  initialVendor={initialVendor}
                />
              </div>
              {/* Button Group */}
              <ButtonGroup5
                openModal={openModal}
                activeFiltersCount={activeFiltersCount({
                  fromDate,
                  toDate,
                  vendor,
                })}
              />
              {/* Filter Modal */}
              {isModalOpen && (
                <Filter
                  filters={["fromDate", "toDate", "vendor"]}
                  fromDate={fromDate}
                  toDate={toDate}
                  setFromDate={setFromDate}
                  setToDate={setToDate}
                  setVendor={setVendor}
                  applyFilter={() =>
                    handleApplyFilter({
                      fromDate,
                      toDate,
                      vendor,
                      setFilteredData,
                      data,
                      closeModal,
                    })
                  }
                  closeModal={closeModal}
                />
              )}
            </div>
          </span>
        </div>

        {/* Filters display for small screens */}
        <div className="sm:hidden mt-4">
          <SelectedFilters
            selectedFilters={selectedFilters}
            setFromDate={setFromDate}
            setToDate={setToDate}
            setVendor={setVendor}
            initialFromDate={initialFromDate}
            initialToDate={initialToDate}
            initialVendor={initialVendor}
          />
        </div>
        <div className="overflow-x-auto bg-[#FFFFFF]">
          <div className="min-w-[900px] grid grid-cols-7 border-b border-stroke">
            {billsheadings.map((heading, index) => (
              <div
                key={index}
                className="flex items-center px-3 py-4 text-[#595959]"
              >
                <p className="text-xs gap-1 font-bold flex items-center">
                  {heading}
                  <img src={arrows} alt="Arrow icon" />
                </p>
              </div>
            ))}
          </div>

          {/* Render displayed Rows */}
          {displayedRows.map((item, index) => (
            <div
              key={index}
              className="min-w-[900px] grid grid-cols-7 border-b border-stroke"
            >
              <div className="flex items-center justify-start px-3 py-4">
                <p className="text-sm text-[#242E3E] font-normal">
                  {formatDate(item?.date)}
                </p>
              </div>
              <div className="flex items-center justify-start px-3 py-4">
                <p className="text-sm text-[#242E3E] font-normal">
                  {item?.number}
                </p>
              </div>
              <div className="flex items-center justify-start px-3 py-4">
                <span
                  className="px-3 py-1 rounded text-sm font-bold"
                  style={getStatusStyle2(item?.status2)}
                >
                  {item?.status2}
                </span>
              </div>
              <div className="flex items-center justify-start px-3 py-4">
                <p className="text-sm text-[#242E3E] font-normal">
                  {item?.vendor}
                </p>
              </div>
              <div className="flex items-center justify-start px-3 py-4">
                <p className="text-sm text-[#242E3E] font-normal">
                  {item?.duedate}
                </p>
              </div>
              <div className="flex items-center justify-start px-3 py-4">
                <p className="text-sm text-[#242E3E] font-normal">
                  {item?.amount}
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
    </>
  );
};

export default AllBills;
