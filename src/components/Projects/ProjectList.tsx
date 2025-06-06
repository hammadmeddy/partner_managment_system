import  React from "react";

interface ProjectListProps {
  filter: string;
}

const projects = [
  {
    id: "PRJ-001",
    title: "Smart Building Automation - Tech Center",
    client: "TechCorp Industries",
    status: "In Progress",
    progress: 65,
    startDate: "2024-01-15",
    endDate: "2024-06-30",
    value: "$125,000",
    team: [
      {
        id: "JD",
        name: "John Doe",
        gradient: "linear-gradient(to right, #4f46e5, #9333ea)",
      },
      {
        id: "SM",
        name: "Sarah Miller",
        gradient: "linear-gradient(to right, #4f46e5, #9333ea)",
      },
      {
        id: "MR",
        name: "Mike Ross",
        gradient: "linear-gradient(to right, #4f46e5, #9333ea)",
      },
    ],
  },
  {
    id: "PRJ-002",
    title: "Industrial IoT Implementation",
    client: "Manufacturing Corp",
    status: "Planning",
    progress: 25,
    startDate: "2024-02-01",
    endDate: "2024-08-15",
    value: "$89,500",
    team: [
      {
        id: "AK",
        name: "Alice Kim",
        gradient: "linear-gradient(to right, #4f46e5, #9333ea)",
      },
      {
        id: "BT",
        name: "Bob Thompson",
        gradient: "linear-gradient(to right, #4f46e5, #9333ea)",
      },
    ],
  },
  {
    id: "PRJ-003",
    title: "Warehouse Management System",
    client: "LogiFlow Solutions",
    status: "Completed",
    progress: 100,
    startDate: "2023-09-01",
    endDate: "2024-01-30",
    value: "$210,000",
    team: [
      {
        id: "CL",
        name: "Carol Lee",
        gradient: "linear-gradient(to right, #4f46e5, #9333ea)",
      },
      {
        id: "DW",
        name: "David Wang",
        gradient: "linear-gradient(to right, #4f46e5, #9333ea)",
      },
      {
        id: "EP",
        name: "Emma Parker",
        gradient: "linear-gradient(to right, #4f46e5, #9333ea)",
      },
      {
        id: "+1",
        name: "More",
        backgroundColor: "#f3f4f6",
        textColor: "#4b5563",
      },
    ],
  },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "In Progress":
      return { backgroundColor: "#dbeafe", color: "#1d4ed8" };
    case "Planning":
      return { backgroundColor: "#fef3c7", color: "#d97706" };
    case "Completed":
      return { backgroundColor: "#dcfce7", color: "#16a34a" };
    default:
      return { backgroundColor: "#f1f5f9", color: "#475569" };
  }
};

const Avatar = ({
  children,
  className,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

const ProjectList = ({ filter }: ProjectListProps) => {
  const filteredProjects = projects.filter((project) => {
    if (filter === "active") return project.status !== "Completed";
    if (filter === "completed") return project.status === "Completed";
    return true; // "all" filter
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {filteredProjects.map((project) => (
        <div key={project.id} className="bg-white rounded-2xl shadow p-6">
          <div className="flex justify-between items-start mb-4">
            <span
              className="px-3 py-1 rounded-full text-xs font-semibold"
              style={getStatusColor(project.status)}
            >
              {project.status}
            </span>
            <span className="text-gray-500 text-sm">{project.id}</span>
          </div>

          <h3 className="text-xl font-semibold text-black mb-1">
            {project.title}
          </h3>
          <p className="text-gray-500 mb-4">{project.client}</p>

          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span className="text-gray-600">Progress</span>
              <span className="text-gray-900 font-medium">
                {project.progress}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${project.progress}%`,
                  backgroundColor:
                    project.progress === 100 ? "#10b981" : "#facc15",
                }}
              ></div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600 text-sm">Start Date</p>
              <p className="text-gray-900">{project.startDate}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm">End Date</p>
              <p className="text-gray-900">{project.endDate}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex -space-x-2">
              {project.team.map((member) => (
                <Avatar
                  key={member.id}
                  className="border-2 border-white h-8 w-8 text-xs font-medium"
                  style={{
                    backgroundImage: member.gradient || undefined,
                    backgroundColor: member.backgroundColor || undefined,
                    color: member.textColor || "#ffffff",
                  }}
                >
                  {member.id}
                </Avatar>
              ))}
            </div>
            <span className="text-black font-semibold">{project.value}</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button
              className="text-white py-2 px-4 rounded-lg transition-colors font-semibold"
              style={{
                backgroundImage: "linear-gradient(to right, #3aeccb, #30d3b4)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(0.9)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(1)")
              }
            >
              View Details
            </button>
            <button
              className="text-white py-2 px-4 rounded-lg transition-colors font-medium"
              style={{
                backgroundImage: "linear-gradient(to right, #4f46e5, #9333ea)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.filter = "brightness(0.9)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.filter = "brightness(1)")
              }
            >
              Manage
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
