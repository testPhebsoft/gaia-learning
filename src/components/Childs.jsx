import React from 'react';
import LabelInput from './LabelInput';

const Childs = ({ count }) => {
  const childrenInputs = [];

  for (let i = 0; i < count; i++) {
    const childNumber = `${i + 1}`.padStart(2, '0');
    childrenInputs.push(
      <div key={i} className="mb-4">
        <h3 className="font-bold mb-2">Child {childNumber}</h3>
          <div className="  pt-5 pr-5 pb-5 pl-5 bg-[#F0F0F0] rounded>">
          <div className="flex gap-5">
            <LabelInput
              className="w-[226px]"
              type="text"
              label="First Name"
              id="fName"
              placeholder="enter their first name"
            />
            <LabelInput
              className="w-[226px]"
              type="text"
              label="Last Name"
              id="lName"
              placeholder="enter their last name"
            />
          </div>
          <LabelInput
          className="w-[474px]"
          type="text"
          label="Their email"
          id="email"
          placeholder="enter their email"
        />
          </div>
      </div>
    );
  }

  return <div>{childrenInputs}</div>;
};

export default Childs;