export function Button({
  children,
  onClick,
  disabled = false,
  variant = "default",
  className = "",
  type = "button",
  ...props
}) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-[#FFFFFF]";

  const variants = {
    default: "bg-[#3B82F6] text-[#FFFFFF] hover:bg-[#2563EB]",
    outline:
      "border border-[#D1D5DB] bg-[#FFFFFF] text-[#111827] hover:bg-[#F9FAFB]",
    ghost: "hover:bg-[#F3F4F6] text-[#111827]",
  };

  const sizes = "h-10 py-2 px-4";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variants[variant]} ${sizes} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
