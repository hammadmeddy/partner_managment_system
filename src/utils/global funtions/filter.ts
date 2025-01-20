export const handleFilterChange = ({
  fromDate,
  toDate,
  status,
  setFilteredData,
  data,
}) => {
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
};

export const handleFilterRemove = (
  filterLabel,
  setFromDate,
  setToDate,
  setStatus,
  initialFromDate,
  initialToDate,
  initialStatus
) => {
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

// Calculate the number of active filters
export const activeFiltersCount = ({ fromDate, toDate, status }) =>
  (fromDate ? 1 : 0) + (toDate ? 1 : 0) + (status ? 1 : 0);

// Filter function that updates the filtered data based on input
export const handleApplyFilter = ({
  fromDate,
  toDate,
  status,
  setFilteredData,
  data,
  closeModal,
}) => {
  handleFilterChange({ fromDate, toDate, status, setFilteredData, data });
  closeModal(); // Close modal after applying filters
};

export const getSelectedFilters = ({
  fromDate,
  toDate,
  status,
  formatDate,
}) => {
  const filters = [];
  if (fromDate) filters.push({ label: "From", value: formatDate(fromDate) });
  if (toDate) filters.push({ label: "To", value: formatDate(toDate) });
  if (status) filters.push({ label: "Status", value: status });
  return filters;
};

export const handleInputChange = (e, rowId, field, setRowsData) => {
  const value =
    field === "Quantity" || field === "Price"
      ? parseFloat(e.target.value) || ""
      : e.target.value;

  setRowsData((prevRows) =>
    prevRows.map((row) =>
      row.id === rowId
        ? {
            ...row,
            [field]: value,
          }
        : row
    )
  );
};

export const addNewRow = ({ setRowsData, rowsData }) => {
  const newRow = {
    id: rowsData.length + 1,
    Item: "New Item Added",
    Quantity: 1,
    Price: 0,
    Amount: 0,
    Tax: "Select Tax",
  };
  setRowsData((prevRows) => [...prevRows, newRow]);
};

export const addNewDiscount = ({ rowsData, setRowsData }) => {
  const newRow = {
    id: rowsData.length + 1,
    Item: "New Discount",
    Description: "Write discount description here",
    Subtotal: 0,
    Amount: 0,
  };
  setRowsData((prevRows) => [...prevRows, newRow]);
};

export const handleDiscountInputChange = (e, rowId, field, setRowsData) => {
  const value =
    field === "Subtotal" ? parseFloat(e.target.value) || 0 : e.target.value;
  setRowsData((prevRows) =>
    prevRows.map((row) => (row.id === rowId ? { ...row, [field]: value } : row))
  );
};
