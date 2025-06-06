import { Users, Clock, Shield, Activity } from "lucide-react";
import StatCard from "./StatCard";

export default function StatsSection() {
  const stats = [
    {
      title: "Total Users",
      value: "2,847",
      subtitle: "+12% from last month",
      icon: <Users />,
      iconColor: "#3B82F6",
      iconBg: "#3B82F620",
    },
    {
      title: "Pending Approvals",
      value: "23",
      subtitle: "5 new today",
      icon: <Clock />,
      iconColor: "#F59E0B",
      iconBg: "#F59E0B20",
    },
    {
      title: "Active Partners",
      value: "456",
      subtitle: "+8% from last month",
      icon: <Shield />,
      iconColor: "#10B981",
      iconBg: "#10B98120",
    },
    {
      title: "System Health",
      value: "99.8%",
      subtitle: "All systems operational",
      icon: <Activity />,
      iconColor: "#8B5CF6",
      iconBg: "#8B5CF620",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          subtitle={stat.subtitle}
          icon={stat.icon}
          iconColor={stat.iconColor}
          iconBg={stat.iconBg}
        />
      ))}
    </div>
  );
}
