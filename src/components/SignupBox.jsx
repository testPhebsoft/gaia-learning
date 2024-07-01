"use client";

// SignupBox.js
import React, { useState } from "react";
import Link from "next/link";
import LabelInput from "./LabelInput";
import { Button } from "./ui/button";
import IncDecBtn from "./IncDecBtn";
import Child from "./Child";
import TermsConditions from "./TermsConditions";
import { useRouter } from 'next/navigation';

const SignupBox = () => {
  const router = useRouter();
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
    dob: "",
    termsAccepted: false,
    children: [],
  });

  const increment = () => {
    setCount(count + 1);
    setFormData({
      ...formData,
      children: [...formData.children, { firstName: "", lastName: "", email: "" }],
    });
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
      setFormData({
        ...formData,
        children: formData.children.slice(0, -1),
      });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [id]: type === "checkbox" ? checked : value,
    });
  };

  const handleChildDataChange = (childrenData) => {
    setFormData({
      ...formData,
      children: childrenData,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('/api/createUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      // Handle successful signup
      console.log("User created successfully:", result);
      // Navigate to signin page
      router.push("/signin");
    } else {
      // Handle errors
      console.error("Error creating user:", result);
    }
  };

  return (
    <div className=" text-center flex flex-col items-center pl-[70px]">
      <img className="h-[97.66px] w-[97.66px]" src="/gaiaLogo.svg" alt="" />

      <div>
        <h1 className=" font-bold text-[30px]">SIGN UP</h1>
        <p className="text-[#6B6866]">
          Welcome to our platform! This is the sign-up form for parents
        </p>
      </div>
      <form onSubmit={handleSubmit} className=" text-left">
        <LabelInput
          className="lg:w-[500px] md:w-[300px] sm:w-[200px]"
          type="email"
          label="Your email"
          id="email"
          placeholder="enter your email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <LabelInput
          className="w-[500px]"
          type="password"
          label="Password"
          id="password"
          placeholder="enter your password"
          onChange={handleInputChange}
          value={formData.password}
        />
        <LabelInput
          className="w-[500px]"
          type="text"
          label="Full Name"
          id="fullName"
          placeholder="enter your fullname"
          onChange={handleInputChange}
          value={formData.fullName}
        />
        <LabelInput
          className="w-[500px]"
          type="date"
          label="Date of Birth"
          id="dob"
          placeholder="Select"
          onChange={handleInputChange}
          value={formData.dob}
        />

        <div className="flex justify-between mt-4">
          <p className="mr-4">How Many Children do you have?</p>

          <IncDecBtn
            value={count}
            onIncrement={increment}
            onDecrement={decrement}
          />
        </div>
        
        <Child count={count} onChildDataChange={handleChildDataChange} />

        <div className="flex mt-2">
          <input
            type="checkbox"
            className="mr-4"
            id="termsAccepted"
            onChange={handleInputChange}
            checked={formData.termsAccepted}
          />
          <p>
            By creating a new account, I accept the{" "}
            <span className="cursor-pointer" onClick={openModal}>
              <u>Terms & Conditions</u>
            </span>{" "}
            of Gaia
          </p>
        </div>

        <Button type="submit" className="w-full mt-5 bg-[#1099A0] rounded-[32px] h-[48px]">
          Sign Up
        </Button>
      </form>

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
  );
};

export default SignupBox;
