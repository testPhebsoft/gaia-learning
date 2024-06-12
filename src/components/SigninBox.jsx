import React from "react";
import LabelInput from "./LabelInput";
import { Button } from "./ui/button";

const SigninBox = () => {
  return (
    <>
      <div className=" text-center flex flex-col items-center">
        <img className="h-[97.66px] w-[97.66px]" src="/galaLogo.svg" alt="" />

        <div>
          <h1 className=" font-bold text-[30px]">SIGN IN</h1>
          <p className="text-[#6B6866]">Enter your email below to login</p>
        </div>
        <div className=" text-left">
          <LabelInput className="w-[500px]" type="text" label="Email" id="email" />
          <LabelInput  className="w-[500px]" type="text" label="Password" id="Password" />
          <p className="text-right mt-5">Forgot Password?</p>
        </div>

      <Button className="w-full mt-5 bg-[#1099A0] rounded-[32px] h-[48px]">Sign In</Button>
      </div>

      <div></div>
    </>
  );
};

export default SigninBox;
