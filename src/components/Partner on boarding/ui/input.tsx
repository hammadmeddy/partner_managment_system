export function Input({
  className = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange,
  id,
  disabled = false,
  ...props
}) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      disabled={disabled}
      className={`flex h-10 w-full rounded-md border border-[#D1D5DB] bg-[#FFFFFF] px-3 py-2 text-sm ring-offset-[#FFFFFF] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#6B7280] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3B82F6] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    />
  );
}
