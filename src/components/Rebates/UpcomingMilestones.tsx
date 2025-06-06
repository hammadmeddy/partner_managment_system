import React from "react";

const UpcomingMilestones = () => {
  const milestones = [
    {
      title: "Silver Tier Bonus",
      subtitle: "$200,000 in sales",
      progress: 94,
      bonus: "$10,000 bonus",
      daysLeft: "15 days left",
      daysColor: "#EF4444",
    },
    {
      title: "Volume Bonus",
      subtitle: "50 orders this quarter",
      progress: 76,
      bonus: "$2,500 bonus",
      daysLeft: "30 days left",
      daysColor: "#3B82F6",
    },
    {
      title: "New Partner Referral",
      subtitle: "Refer 2 new partners",
      progress: 50,
      bonus: "$5,000 bonus",
      daysLeft: "45 days left",
      daysColor: "#3B82F6",
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 space-y-6 gap-6">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-[#1A1A1A]">
          Upcoming Milestones
        </h2>

        {milestones.map((milestone, index) => (
          <div
            key={index}
            className="bg-[#FFFFFF] border border-[#E5E7EB] rounded-xl p-6 shadow-sm"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-bold text-[#1A1A1A]">
                  {milestone.title}
                </h3>
                <p className="text-[#6B7280]">{milestone.subtitle}</p>
              </div>
              <span
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  color: milestone.daysColor,
                  backgroundColor: `${milestone.daysColor}20`,
                }}
              >
                {milestone.daysLeft}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[#6B7280]">Progress</span>
                <span className="font-bold text-#1A1A1A">
                  {milestone.progress}%
                </span>
              </div>
              <div className="w-full bg-[#F3F4F6] rounded-full h-2">
                <div
                  className="bg-[#FFFF00] h-2 rounded-full"
                  style={{ width: `${milestone.progress}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-[#10B981] font-bold text-lg">
                {milestone.bonus}
              </span>
              <button className="bg-[#FFFF00] text-[#1A1A1A] px-6 py-2 rounded-xl font-medium hover:bg-[#F0F000] transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpcomingMilestones;
