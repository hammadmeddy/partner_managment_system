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
  //setCurrentPage(1); // Reset pagination to the first page
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
