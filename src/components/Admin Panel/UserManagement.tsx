"use client";

import { useState } from "react";
import { Search, Plus } from "lucide-react";
import UserRow from "./UserRow";
import UserModal from "./UserModal";

export default function UserManagement() {
  const [searchQuery, setSearchQuery] = useState("");

  const users = [
    {
      name: "John Smith",
      email: "john.smith@techcorp.com",
      role: "Partner",
      company: "TechCorp Solutions",
      status: "Active",
      date: "2024-01-15",
    },
    {
      name: "Sarah Johnson",
      email: "sarah@globaldist.com",
      role: "Distributor",
      company: "Global Distribution",
      status: "Active",
      date: "2024-01-14",
    },
    {
      name: "Mike Chen",
      email: "mike@smartsolutions.com",
      role: "Support",
      company: "Smart Solutions Inc",
      status: "Inactive",
      date: "2024-01-13",
    },
  ];
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-[#1F2937]">
          User Management
        </h2>
        <div className="flex space-x-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
            <input
              type="text"
              placeholder="Search users..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white text-black placeholder-black px-12 py-3 rounded-lg font-medium"
            />
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-[#30d3b4] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#30d3b4] transition-colors flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add User</span>
            <UserModal
              isOpen={isModalOpen}
              onClose={() => setModalOpen(false)}
            />
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-[#E5E7EB] overflow-hidden">
        <table className="w-full">
          <thead className="bg-[#F9FAFB]">
            <tr>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Name
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Email
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Role
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Company
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Status
              </th>
              <th className="text-left py-4 px-6 font-semibold text-[#1F2937]">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserRow
                key={index}
                name={user.name}
                email={user.email}
                role={user.role}
                company={user.company}
                status={user.status}
                date={user.date}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
