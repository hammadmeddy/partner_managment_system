import React from "react";

const DynamicComponent = ({ type, onClick, name }) => {
  const baseStyles =
    "px-3 py-2.5 text-sm font-bold text-sm rounded-lg bg-[#1D89E4]";
  //const activeStyles = isActive ? "bg-green-600 text-white" : "bg-red-600 text-white";

  return (
    <button onClick={onClick} className={`${baseStyles}`} type={type}>
      {name}
    </button>
  );
};

export default DynamicComponent;
