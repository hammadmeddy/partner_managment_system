"use client";

export default function UserRow({ name, email, role, company, status, date }) {
  const getRoleColor = (role) => {
    switch (role.toLowerCase()) {
      case "partner":
        return "#10B981";
      case "distributor":
        return "#8B5CF6";
      case "support":
        return "#F59E0B";
      default:
        return "#6B7280";
    }
  };

  const getStatusColor = (status) => {
    return status.toLowerCase() === "active" ? "#10B981" : "#6B7280";
  };

  return (
    <tr className="border-b border-[#FFFF00]">
      <td className="py-4 px-6 text-[#1F2937] font-medium">{name}</td>
      <td className="py-4 px-6 text-[#6B7280]">{email}</td>
      <td className="py-4 px-6">
        <span
          className="px-3 py-1 rounded-full text-white text-sm font-medium"
          style={{ backgroundColor: getRoleColor(role) }}
        >
          {role}
        </span>
      </td>
      <td className="py-4 px-6 text-[#6B7280]">{company}</td>
      <td className="py-4 px-6">
        <span
          className="px-3 py-1 rounded-full text-white text-sm font-medium"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {status}
        </span>
      </td>
      <td className="py-4 px-6 text-[#6B7280]">{date}</td>
    </tr>
  );
}
