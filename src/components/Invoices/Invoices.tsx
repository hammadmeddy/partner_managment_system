import React, { useState, useEffect } from "react";
import data from "../../utils/data.json";
import action from "../../images/action.png";
import arrows from "../../images/arrows.png";
import Filter from "../../components/Filter";
import SelectedFilters from "../SelectedFilters";
import Pagination from "../Pagination";
import ButtonGroup3 from "./ButtonGroup3";
import ButtonGroup4 from "./ButtonGroup4";
import InvoiceDashboard from "./InvoiceDashboard";

const Invoices = () => {
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

  const totalPages = Math.ceil(filteredData.length / rowsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setDisplayedRows(filteredData.slice(startIndex, endIndex));
  }, [rowsPerPage, currentPage, filteredData]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (e) => {
    const newRowsPerPage = parseInt(e.target.value, 10);
    const maxPage = Math.ceil(filteredData.length / newRowsPerPage) || 1;
    setRowsPerPage(newRowsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage, maxPage));
  };

  // Calculate the number of active filters
  const activeFiltersCount =
    (fromDate ? 1 : 0) + (toDate ? 1 : 0) + (status ? 1 : 0);

  // For styling statuses
  const getStatusStyle = (status) => {
    if (status === "Completed") {
      return { backgroundColor: "#E9FAF0", color: "#1FCD67" };
    }
    if (status === "Pending") {
      return { backgroundColor: "#FFF9E9", color: "#FBBF24" };
    }
    if (status === "Failed") {
      return { backgroundColor: "#FEEAEA", color: "#F23030" };
    }
    return {};
  };

  const headings = [
    "Date",
    "Number",
    "Status",
    "Customer",
    "Amount Due",
    "Actions",
  ];

  // Filter function that updates the filtered data based on input
  const handleFilterChange = () => {
    let filtered = data;
    if (fromDate) {
      filtered = filtered.filter(
        (item) => new Date(item.date) >= new Date(fromDate)
      );
    }
    if (toDate) {
      filtered = filtered.filter(
        (item) => new Date(item.date) <= new Date(toDate)
      );
    }
    if (status) {
      filtered = filtered.filter((item) => item.status === status);
    }
    setFilteredData(filtered);
    //setCurrentPage(1); // Reset pagination to the first page
  };

  const handleApplyFilter = () => {
    handleFilterChange();
    closeModal(); // Close modal after applying filters
  };

  const handleFilterRemove = (filterLabel) => {
    if (filterLabel === "From") {
      setFromDate(initialFromDate);
    }
    if (filterLabel === "To") {
      setToDate(initialToDate);
    }
    if (filterLabel === "Status") {
      setStatus(initialStatus);
    }
    handleFilterChange(); // Reset data to original state without any filtering
  };

  // Toggle modal visibility
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Function to format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);

    // Using Intl.DateTimeFormat to format the date
    const options = { day: "2-digit", month: "long", year: "numeric" };
    const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(
      date
    );

    return formattedDate;
  };

  // Displays selected filters
  const selectedFilters = [];
  if (fromDate)
    selectedFilters.push({ label: "From", value: formatDate(fromDate) });
  if (toDate) selectedFilters.push({ label: "To", value: formatDate(toDate) });
  if (status) selectedFilters.push({ label: "Status", value: status });

  return (
    <>
      <ButtonGroup3
        onAllClick={handleAllClick}
        onActiveClick={handleActiveClick}
        onDraftClick={handleDraftClick}
      />
      <InvoiceDashboard />

      <div className="rounded-xl bg-[#FFFFFF] border-[1px] mt-2 border-[#ECE9E9] py-6 px-3">
        <div className="flex flex-col md:flex-row items-center justify-between px-2">
          <span className="pb-3 text-[#242E3E] font-bold text-base">
            {filter} Invoices
          </span>
          <span>
            <div className="flex justify-end gap-2 items-center">
              <div className="hidden sm:flex flex-wrap gap-2">
                <SelectedFilters
                  selectedFilters={selectedFilters}
                  handleFilterRemove={handleFilterRemove}
                />
              </div>

              {/* Button Group */}
              <ButtonGroup4
                openModal={openModal}
                activeFiltersCount={activeFiltersCount}
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
                  applyFilter={handleApplyFilter}
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
            handleFilterRemove={handleFilterRemove}
          />
        </div>

        <div className="overflow-x-auto bg-[#FFFFFF]">
          <div className="min-w-[900px] grid grid-cols-6 border-b border-stroke">
            {headings.map((heading, index) => (
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
                  style={getStatusStyle(item.status)}
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
                  {item?.amountdue}
                </p>
              </div>
              <div className="flex items-center justify-start px-3 py-4">
                <img src={action} alt="Action Icon" className="h-6 w-6" />
              </div>
            </div>
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          rowsPerPage={rowsPerPage}
          handlePageChange={handlePageChange}
          handleRowsPerPageChange={handleRowsPerPageChange}
        />
      </div>
    </>
  );
};

export default Invoices;
