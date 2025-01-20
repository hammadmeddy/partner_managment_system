import React, { useState, useEffect } from "react";

const Pagination = ({
  data,
  currentPage,
  setCurrentPage,
  rowsPerPage,
  setRowsPerPage,
  setDisplayedRows,
}) => {
  const totalPages = Math.ceil(data.length / rowsPerPage);

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setDisplayedRows(data.slice(startIndex, endIndex));
  }, [rowsPerPage, currentPage, data, setDisplayedRows]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleRowsPerPageChange = (e) => {
    const newRowsPerPage = parseInt(e.target.value, 10);
    const maxPage = Math.ceil(data.length / newRowsPerPage) || 1;
    setRowsPerPage(newRowsPerPage);
    setCurrentPage((prevPage) => Math.min(prevPage, maxPage));
  };

  const renderPageNumbers = () => {
    const pages = [];
    // Always show the first page
    pages.push(
      <button
        key={1}
        onClick={() => handlePageChange(1)}
        className={`rounded px-[7px] ${
          currentPage === 1 ? "bg-[#1D89E4] text-white" : "text-[#333B48]"
        }`}
      >
        1
      </button>
    );

    // Show ellipsis if current page is far from the first page
    if (currentPage > 4) {
      pages.push(
        <span key="start-ellipsis" className="px-2">
          ...
        </span>
      );
    }

    // Render pages around the current page
    const startPage = Math.max(2, currentPage - 2);
    const endPage = Math.min(totalPages - 1, currentPage + 2);

    for (let page = startPage; page <= endPage; page++) {
      pages.push(
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={`rounded px-[7px] ${
            page === currentPage ? "bg-[#1D89E4] text-white" : "text-[#333B48]"
          }`}
        >
          {page}
        </button>
      );
    }

    // Show ellipsis if current page is far from the last page
    if (currentPage < totalPages - 3) {
      pages.push(
        <span key="end-ellipsis" className="px-2">
          ...
        </span>
      );
    }

    // Always show the last page
    pages.push(
      <button
        key={totalPages}
        onClick={() => handlePageChange(totalPages)}
        className={`rounded px-[7px] ${
          currentPage === totalPages
            ? "bg-[#1D89E4] text-white"
            : "text-[#333B48]"
        }`}
      >
        {currentPage > 1 && totalPages}
      </button>
    );

    return pages;
  };

  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-1 md:gap-4">
        <span className="text-[#242E3E]">Rows</span>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={handleRowsPerPageChange}
          className="rounded-md border-[1px] border-[#ECE9E9] bg-white font-normal text-sm py-1 px-1 text-[#242E3E] md:px-2.5"
        >
          {[5, 7, 10].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
        <span className="text-[#242E3E]">Per Page</span>
      </div>
      <nav aria-label="Pagination" className="flex items-center space-x-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-1.5 py-1 text-[#333B48] disabled:opacity-50 md:px-3 md:py-2"
        >
          &lt;
        </button>
        <div className="flex hidden items-center space-x-1 md:block">
          {renderPageNumbers()}
        </div>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-1.5 py-1 text-[#333B48] disabled:opacity-50 md:px-3 md:py-2"
        >
          &gt;
        </button>
      </nav>
    </div>
  );
};

export default Pagination;
