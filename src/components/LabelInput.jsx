import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

const LabelInput = ({ label, type, id, className, placeholder }) => {
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState('');

  const validateInput = (value) => {
    if(!value.trim())
      return 'This field is required';
    return '';
  }

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    setError(validateInput(value));
  }

  const handleBlur = () => {
    setError(validateInput(inputValue));
  }

  return (
    <div>
      <Label className={className}>{label}</Label>
      <div className=" mb-2">
        <Input
          className={className}
          type={type}
          id={id}
          placeholder={placeholder}
          value = {inputValue}
          onChange = {handleChange}
          onBlur = {handleBlur}
        />
      </div>
      {error && <p className="text-red-500 text-xs italic">{error}</p>}
    </div>
  );
};

export default LabelInput;
