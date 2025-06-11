import React from "react";

const orders = [
  {
    orderId: "ORD-2024-001",
    company: "TechCorp Industries",
    items: "Industrial IoT Sensors (50x), Gateway Hub (5x)",
    orderDate: "2024-01-20",
    deliveryDate: "2024-02-15",
    total: "$12,450.00",
    status: "Processing",
    statusColor: "#3b82f6", // Blue
    buttonColor: "#facc15", // Yellow
  },
  {
    orderId: "ORD-2024-002",
    company: "AutoMate Solutions",
    items: "Smart Controllers (25x), Cables & Accessories",
    orderDate: "2024-01-18",
    deliveryDate: "2024-02-10",
    total: "$8,920.00",
    status: "Shipped",
    statusColor: "#8b5cf6", // Purple
    buttonColor: "#facc15", // Yellow
  },
  {
    orderId: "ORD-2024-003",
    company: "InnovateLab",
    items: "Wireless Modules (100x), Development Kit (3x)",
    orderDate: "2024-01-10",
    deliveryDate: "2024-01-25",
    total: "$15,680.00",
    status: "Delivered",
    statusColor: "#22c55e", // Green
    buttonColor: "#facc15", // Yellow
  },
  {
    orderId: "ORD-2024-004",
    company: "DataFlow Corp",
    items: "Edge Computing Units (10x), Storage Arrays (2x)",
    orderDate: "2024-01-22",
    deliveryDate: "2024-03-01",
    total: "$24,750.00",
    status: "Pending",
    statusColor: "#f97316", // Orange
    buttonColor: "#facc15", // Yellow
  },
];

const RecentOrders = () => {
  return (
    <div className="max-w-6xl w-full mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
          Recent Orders
        </h2>

        {/* Search Bar */}
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Search orders..."
            className="w-full p-3 pl-12 text-[#374151] border border-[#d1d5db] rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3b82f6]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#9ca3af"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </div>
      </div>

      {/* Order Cards */}
      <div className="space-y-6">
        {orders.map((order, index) => (
          <div
            key={index}
            className="bg-[#ffffff] p-6 shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 cursor-pointer rounded-2xl flex justify-between items-start"
          >
            <div>
              <h3 className="text-lg font-bold text-[#1f2937]">
                {order.orderId}
              </h3>
              <p className="text-sm text-[#6b7280]">{order.company}</p>
              <p className="text-sm text-[#6b7280] mt-2">{order.items}</p>
              <div className="flex items-center mt-4 space-x-64">
                <p className="text-sm text-[#6b7280] flex flex-col">
                  <span>
                    <strong>Order Date:</strong>
                  </span>
                  <span>{order.orderDate}</span>
                </p>
                <p className="text-sm text-[#6b7280] flex flex-col">
                  <span>
                    <strong>Est. Delivery:</strong>
                  </span>
                  <span>{order.deliveryDate}</span>
                </p>
              </div>
              <p className="text-xl font-bold text-[#1e293b] mt-4">
                {order.total}
              </p>
            </div>
            <div className="flex flex-col items-end">
              {/* Status */}
              <span
                className="text-sm font-medium px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${order.statusColor}33`,
                  color: order.statusColor,
                }}
              >
                {order.status}
              </span>

              {/* Track Order Button */}
              <button className="mt-28 px-6 py-2 bg-gradient-to-r from-[#3b82f6] to-[#9333ea] rounded-xl font-semibold text-white">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentOrders;
