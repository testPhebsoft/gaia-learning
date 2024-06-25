"use client";

import React from "react";
import Link from "next/link";
import LabelInput from "./LabelInput";
import { Button } from "./ui/button";

const SigninBox = () => {
  return (
    <>
      <div className=" text-center flex flex-col items-center pl-[70px]">
        <img className="h-[97.66px] w-[97.66px]" src="/gaiaLogo.svg" alt="" />

        <div>
          <h1 className=" font-bold text-[30px]">SIGN IN</h1>
          <p className="text-[#6B6866]">Enter your email below to login</p>
        </div>
        <div className=" text-left">
          <LabelInput
            className="lg:w-[500px] md:w-[300px] sm:w-[200px]"
            type="email"
            label="Email"
            id="email"
            placeholder="Enter Your Email"
          />
          <LabelInput
            className="w-[500px]"
            type="password"
            label="Password"
            id="Password"
            placeholder="Enter Your Password"
          />

          <div className="flex justify-end">
            <Link href="/forgotpass">
              <p className="text-right mt-5 text-gray-500">Forgot Password?</p>
            </Link>
          </div>
        </div>

        <Link href="/gaialearn" className="block w-full mt-5">
          <Button className="w-full mt-5 bg-[#1099A0] rounded-[32px] h-[48px]">
            Sign In
          </Button>
        </Link>
      </div>

      <div></div>
    </>
  );
};

export default SigninBox;
