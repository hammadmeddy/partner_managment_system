const metricsData = [
  {
    title: "Active Projects",
    value: "12",
    description: "3 due this week",
    descriptionColor: "#64748b",
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-calendar w-5 h-5"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Orders This Month",
    value: "34",
    description: "+18% from last month",
    descriptionColor: "#10b981",
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
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-grid2x2 w-5 h-5"
      >
        <rect width="7" height="7" x="3" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="3" rx="1" />
        <rect width="7" height="7" x="14" y="14" rx="1" />
        <rect width="7" height="7" x="3" y="14" rx="1" />
      </svg>
    ),
  },
  {
    title: "Rebate Progress",
    value: "76%",
    description: "24% to next tier",
    descriptionColor: "#10b981",
    iconBackground: "#ecfdf5",
    iconColor: "#16a34a",
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
        className="lucide lucide-users w-5 h-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Support Cases",
    value: "2",
    description: "1 resolved today",
    descriptionColor: "#10b981",
    iconBackground: "#fff7ed",
    iconColor: "#f97316",
    iconPath: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-bell w-5 h-5"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="m13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
];

const PartnersDashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {metricsData.map((metric, index) => (
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
            className="p-4 rounded-xl"
            style={{ backgroundColor: metric.iconBackground }}
          >
            {metric.iconPath}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartnersDashboardCards;
