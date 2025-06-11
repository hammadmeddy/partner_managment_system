"use client";

import type React from "react";

interface ContactCardProps {
  icon: React.ElementType;
  iconColor: string;
  iconBgColor: string;
  title: string;
  description: string;
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
    <div className="bg-white rounded-xl p-8 shadow-sm flex flex-col h-full border border-[#E5E7EB]">
      <div className="flex-grow">
        <div
          className="p-4 rounded-full w-16 h-16 mb-4 flex items-center justify-center"
          style={{ backgroundColor: iconBgColor }}
        >
          <IconComponent className="w-8 h-8" style={{ color: iconColor }} />
        </div>
        <h3 className="text-xl font-semibold text-[#1F2937] mb-2">{title}</h3>
        {description}
        {details}
      </div>
      <button
        onClick={onButtonClick}
        className="w-full mt-6 bg-gradient-to-r from-[#4299E1] to-[#9F7AEA] text-white font-semibold py-3 rounded-lg transition-colors"
      >
        {buttonText}
      </button>
    </div>
  );
}
