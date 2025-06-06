export default function ContactCard({
  icon: Icon,
  iconColor,
  iconBgColor,
  title,
  description,
  details,
  buttonText,
  onButtonClick,
}) {
  return (
    <div className="flex flex-col items-start justify-start p-6 bg-[#FFFFFF] rounded-lg shadow-md">
      <div
        className=" w-12 h-12 rounded-full"
        style={{ backgroundColor: iconBgColor }}
      >
        <Icon className="w-6 h-6" style={{ color: iconColor }} />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#2D3748]">{title}</h3>
      <p className="mt-2 text-sm text-[#718096]">{description}</p>
      {details}
      <button
        className="mt-4 px-4 py-2 bg-[#3B82F6] text-[#FFFFFF] rounded-lg hover:bg-[#2563EB] transition"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}
