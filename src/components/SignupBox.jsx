"use client";

import React, { useState } from "react";
import Link from "next/link";
import LabelInput from "./LabelInput";
import { Button } from "./ui/button";
import IncDecBtn from "./IncDecBtn";
import Child from "./Child";
import TermsConditions from "./TermsConditions";

export default function SingupBox() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className=" text-center flex flex-col items-center pl-[70px]">
        <img className="h-[97.66px] w-[97.66px]" src="/gaiaLogo.svg" alt="" />

        <div>
          <h1 className=" font-bold text-[30px]">SIGN UP</h1>
          <p className="text-[#6B6866]">
            Welcome to our platform! This is the sign-up form for parents
          </p>
        </div>
        <div className=" text-left">
          <LabelInput
            className="lg:w-[500px] md:w-[300px] sm:w-[200px]"
            type="email"
            label="Your email"
            id="email"
            placeholder="enter your email"
          />
          <LabelInput
            className="w-[500px]"
            type="password"
            label="Password"
            id="Password"
            placeholder="enter your password"
          />
          <LabelInput
            className="w-[500px]"
            type="text"
            label="Full Name"
            id="FullName"
            placeholder="enter your fullname"
          />
          <LabelInput
            className="w-[500px]"
            type="date"
            label="Date of Birth"
            id="DoB"
            placeholder="Select"
          />

          <div className="flex justify-between mt-4">
            <p className="mr-4">How Many Children do you have?</p>

            <IncDecBtn
              value={count}
              onIncrement={increment}
              onDecrement={decrement}
            />
          </div>
          <Child count={count} />
        </div>
        <div className="flex mt-2">
          <input type="checkbox" className="mr-4" />
          <p>
            By creating a new account, I accept the{" "}
            <span className="cursor-pointer" onClick={openModal}>
              <u>Terms & Conditions</u>
            </span>{" "}
            of Gaia
          </p>
        </div>

        <Link href="/signin" className="block w-full mt-5">
          <Button className="w-full mt-5 bg-[#1099A0] rounded-[32px] h-[48px]">
            Sign Up
          </Button>
        </Link>

        <p className="mt-3">
          Already have an account?{" "}
          <Link href="/signin">
            <span>
              <b>Sign in!</b>
            </span>
          </Link>
        </p>

        <TermsConditions isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </>
  );
}
