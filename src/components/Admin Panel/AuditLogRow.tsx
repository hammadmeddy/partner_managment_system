"use client";

export default function AuditLogRow({
  action,
  user,
  timestamp,
  ipAddress,
  status,
}) {
  const getStatusColor = (status) => {
    return status.toLowerCase() === "success" ? "#10B981" : "#EF4444";
  };

  return (
    <tr className="border-b border-[#FFFF00]">
      <td className="py-4 px-6 text-[#1F2937] font-medium">{action}</td>
      <td className="py-4 px-6 text-[#6B7280]">{user}</td>
      <td className="py-4 px-6 text-[#6B7280]">{timestamp}</td>
      <td className="py-4 px-6 text-[#6B7280]">{ipAddress}</td>
      <td className="py-4 px-6">
        <span
          className="px-3 py-1 rounded-full text-white text-sm font-medium"
          style={{ backgroundColor: getStatusColor(status) }}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
