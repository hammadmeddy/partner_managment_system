const orderMetricsData = [
  {
    title: "Total Orders",
    value: "47",
    iconBackground: "#eff6ff",
    iconColor: "#3b82f6",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-grid2x2 w-6 h-6"
      >
        <path d="M12 3v18"></path>
        <path d="M3 12h18"></path>
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      </svg>
    ),
  },
  {
    title: "This Month",
    value: "$89.2K",
    iconBackground: "#f0fdf4",
    iconColor: "#16a34a",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
  },
  {
    title: "Pending",
    value: "8",
    iconBackground: "#fefce8",
    iconColor: "#f59e0b",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6h6" />
      </svg>
    ),
  },
  {
    title: "Avg Delivery",
    value: "12 days",
    iconBackground: "#f5f3ff",
    iconColor: "#8b5cf6",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-bell w-6 h-6"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
      </svg>
    ),
  },
];

const OrderDashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {orderMetricsData.map((metric, index) => (
        <div
          key={index}
          className="bg-white shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer rounded-2xl p-6 flex justify-between items-start"
        >
          <div>
            <h3 className="text-[#64748b] text-lg font-medium">
              {metric.title}
            </h3>
            <p className="text-[#0f172a] text-3xl font-semibold mt-2">
              {metric.value}
            </p>
          </div>
          <div
            className="p-3 rounded-xl flex items-center justify-center w-12 h-12"
            style={{ backgroundColor: metric.iconBackground }}
          >
            <div
              className="w-5 h-5 flex items-center justify-center"
              style={{ color: metric.iconColor }}
            >
              {metric.iconPath}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderDashboardCards;
