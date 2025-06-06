const quickActionsData = [
  {
    title: "Process Orders",
    description: "Review and approve pending partner orders",
    buttonText: "View Orders",
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
    title: "Inventory Check",
    description: "Monitor stock levels and reorder points",
    buttonText: "Check Inventory",
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
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: "Partner Support",
    description: "Assist partners with technical questions",
    buttonText: "Support Center",
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
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        className="lucide lucide-users w-6 h-6"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
];

const DistributorQuickActions = () => {
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
              <div
                className="w-8 h-8 flex items-center justify-center"
                style={{ color: action.iconColor }}
              >
                {action.icon}
              </div>
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

export default DistributorQuickActions;
