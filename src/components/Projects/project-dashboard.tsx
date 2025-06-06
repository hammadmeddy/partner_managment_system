"use client";

import React, { useState } from "react";
import {
  ArrowLeft,
  Clock,
  DollarSign,
  Users,
  Calendar,
  FileText,
  MapPin,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ProjectDashboard() {
  const [activeTab, setActiveTab] = useState("Overview");
  const navigate = useNavigate();
  const tabs = ["Overview", "Team", "Orders", "Timeline"];
  const milestones = [
    {
      title: "Planning & Design",
      date: "2024-01-30",
      status: "completed",
      dotColor: "#22c55e", // green-500
      badgeBg: "#d1fae5", // green-100
      badgeText: "#16a34a", // green-600
    },
    {
      title: "Equipment Procurement",
      date: "2024-02-15",
      status: "completed",
      dotColor: "#22c55e",
      badgeBg: "#d1fae5",
      badgeText: "#16a34a",
    },
    {
      title: "Installation Phase 1",
      date: "2024-03-30",
      status: "in-progress",
      dotColor: "#3b82f6", // blue-500
      badgeBg: "#dbeafe", // blue-100
      badgeText: "#2563eb", // blue-600
    },
    {
      title: "Testing & Commissioning",
      date: "2024-05-15",
      status: "pending",
      dotColor: "#d1d5db", // gray-300
      badgeBg: "#fef9c3", // yellow-100
      badgeText: "#ca8a04", // yellow-600
    },
    {
      title: "Final Delivery",
      date: "2024-06-30",
      status: "pending",
      dotColor: "#d1d5db",
      badgeBg: "#fef9c3",
      badgeText: "#ca8a04",
    },
  ];
  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: "#F9FAFB" }}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 transition-colors"
              style={{ color: "#4B5563" }}
              onClick={() => navigate("/projects")}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-sm font-medium">Back to Projects</span>
            </button>
          </div>
          <div
            className="px-3 py-1 rounded-full text-sm font-medium"
            style={{ backgroundColor: "#DBEAFE", color: "#1E40AF" }}
          >
            In Progress
          </div>
        </div>

        {/* Project Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2" style={{ color: "#111827" }}>
            Smart Building Automation - Tech Center
          </h1>
          <p style={{ color: "#4B5563" }}>TechCorp Industries</p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Progress Card */}
          <div
            className="rounded-lg p-6 shadow-sm"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E5E7EB",
              borderWidth: "1px",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#DBEAFE" }}
              >
                <Clock className="w-5 h-5" style={{ color: "#2563EB" }} />
              </div>
            </div>
            <div className="text-sm mb-1" style={{ color: "#4B5563" }}>
              Progress
            </div>
            <div className="text-2xl font-bold" style={{ color: "#111827" }}>
              65%
            </div>
          </div>

          {/* Project Value Card */}
          <div
            className="rounded-lg p-6 shadow-sm"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E5E7EB",
              borderWidth: "1px",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#D1FAE5" }}
              >
                <DollarSign className="w-5 h-5" style={{ color: "#059669" }} />
              </div>
            </div>
            <div className="text-sm mb-1" style={{ color: "#4B5563" }}>
              Project Value
            </div>
            <div className="text-2xl font-bold" style={{ color: "#111827" }}>
              $125,000
            </div>
          </div>

          {/* Team Size Card */}
          <div
            className="rounded-lg p-6 shadow-sm"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E5E7EB",
              borderWidth: "1px",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#EDE9FE" }}
              >
                <Users className="w-5 h-5" style={{ color: "#7C3AED" }} />
              </div>
            </div>
            <div className="text-sm mb-1" style={{ color: "#4B5563" }}>
              Team Size
            </div>
            <div className="text-2xl font-bold" style={{ color: "#111827" }}>
              3
            </div>
          </div>

          {/* End Date Card */}
          <div
            className="rounded-lg p-6 shadow-sm"
            style={{
              backgroundColor: "#FFFFFF",
              borderColor: "#E5E7EB",
              borderWidth: "1px",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "#FFEDD5" }}
              >
                <Calendar className="w-5 h-5" style={{ color: "#EA580C" }} />
              </div>
            </div>
            <div className="text-sm mb-1" style={{ color: "#4B5563" }}>
              End Date
            </div>
            <div className="text-2xl font-bold" style={{ color: "#111827" }}>
              2024-06-30
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div
          className="mb-8"
          style={{ borderBottomWidth: "1px", borderBottomColor: "#E5E7EB" }}
        >
          <nav className="flex justify-between px-8 space-x-8 w-full">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 flex justify-center px-1 border-b-2 font-medium text-sm transition-colors`}
                style={{
                  borderBottomColor:
                    activeTab === tab ? "#3B82F6" : "transparent",
                  color: activeTab === tab ? "#2563EB" : "#6B7280",
                }}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Content Area */}
        {activeTab === "Overview" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Project Description */}
            <div className="lg:col-span-2">
              <div
                className="rounded-lg p-6 shadow-sm"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E5E7EB",
                  borderWidth: "1px",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-5 h-5" style={{ color: "#4B5563" }} />
                  <h2
                    className="text-lg font-semibold"
                    style={{ color: "#111827" }}
                  >
                    Project Description
                  </h2>
                </div>
                <p className="leading-relaxed" style={{ color: "#374151" }}>
                  Complete smart building automation system implementation
                  including IoT sensors, HVAC control, lighting automation, and
                  security integration.
                </p>
              </div>
            </div>

            {/* Project Details */}
            <div className="lg:col-span-1">
              <div
                className="rounded-lg p-6 shadow-sm"
                style={{
                  backgroundColor: "#FFFFFF",
                  borderColor: "#E5E7EB",
                  borderWidth: "1px",
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-5 h-5" style={{ color: "#4B5563" }} />
                  <h2
                    className="text-lg font-semibold"
                    style={{ color: "#111827" }}
                  >
                    Project Details
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm mb-1" style={{ color: "#4B5563" }}>
                      Location
                    </div>
                    <div className="font-medium" style={{ color: "#111827" }}>
                      San Francisco, CA
                    </div>
                  </div>
                  <div>
                    <div className="text-sm mb-1" style={{ color: "#4B5563" }}>
                      Start Date
                    </div>
                    <div className="font-medium" style={{ color: "#111827" }}>
                      2024-01-15
                    </div>
                  </div>
                  <div>
                    <div className="text-sm mb-1" style={{ color: "#4B5563" }}>
                      Project ID
                    </div>
                    <div className="font-medium" style={{ color: "#111827" }}>
                      PRJ-001
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other tab content placeholders */}
        {activeTab === "Team" && (
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:rf:-trigger-team"
            id="radix-:rf:-content-team"
            className="mt-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#60A5FA] focus-visible:ring-offset-2 space-y-6"
            style={{ backgroundColor: "transparent" }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { initials: "JD", name: "John Doe", title: "Project Manager" },
                {
                  initials: "SM",
                  name: "Sarah Miller",
                  title: "Lead Engineer",
                },
                {
                  initials: "MR",
                  name: "Mike Rodriguez",
                  title: "Installation Specialist",
                },
              ].map((member, index) => (
                <div
                  key={index}
                  className="rounded-lg border-0 shadow-md"
                  style={{
                    backgroundColor: "#F9FAFBCC", // 80% white using hex+opacity
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <div className="p-6">
                    <div className="flex items-center gap-4">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center font-medium"
                        style={{
                          background:
                            "linear-gradient(to bottom right, #60A5FA, #A78BFA)",
                          color: "#FFFFFF",
                        }}
                      >
                        {member.initials}
                      </div>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ color: "#1F2937" }}
                        >
                          {member.name}
                        </h3>
                        <p className="text-sm" style={{ color: "#4B5563" }}>
                          {member.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "Orders" && (
          <div
            data-state="active"
            data-orientation="horizontal"
            role="tabpanel"
            aria-labelledby="radix-:rf:-trigger-orders"
            id="radix-:rf:-content-orders"
            tabIndex={0}
            className="mt-2 space-y-6"
          >
            <div className="space-y-4">
              {/* Order 1 - Delivered */}
              <div
                className="rounded-lg border-0 shadow-md"
                style={{
                  backgroundColor: "#FFFFFFCC",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8"
                      >
                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                        <path d="M12 22V12" />
                        <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
                        <path d="m7.5 4.27 9 5.15" />
                      </svg>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ color: "#1F2937" }}
                        >
                          ORD-001
                        </h3>
                        <p style={{ color: "#4B5563" }}>IoT Sensors (50x)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        style={{
                          backgroundColor: "#D1FAE5",
                          color: "#16A34A",
                          borderColor: "transparent",
                        }}
                      >
                        Delivered
                      </div>
                      <p
                        className="text-lg font-semibold mt-1"
                        style={{ color: "#1F2937" }}
                      >
                        $15,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order 2 - In Transit */}
              <div
                className="rounded-lg border-0 shadow-md"
                style={{
                  backgroundColor: "#FFFFFFCC",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8"
                      >
                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                        <path d="M12 22V12" />
                        <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
                        <path d="m7.5 4.27 9 5.15" />
                      </svg>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ color: "#1F2937" }}
                        >
                          ORD-002
                        </h3>
                        <p style={{ color: "#4B5563" }}>
                          HVAC Controllers (8x)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        style={{
                          backgroundColor: "#DBEAFE",
                          color: "#2563EB",
                          borderColor: "transparent",
                        }}
                      >
                        In Transit
                      </div>
                      <p
                        className="text-lg font-semibold mt-1"
                        style={{ color: "#1F2937" }}
                      >
                        $25,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order 3 - Pending */}
              <div
                className="rounded-lg border-0 shadow-md"
                style={{
                  backgroundColor: "#FFFFFFCC",
                  backdropFilter: "blur(4px)",
                }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-8 h-8"
                      >
                        <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
                        <path d="M12 22V12" />
                        <path d="m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7" />
                        <path d="m7.5 4.27 9 5.15" />
                      </svg>
                      <div>
                        <h3
                          className="font-semibold"
                          style={{ color: "#1F2937" }}
                        >
                          ORD-003
                        </h3>
                        <p style={{ color: "#4B5563" }}>
                          Smart Switches (100x)
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                        style={{
                          backgroundColor: "#FEF9C3",
                          color: "#CA8A04",
                          borderColor: "transparent",
                        }}
                      >
                        Pending
                      </div>
                      <p
                        className="text-lg font-semibold mt-1"
                        style={{ color: "#1F2937" }}
                      >
                        $8,500
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Timeline" && (
          <div
            style={{
              marginTop: "0.5rem",
              padding: "1rem",
              borderRadius: "0.5rem",
              background: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(4px)",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
          >
            <div style={{ paddingBottom: "1rem" }}>
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 600,
                  letterSpacing: "-0.5px",
                  color: "#111827", // gray-900
                }}
              >
                Project Milestones
              </h3>
            </div>

            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              {milestones.map((milestone, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem",
                    borderRadius: "0.5rem",
                    backgroundColor: "#f9fafb", // gray-50
                    flexWrap: "wrap",
                  }}
                >
                  <div
                    style={{
                      width: "1rem",
                      height: "1rem",
                      borderRadius: "9999px",
                      backgroundColor: milestone.dotColor,
                      flexShrink: 0,
                    }}
                  ></div>

                  <div style={{ flex: "1 1 200px" }}>
                    <h4
                      style={{
                        fontWeight: 500,
                        margin: 0,
                        color: "#111827", // gray-900
                      }}
                    >
                      {milestone.title}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.875rem",
                        color: "#4b5563" /* gray-600 */,
                      }}
                    >
                      {milestone.date}
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: milestone.badgeBg,
                      color: milestone.badgeText,
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      borderRadius: "9999px",
                      padding: "0.25rem 0.75rem",
                      border: "1px solid transparent",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {milestone.status}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
