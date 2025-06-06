import type React from "react";

import { Download } from "lucide-react";

interface DownloadCardProps {
  title: string;
  description: string;
  size: string;
  icon: React.ElementType;
  color: string;
  onDownload: (title: string) => void;
}

export default function DownloadCard({
  title,
  description,
  size,
  icon: IconComponent,
  color,
  onDownload,
}: DownloadCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-[#E5E7EB]">
      <div className="flex items-start space-x-4 mb-4">
        <div
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}20` }}
        >
          <IconComponent className="w-6 h-6" style={{ color }} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-[#1F2937] mb-1">{title}</h3>
          <p className="text-[#1F2937] mb-1">{description}</p>
          <div className="flex items-center justify-between">
            <span className="text-[#6B7280] text-sm border border-[#30d3b4] rounded-full px-3 py-1">
              Downloads
            </span>
            <span className="text-[#6B7280] text-sm font-medium">{size}</span>
          </div>
        </div>
      </div>
      <button
        onClick={() => onDownload(title)}
        className="w-full bg-[#30d3b4] text-white font-semibold py-3 rounded-lg hover:bg-[#30d3b4] transition-colors flex items-center justify-center space-x-2"
      >
        <Download className="w-4 h-4" />
        <span>Download</span>
      </button>
    </div>
  );
}
