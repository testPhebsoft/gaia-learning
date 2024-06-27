import React, { useState } from "react";
import { Label } from "./ui/label";
import { cn } from "@/lib/utils";

const LabelInput = ({
  label = "",
  type = "text",
  id = "",
  className = "",
  placeholder = "",
  disabled = false,
  inputClass = "",
  value = "",
  labelClass = "",
  options = []  // New prop for radio options
}) => {
  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  return (
    <div>
      <Label className={`${className} ${labelClass}`}>{label}</Label>
      <div className="mb-2">
        {type === "radio-button" ? (
          <div className="flex flex-col gap-4">
            {options.map((option, index) => (
              <label key={index} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name={id}
                  value={option.value}
                  checked={inputValue === option.value}
                  onChange={handleChange}
                  className="hidden"
                />
                <span className="custom-radio">
                  <img 
                    src={inputValue === option.value ? "/checked.svg" : "/unchecked.svg"} 
                    alt="radio button" 
                    className="w-6 h-6"
                  />
                </span>
                <img src={option.img} alt={option.text} className="w-10 h-10 shadow-lg" />
                <span className="body-16">{option.text}</span>
                <img src={option.emoji1} alt={`${option.text} emoji 1`} className="w-8 h-8" />
                <img src={option.emoji2} alt={`${option.text} emoji 2`} className="w-8 h-8" />
              </label>
            ))}
          </div>
        ) : (
          disabled ? (
            <div
              className={cn(
                "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium",
                className,
                inputClass,
                "text-gray-500 font-medium"
              )}
            >
              {inputValue}
            </div>
          ) : (
            <input
              className={`${className} ${inputClass}`}
              type={type}
              id={id}
              placeholder={placeholder}
              value={inputValue}
              onChange={handleChange}
              disabled={disabled}
            />
          )
        )}
      </div>
    </div>
  );
};

export default LabelInput;
