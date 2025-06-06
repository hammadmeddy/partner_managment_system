const adminMetricsData = [
  {
    title: "Total Users",
    value: "2,847",
    description: "+156 this month",
    descriptionColor: "#10b981",
    iconBackground: "#eff6ff",
    iconColor: "#3b82f6",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Pending Approvals",
    value: "23",
    description: "12 partner applications",
    descriptionColor: "#64748b",
    iconBackground: "#fff7ed",
    iconColor: "#f97316",
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
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
  {
    title: "System Health",
    value: "99.9%",
    description: "All systems operational",
    descriptionColor: "#10b981",
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    title: "Monthly Revenue",
    value: "$2.4M",
    description: "+12% from last month",
    descriptionColor: "#10b981",
    iconBackground: "#faf5ff",
    iconColor: "#a855f7",
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
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
];

const AdminDashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {adminMetricsData.map((metric, index) => (
        <div
          key={index}
          className="bg-white shadow transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer rounded-2xl p-6 flex justify-between items-start"
        >
          <div className="space-y-3">
            <h3 className="text-[#64748b] text-lg font-medium">
              {metric.title}
            </h3>
            <p className="text-[#0f172a] text-3xl font-semibold">
              {metric.value}
            </p>
            <p className="text-sm" style={{ color: metric.descriptionColor }}>
              {metric.description}
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

export default AdminDashboardCards;
