import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

const LabelInput = ({
  label = "",
  type = "text",
  id = "",
  className = "",
  placeholder = "",
  disabled = false,
  inputClass = "",
  value = ""
}) => {
  const [inputValue, setInputValue] = useState(value);
  const [error, setError] = useState('');

  const validateInput = (value) => {
    if (!value.trim()) return 'This field is required';
    return '';
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setError(validateInput(value));
  };

  const handleBlur = () => {
    setError(validateInput(inputValue));
  };

  return (
    <div>
      <Label className={className}>{label}</Label>
      <div className="mb-2">
        {disabled ? (
          <div className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium",
            className,
            inputClass,
            "text-gray-500 font-medium" 
          )}>
            {inputValue}
          </div>
        ) : (
          <Input
            className={className}
            type={type}
            id={id}
            placeholder={placeholder}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            disabled={disabled}
          />
        )}
      </div>
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default LabelInput;
