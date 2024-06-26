import React from "react";

const GaiaButton = ({ text, onClick, isActive }) => {
  return (
    <div
      className={`cursor-pointer rounded-md px-12 py-2 font-small ${
        isActive
          ? "bg-white text-teal-600 shadow-md"
          : "bg-gray-200 text-gray-500"
      }`}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default GaiaButton;
