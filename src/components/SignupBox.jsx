"use client";

import React, { Children, useState } from "react";
// import { useClient } from "next/client";
import LabelInput from "./LabelInput";
import { Button } from "./ui/button";
import IncDecBtn from "./IncDecBtn";
import Childs from "./Childs";

export default function SingupBox() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <div className=" text-center flex flex-col items-center pl-[70px]">
        <img className="h-[97.66px] w-[97.66px]" src="/galaLogo.svg" alt="" />

        <div>
          <h1 className=" font-bold text-[30px]">SIGN UP</h1>
          <p className="text-[#6B6866]">
            Welcome to our platform! This is the sign-up form for parents
          </p>
        </div>
        <div className=" text-left">
          <LabelInput
            className="lg:w-[500px] md:w-[300px] sm:w-[200px]"
            type="text"
            label="Email"
            id="email"
            placeholder="Enter Your Email"
          />
          <LabelInput
            className="w-[500px]"
            type="text"
            label="Password"
            id="Password"
            placeholder="Enter Your Password"
          />
          <LabelInput
            className="w-[500px]"
            type="text"
            label="Full Name"
            id="FullName"
            placeholder="Enter Your Full Name"
          />
          <LabelInput
            className="w-[500px]"
            type="date"
            label="Full Name"
            id="FullName"
            placeholder="Enter Your Full Name"
          />

          <div className="flex">
            <p>How Many Children do you have?</p>

            <IncDecBtn
              value={count}
              onIncrement={increment}
              onDecrement={decrement}
            />
          </div>
          <Childs />
        </div>
       <div className="flex mt-2">
        <input type="checkbox" />
        <p>By creating new account, I accept  the Terms & Conditions of Gaia</p>
        </div>

        <Button className="w-full mt-5 bg-[#1099A0] rounded-[32px] h-[48px]">
          Sign Up
        </Button>


      </div>

      <div></div>
    </>
  );
}
