// Function to format date
export const formatDate = (dateString) => {
  const date = new Date(dateString);

  // Using Intl.DateTimeFormat to format the date
  const options = { day: "2-digit", month: "long", year: "numeric" };
  const formattedDate = new Intl.DateTimeFormat("en-GB", options).format(date);

  return formattedDate;
};
