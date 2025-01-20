import React, { useState, useEffect } from "react";
import data from "../../utils/data.json";
import action from "../../images/action.png";
import arrows from "../../images/arrows.png";
import Filter from "../../components/Filter";
import ButtonGroup from "./ButtonGroup";
import SelectedFilters from "../SelectedFilters";
import ButtonGroup2 from "./ButtonGroup2";
import { getStatusStyle } from "../../utils/global funtions/statusstyle";
import { formatDate } from "../../utils/global funtions/dateformat";
import { estimateheadings } from "../../utils/global funtions/headings";
import { activeFiltersCount } from "../../utils/global funtions/filter";
import { handleApplyFilter } from "../../utils/global funtions/filter";
import { getSelectedFilters } from "../../utils/global funtions/filter";
import Pagination from "../Pagination";

const Estimates = () => {
  const [filter, setFilter] = useState("All");

  // Handle clicks for active tabs
  const handleAllClick = () => setFilter("All");
  const handleActiveClick = () => setFilter("Active");
  const handleDraftClick = () => setFilter("Draft");

  // Initial state for filter values
  const initialFromDate = "";
  const initialToDate = "";
  const initialStatus = "";

  // State for filter values
  const [fromDate, setFromDate] = useState(initialFromDate);
  const [toDate, setToDate] = useState(initialToDate);
  const [status, setStatus] = useState(initialStatus);
  const [filteredData, setFilteredData] = useState(data);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [displayedRows, setDisplayedRows] = useState([]);

  const selectedFilters = getSelectedFilters({
    fromDate,
    toDate,
    status,
    formatDate,
  });

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setDisplayedRows(filteredData.slice(startIndex, endIndex));
  }, [rowsPerPage, currentPage, filteredData]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <ButtonGroup2
        onAllClick={handleAllClick}
        onActiveClick={handleActiveClick}
        onDraftClick={handleDraftClick}
      />
      <div className="rounded-xl bg-[#FFFFFF] border-[1px] border-[#ECE9E9] py-6 px-3">
        <div className="flex flex-col md:flex-row items-center justify-between px-2">
          <span className="pb-3 text-[#242E3E] font-bold text-base">
            {filter} Estimates
          </span>
          <span>
            <div className="flex justify-end gap-2 items-center">
              <div className="hidden sm:flex flex-wrap gap-2">
                <SelectedFilters
                  selectedFilters={selectedFilters}
                  setFromDate={setFromDate}
                  setToDate={setToDate}
                  setStatus={setStatus}
                  initialFromDate={initialFromDate}
                  initialToDate={initialToDate}
                  initialStatus={initialStatus}
                />
              </div>
              {/* Button Group */}
              <ButtonGroup
                openModal={openModal}
                activeFiltersCount={activeFiltersCount({
                  fromDate,
                  toDate,
                  status,
                })}
              />
              {/* Filter Modal,filter states and handler */}
              {isModalOpen && (
                <Filter
                  fromDate={fromDate}
                  toDate={toDate}
                  status={status}
                  setFromDate={setFromDate}
                  setToDate={setToDate}
                  setStatus={setStatus}
                  applyFilter={() =>
                    handleApplyFilter({
                      fromDate,
                      toDate,
                      status,
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
            setStatus={setStatus}
            initialFromDate={initialFromDate}
            initialToDate={initialToDate}
            initialStatus={initialStatus}
          />
        </div>
        <div className="overflow-x-auto bg-[#FFFFFF]">
          <div className="min-w-[900px] grid grid-cols-6 border-b border-stroke">
            {estimateheadings.map((heading, index) => (
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
              className="min-w-[900px] grid grid-cols-6 border-b border-stroke"
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
                  style={getStatusStyle(item?.status)}
                >
                  {item?.status}
                </span>
              </div>
              <div className="flex items-center justify-start px-3 py-4">
                <p className="text-sm text-[#242E3E] font-normal">
                  {item?.customer}
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

export default Estimates;
