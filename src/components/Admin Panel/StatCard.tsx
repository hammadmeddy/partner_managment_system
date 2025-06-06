"use client";

export default function StatCard({
  title,
  value,
  subtitle,
  icon,
  iconColor,
  iconBg,
}) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[#6B7280] text-sm font-medium mb-1">{title}</p>
          <p className="text-3xl font-bold text-[#1F2937]">{value}</p>
        </div>
        <div className="p-3 rounded-lg" style={{ backgroundColor: iconBg }}>
          <div className="w-6 h-6" style={{ color: iconColor }}>
            {icon}
          </div>
        </div>
      </div>
      <p
        className="text-sm"
        style={{ color: subtitle.includes("+") ? "#10B981" : "#6B7280" }}
      >
        {subtitle}
      </p>
    </div>
  );
}
