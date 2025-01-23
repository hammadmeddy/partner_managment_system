import React from "react";

const DynamicButton = ({
  type,
  name,
  className = "",
  children,
  onClick,
  disabled,
}) => {
  const baseStyles =
    "px-3 py-2.5 text-sm font-bold text-sm rounded-lg bg-[#1D89E4]";
  //const activeStyles = isActive ? "bg-green-600 text-white" : "bg-red-600 text-white";

  return (
    <button
      className={`${baseStyles} ${className} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      }`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children || name}
    </button>
  );
};

export default DynamicButton;
