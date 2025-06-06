import React from "react";

const quickActionsData = [
  {
    title: "New Product Launch",
    description: "Set up distribution channels and partner notifications",
    buttonText: "Launch Product",
    buttonGradient: "linear-gradient(to right, #6366f1, #9333ea)",
    iconBackground: "#eef2ff",
    iconColor: "#4f46e5",
    icon: (
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
        className="lucide lucide-plus"
      >
        <path d="M12 5v14"></path>
        <path d="M5 12h14"></path>
      </svg>
    ),
  },
  {
    title: "Partner Analytics",
    description: "Review partner performance and tier adjustments",
    buttonText: "View Analytics",
    buttonGradient: "linear-gradient(to right, #6366f1, #9333ea)",
    iconBackground: "#f0fdf4",
    iconColor: "#16a34a",
    icon: (
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
        className="lucide lucide-search"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.35-4.35"></path>
      </svg>
    ),
  },
  {
    title: "Rebate Settings",
    description: "Configure quarterly incentive programs",
    buttonText: "Manage Rebates",
    buttonGradient: "linear-gradient(to right, #6366f1, #9333ea)",
    iconBackground: "#fdf4ff",
    iconColor: "#d946ef",
    icon: (
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
        className="lucide lucide-settings"
      >
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
      </svg>
    ),
  },
];

const ManufacturerQuickActions = () => {
  return (
    <div className="py-3">
      <h1 className="text-xl font-semibold text-[#0f172a] mb-4">
        Quick Actions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActionsData.map((action, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-2xl py-8 p-6 flex flex-col items-start transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer"
          >
            <div
              className="p-4 rounded-xl mb-4"
              style={{ backgroundColor: action.iconBackground }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke={action.iconColor}
                className="w-8 h-8"
              >
                {action.icon}
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-[#0f172a] mb-2">
              {action.title}
            </h3>
            <p className="text-sm text-[#64748b] mb-4">{action.description}</p>
            <button
              className="px-4 py-2 text-white rounded-lg font-medium transition-all duration-200 hover:brightness-90 mt-auto"
              style={{
                backgroundImage: action.buttonGradient,
              }}
            >
              {action.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManufacturerQuickActions;
