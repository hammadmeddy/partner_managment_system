export const getStatusStyle = (status) => {
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
}; // For styling statuses: Completed, Pending and Failed

export const getStatusStyle2 = (status) => {
  if (status === "Paid") {
    return { backgroundColor: "#E9FAF0", color: "#1FCD67" };
  }
  if (status === "Unpaid") {
    return { backgroundColor: "#FEEAEA", color: "#F23030" };
  }
  return {};
}; // For styling statuses: Paid and Unpaid
