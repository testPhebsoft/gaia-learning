import React from "react";

const GaiaButton = ({ text, onClick, isActive }) => {
  return (
    <div
      className={`cursor-pointer rounded-md px-2 py-2 ${
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
