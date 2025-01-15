import React from "react";

const Filter = ({
  fromDate,
  toDate,
  status,
  setFromDate,
  setToDate,
  setStatus,
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
          {/* From Date */}
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          {/* To Date */}
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          />
        </div>

        <div className="mb-4">
          {/* Status Dropdown */}
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-lg w-full"
          >
            <option value="">All</option>
            <option value="Completed">Completed</option>
            <option value="Pending">Pending</option>
            <option value="Failed">Failed</option>
          </select>
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
