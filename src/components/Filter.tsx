import React from "react";

const Filter = ({
  fromDate,
  filters,
  toDate,
  status,
  vendor,
  setFromDate,
  setToDate,
  setStatus,
  setVendor,
  applyFilter,
  closeModal,
}) => {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
    >
      <div className="bg-white rounded-lg p-6 w-80 md:w-96 z-60">
        <h3 className="text-lg font-semibold mb-4">Apply Filters</h3>

        <div className="mb-4">
          {filters.includes("fromDate") && (
            <div className="filter-item">
              <label htmlFor="fromDate">From Date</label>
              <input
                type="date"
                id="fromDate"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          {filters.includes("toDate") && (
            <div className="filter-item">
              <label htmlFor="toDate">To Date</label>
              <input
                type="date"
                id="toDate"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg w-full"
              />
            </div>
          )}
        </div>

        <div className="mb-4">
          {filters.includes("status") && (
            <div className="filter-item">
              <label htmlFor="status">Status</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg w-full"
              >
                <option value="">Select Status</option>
                <option value="Pending">Pending</option>
                <option value="Completed">Completed</option>
                <option value="Failed">Failed</option>
              </select>
            </div>
          )}
        </div>

        <div className="mb-4">
          {filters.includes("vendor") && (
            <div className="filter-item">
              <label htmlFor="vendor">Vendor</label>
              <select
                id="vendor"
                value={vendor}
                onChange={(e) => setVendor(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg w-full"
              >
                <option value="">Select Vendor</option>
                <option value="PromTech">PromTech</option>
                <option value="abc">abc</option>
                <option value="123">123</option>
              </select>
            </div>
          )}
        </div>

        <div className="flex justify-end space-x-2">
          <button
            onClick={closeModal}
            className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-200"
          >
            Close
          </button>
          <button
            onClick={applyFilter}
            className="px-4 py-2 bg-[#1D89E4] text-white rounded-lg"
          >
            Apply Filter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
