const supportMetricsData = [
  {
    title: "Open Tickets",
    value: "89",
    description: "12 high priority",
    descriptionColor: "#64748b",
    iconBackground: "#fef2f2",
    iconColor: "#ef4444",
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
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="m13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: "Resolved Today",
    value: "23",
    description: "85% satisfaction",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Avg Response",
    value: "2.4h",
    description: "-15min from yesterday",
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
  {
    title: "Knowledge Base",
    value: "456",
    description: "12 articles updated",
    descriptionColor: "#64748b",
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
];

const SupportDashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {supportMetricsData.map((metric, index) => (
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

export default SupportDashboardCards;
