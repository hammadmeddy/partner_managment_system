const projectMetricsData = [
  {
    title: "Active Projects",
    value: "12",
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
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Total Value",
    value: "$2.4M",
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
    title: "On Schedule",
    value: "89%",
    iconBackground: "#f5f3ff",
    iconColor: "#8b5cf6",
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
    title: "Avg Duration",
    value: "6.2mo",
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
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
];

const ProjectDashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      {projectMetricsData.map((metric, index) => (
        <div
          key={index}
          className="bg-white shadow transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer rounded-2xl p-6 flex justify-between items-start"
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

export default ProjectDashboardCards;
