"use client";

import React, { useState } from "react";
import Link from "next/link";
import LabelInput from "./LabelInput";
import { Button } from "./ui/button";
import { Login } from '@/actions/Auth';

const SigninBox = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const handleLogin = async () => {
    if(email && password){
      console.log("handleLogin called.")
      let data = await Login(email, password);
      console.log("email", email, "pass", password)
      console.log("Values in signIn box:", data);
      setData(data);
  
      // redirect to gaialearn page after login
      if (data) {
        window.location.href = "/gaialearn";
      }
    }
  };


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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabelInput
            className="w-[500px]"
            type="password"
            label="Password"
            id="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="flex justify-end">
            <Link href="/forgotpass">
              <p className="text-right mt-5 text-gray-500">Forgot Password?</p>
            </Link>
          </div>
        </div>

          <Button 
            className="w-full mt-5 bg-[#1099A0] rounded-[32px] h-[48px]"
            onClick={ handleLogin }
            >
            Sign In
          </Button>
      </div>

      <div></div>
    </>
  );
};

export default SigninBox;
