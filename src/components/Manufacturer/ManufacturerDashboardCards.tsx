import React from "react";

const cardData = [
  {
    title: "Active Partners",
    value: "247",
    description: "+12% this month",
    descriptionColor: "#10b981",
    iconBackground: "#eff6ff",
    iconColor: "#2563eb",
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
    title: "Monthly Orders",
    value: "1,234",
    description: "+8% from last month",
    descriptionColor: "#10b981",
    iconBackground: "#ecfdf5",
    iconColor: "#10b981",
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
        <path d="M12 3v18"></path>
        <path d="M3 12h18"></path>
        <rect x="3" y="3" width="18" height="18" rx="2"></rect>
      </svg>
    ),
  },
  {
    title: "Projects Active",
    value: "89",
    description: "5 due this week",
    descriptionColor: "#6b7280",
    iconBackground: "#f5f3ff",
    iconColor: "#7c3aed",
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
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
      </svg>
    ),
  },
  {
    title: "Support Tickets",
    value: "23",
    description: "-15% from last week",
    descriptionColor: "#ef4444",
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
        className="lucide lucide-alert-triangle w-5 h-5"
      >
        <path d="M10.29 3.86l-8.58 14.72A2 2 0 003.92 21h16.16a2 2 0 001.72-2.42L13.71 3.86a2 2 0 00-3.42 0z"></path>
        <line x1="12" y1="9" x2="12" y2="13"></line>
        <line x1="12" y1="17" x2="12.01" y2="17"></line>
      </svg>
    ),
  },
];

const ManufacturerDashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {cardData.map((card, index) => (
        <div
          key={index}
          className="bg-white shadow transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer rounded-2xl p-6 flex justify-between items-start"
        >
          <div className="space-y-3">
            <h3 className="text-[#64748b] text-lg font-medium">{card.title}</h3>
            <p className="text-[#0f172a] text-3xl font-semibold">
              {card.value}
            </p>
            <p className="text-sm" style={{ color: card.descriptionColor }}>
              {card.description}
            </p>
          </div>
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: card.iconBackground }}
          >
            {card.iconPath}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ManufacturerDashboardCards;
