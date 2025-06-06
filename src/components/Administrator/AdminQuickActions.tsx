const adminQuickActionsData = [
  {
    title: "User Management",
    description: "Manage user accounts and permissions",
    buttonText: "Manage Users",
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Partner Approvals",
    description: "Review and approve new partner applications",
    buttonText: "Review Queue",
    buttonGradient: "linear-gradient(to right, #6366f1, #9333ea)",
    iconBackground: "#fff7ed",
    iconColor: "#f97316",
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12,6 12,12 16,14" />
      </svg>
    ),
  },
  {
    title: "System Settings",
    description: "Configure platform settings and integrations",
    buttonText: "Settings",
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
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
];

const AdminQuickActions = () => {
  return (
    <div className="py-3">
      <h1 className="text-xl font-semibold text-[#0f172a] mb-4">
        Quick Actions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {adminQuickActionsData.map((action, index) => (
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

export default AdminQuickActions;
