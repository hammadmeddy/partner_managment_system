import React from "react";

const cardData = [
  {
    title: "Inventory Items",
    value: "2,156",
    description: "98% in stock",
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
        className="w-5 h-5"
      >
        <rect x="3" y="3" width="7" height="7"></rect>
        <rect x="14" y="3" width="7" height="7"></rect>
        <rect x="3" y="14" width="7" height="7"></rect>
        <rect x="14" y="14" width="7" height="7"></rect>
      </svg>
    ),
  },
  {
    title: "Orders Today",
    value: "47",
    description: "+23% vs yesterday",
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
        className="w-5 h-5"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="16" y1="2" x2="16" y2="6"></line>
        <line x1="8" y1="2" x2="8" y2="6"></line>
        <line x1="3" y1="10" x2="21" y2="10"></line>
      </svg>
    ),
  },
  {
    title: "Partners Served",
    value: "89",
    description: "12 new this month",
    descriptionColor: "#10b981",
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
        className="w-5 h-5"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
  {
    title: "Pending Shipments",
    value: "156",
    description: "95% on time",
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
        className="w-5 h-5"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    ),
  },
];

const DistributorDashboardCards = () => {
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
            style={{
              backgroundColor: card.iconBackground,
              color: card.iconColor,
            }}
          >
            {card.iconPath}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DistributorDashboardCards;
