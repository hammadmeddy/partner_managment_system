const activities = [
  {
    id: 1,
    title: "New order received",
    time: "2 minutes ago",
    color: "#3B82F6", // Blue
  },
  {
    id: 2,
    title: "Project milestone completed",
    time: "1 hour ago",
    color: "#10B981", // Green
  },
  {
    id: 3,
    title: "Partner tier upgraded",
    time: "3 hours ago",
    color: "#8B5CF6", // Purple
  },
  {
    id: 4,
    title: "Support ticket resolved",
    time: "5 hours ago",
    color: "#F59E0B", // Orange
  },
];

const RecentActivity = () => {
  return (
    <div className="w-full lg:max-w-md">
      <div className="bg-white w-full rounded-xl p-6 shadow-md">
        <h2 className="text-xl font-semibold text-[#1E293B] mb-6">
          Recent Activity
        </h2>

        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-3">
              <div
                className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                style={{ backgroundColor: activity.color }}
              />
              <div className="flex-1">
                <p className="text-[#1E293B] font-semibold text-sm leading-relaxed">
                  {activity.title}
                </p>
                <p className="text-[#64748B] text-sm mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default RecentActivity;
