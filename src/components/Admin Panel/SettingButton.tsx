"use client";

export default function SettingsButton({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#30d3b4] text-white font-semibold py-4 px-6 rounded-lg hover:bg-[#E6E600] transition-colors mb-4"
    >
      {title}
    </button>
  );
}
