import AuditLogRow from "./AuditLogRow";

export default function AuditLogs() {
  const auditLogs = [
    {
      action: "User Login",
      user: "john.smith@techcorp.com",
      timestamp: "2024-01-15 14:30:45",
      ipAddress: "192.168.1.100",
      status: "Success",
    },
    {
      action: "Partner Approved",
      user: "admin@company.com",
      timestamp: "2024-01-15 13:45:22",
      ipAddress: "10.0.0.1",
      status: "Success",
    },
    {
      action: "Failed Login Attempt",
      user: "unknown@domain.com",
      timestamp: "2024-01-15 12:22:08",
      ipAddress: "203.0.113.1",
      status: "Failed",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold text-[#1F2937] mb-6">Audit Logs</h2>

      <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Action
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                User
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Timestamp
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                IP Address
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {auditLogs.map((log, index) => (
              <AuditLogRow
                key={index}
                action={log.action}
                user={log.user}
                timestamp={log.timestamp}
                ipAddress={log.ipAddress}
                status={log.status}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
