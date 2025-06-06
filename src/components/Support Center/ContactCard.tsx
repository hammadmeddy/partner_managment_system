import type React from "react";

interface ContactCardProps {
  icon: React.ElementType;
  iconColor: string;
  iconBgColor: string;
  title: string;
  details: React.ReactNode;
  buttonText: string;
  onButtonClick: () => void;
}

export default function ContactCard({
  icon: IconComponent,
  iconColor,
  iconBgColor,
  title,
  description,
  details,
  buttonText,
  onButtonClick,
}: ContactCardProps) {
  return (
    <div className="bg-white rounded-xl p-8 shadow-sm border border-[#E5E7EB] ">
      <div
        className="p-4 rounded-full w-16 h-16 mb-4 flex items-start justify-start"
        style={{ backgroundColor: iconBgColor }}
      >
        <IconComponent className="w-8 h-8" style={{ color: iconColor }} />
      </div>
      <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{title}</h3>
      {description}
      {details}
      <button
        onClick={onButtonClick}
        className="w-full bg-[#FFFF00] text-white font-semibold py-3 rounded-lg hover:bg-[#E6E600] transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
}
