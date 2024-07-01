// Child.js
import React, { useState } from "react";
import LabelInput from "./LabelInput";

const Child = ({ count, onChildDataChange }) => {
  const [childrenData, setChildrenData] = useState([]);

  const handleInputChange = (index, field, value) => {
    const newChildrenData = [...childrenData];
    newChildrenData[index] = {
      ...newChildrenData[index],
      [field]: value,
    };
    setChildrenData(newChildrenData);
    onChildDataChange(newChildrenData);
  };

  const childrenInputs = [];

  for (let i = 0; i < count; i++) {
    const childNumber = `${i + 1}`.padStart(2, "0");
    childrenInputs.push(
      <div key={i} className="mb-4">
        <h3 className="font-bold mb-2">Child {childNumber}</h3>
        <div className="pt-5 pr-5 pb-5 pl-5 bg-[#F0F0F0] rounded">
          <div className="flex gap-5">
            <LabelInput
              className="w-[226px]"
              type="text"
              label="First Name"
              id={`fName${i}`}
              placeholder="enter their first name"
              onChange={(e) =>
                handleInputChange(i, "firstName", e.target.value)
              }
            />
            <LabelInput
              className="w-[226px]"
              type="text"
              label="Last Name"
              id={`lName${i}`}
              placeholder="enter their last name"
              onChange={(e) => handleInputChange(i, "lastName", e.target.value)}
            />
          </div>
          <LabelInput
            className="w-[474px]"
            type="text"
            label="Their email"
            id={`email${i}`}
            placeholder="enter their email"
            onChange={(e) => handleInputChange(i, "email", e.target.value)}
          />
        </div>
      </div>
    );
  }

  return <div>{childrenInputs}</div>;
};

export default Child;
