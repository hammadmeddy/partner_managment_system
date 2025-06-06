const quickActionsData = [
  {
    title: "New Project",
    description: "Register a new project and track milestones",
    buttonText: "Start Project",
    buttonGradient: "linear-gradient(to right, #6366f1, #9333ea)",
    iconBackground: "#f3f4f6",
    iconColor: "#8b5cf6",
    icon: (
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
        <path d="M12 5v14" />
        <path d="M5 12h14" />
      </svg>
    ),
  },
  {
    title: "Place Order",
    description: "Browse catalog and place equipment orders",
    buttonText: "Shop Now",
    buttonGradient: "linear-gradient(to right, #6366f1, #9333ea)",
    iconBackground: "#eff6ff",
    iconColor: "#3b82f6",
    icon: (
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
  {
    title: "Check Rebates",
    description: "View progress towards quarterly targets",
    buttonText: "View Rebates",
    buttonGradient: "linear-gradient(to right, #6366f1, #9333ea)",
    iconBackground: "#f0fdf4",
    iconColor: "#16a34a",
    icon: (
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

const PartnersQuickAction = () => {
  return (
    <div className="py-3">
      <h1 className="text-xl font-semibold text-[#0f172a] mb-4">
        Quick Actions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quickActionsData.map((action, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-2xl py-8 p-6 flex flex-col justify-between h-full transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer"
          >
            <div
              className="p-3 rounded-xl mb-4 flex items-center justify-center w-12 h-12"
              style={{ backgroundColor: action.iconBackground }}
            >
              <div
                className="w-5 h-5 flex items-center justify-center"
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

export default PartnersQuickAction;
