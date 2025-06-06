import React from "react";
import { Link } from "react-router-dom";

const DashboardCards = () => {
  const topCards = [
    {
      title: "Manufacturer",
      description:
        "Manage product lines, distributors, and partner relationships",
      icon: "🏢",
      gradientBg: "linear-gradient(to bottom right, #DBEAFE, #BFDBFE)",
      textColor: "black",
      link: "/manufacturerdashboard",
    },
    {
      title: "Distributor",
      description: "Handle inventory, orders, and partner support",
      icon: "📊",
      gradientBg: "linear-gradient(to bottom right, #D1FAE5, #A7F3D0)",
      textColor: "black",
      link: "/distributordashboard",
    },
    {
      title: "Partners",
      description: "Access projects, orders, and rebate tracking",
      icon: "👥",
      gradientBg: "linear-gradient(to bottom right, #E9D5FF, #C4B5FD)",
      textColor: "black",
      link: "/partnerdashboard",
    },
    {
      title: "Support Staff",
      description: "Provide technical assistance and case management",
      icon: "⚙️",
      gradientBg: "linear-gradient(to bottom right, #FFEDD5, #FDBA74)",
      textColor: "black",
      link: "/support-dashboard",
    },
    {
      title: "Administrator",
      description: "Manage users, settings, and system configuration",
      icon: "📅",
      gradientBg: "linear-gradient(to bottom right, #FCE7F3, #F9A8D4)",
      textColor: "black",
      link: "/administratordashboard",
    },
  ];

  const bottomCards = [
    {
      title: "Project Management",
      description:
        "Track projects from initiation to completion with timeline views, milestone tracking, and collaborative tools.",
      icon: "🏢",
      bgColor: "#DBEAFE",
    },
    {
      title: "Order Processing",
      description:
        "Streamlined ordering with real-time inventory, ETA tracking, and automated workflow management.",
      icon: "📊",
      bgColor: "#D1FAE5",
    },
    {
      title: "Partner Network",
      description:
        "Connect with verified partners, track certifications, and access exclusive resources and rewards.",
      icon: "👥",
      bgColor: "#E9D5FF",
    },
  ];

  return (
    <div className="p-6 mt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {topCards.map((card, index) => (
          <Link to={card.link} key={index}>
            <div
              style={{ background: card.gradientBg }}
              className="p-4 py-12 space-y-1.5 rounded-2xl shadow-md flex flex-col items-center transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer"
            >
              <div
                style={{
                  color: card.textColor,
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                }}
                className="text-3xl rounded-full p-4 mb-4"
              >
                {card.icon}
              </div>
              <h3
                className="font-bold text-lg mb-2"
                style={{ color: card.textColor }}
              >
                {card.title}
              </h3>
              <p
                className="text-sm text-center"
                style={{ color: card.textColor }}
              >
                {card.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {bottomCards.map((card, index) => (
          <Link to={card.link} key={index}>
            {/* Wrap card in Link */}
            <div className="p-6 rounded-2xl shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2 cursor-pointer">
              <div className="flex gap-3 items-center mb-4">
                <div
                  style={{
                    backgroundColor: card.bgColor,
                  }}
                  className="text-3xl rounded-xl p-2"
                >
                  {card.icon}
                </div>
                <h3 className="font-bold text-black text-lg mb-2">
                  {card.title}
                </h3>
              </div>
              <p className="text-sm text-black">{card.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DashboardCards;
