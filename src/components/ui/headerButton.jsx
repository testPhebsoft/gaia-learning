import React from "react";
import Link from "next/link";

const HeaderButton = ({
  text,
  goTo,
  isDropdown,
  options = [],
  optionLinks = [],
  current,
}) => {
  const isActive = current === text;

  return (
    <div className="relative inline-block">
      {!isDropdown ? (
        <Link href={goTo}>
          <div
            className={`px-4 py-2 cursor-pointer font-bold ${
              isActive ? "text-teal-600" : "text-black hover:text-teal-600"
            }`}
          >
            {text}
          </div>
        </Link>
      ) : (
        <div className="relative inline-block text-left group">
          <button
            className={`inline-flex items-center px-4 py-2 font-bold ${
              isActive ? "text-teal-600" : "text-black hover:text-teal-600"
            }`}
          >
            {text}
            <svg
              className="w-5 h-5 ml-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {options.length > 0 && (
            <div className="absolute right-0 w-56 mt-2 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
              <div className="py-1">
                {options.map((option, index) => (
                  <Link key={index} href={optionLinks[index]}>
                    <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                      {option}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeaderButton;
