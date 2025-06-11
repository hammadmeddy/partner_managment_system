"use client";

import { useState } from "react";
import { Search, FileText, Wrench, Shield } from "lucide-react";
import DownloadCard from "./DownloadCard";

export default function Downloads() {
  const [searchQuery, setSearchQuery] = useState("");

  const downloads = [
    {
      title: "Installation Manual v2.1",
      description: "Complete installation guide for all products",
      size: "2.4 MB",
      icon: FileText,
      color: "#3B82F6",
    },
    {
      title: "Firmware Update 4.21",
      description: "Latest firmware with security improvements",
      size: "15.8 MB",
      icon: Wrench,
      color: "#10B981",
    },
    {
      title: "Safety Certificate 3",
      description: "UL, CE, and FCC certification documents",
      size: "890 KB",
      icon: Shield,
      color: "#8B5CF6",
    },
  ];

  const handleDownload = (title: string) => {
    console.log(`Downloading ${title}`);
    // Implement download logic here
  };

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black w-5 h-5" />
        <input
          type="text"
          placeholder="Search downloads..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full bg-white text-black placeholder-black px-12 py-4 rounded-xl text-lg font-sm"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {downloads.map((item, index) => (
          <DownloadCard
            key={index}
            title={item.title}
            description={item.description}
            size={item.size}
            icon={item.icon}
            color={item.color}
            onDownload={handleDownload}
          />
        ))}
      </div>
    </div>
  );
}
