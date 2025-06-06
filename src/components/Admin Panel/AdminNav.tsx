"use client";

export default function AdminNav({ activeTab, setActiveTab, tabs }) {
  return (
    <div className="bg-[#30d3b4] rounded-xl p-2 mb-8">
      <div className="flex space-x-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 py-3 px-6 rounded-lg font-semibold transition-colors ${
              activeTab === tab
                ? "bg-white text-[#1F2937] shadow-sm"
                : "text-white hover:bg-[#8E24AA]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}
