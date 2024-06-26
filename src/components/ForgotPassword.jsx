"use client";

import React from "react";
import Link from "next/link";
import LabelInput from "./LabelInput";

const ForgotPassword = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="relative lg:w-[500px] md:w-[300px] sm:w-[200px] rounded-lg overflow-hidden py-2 px-2">
        {/* Pattern */}
        <img
          className="absolute inset-0 z-index--1"
          style={{ 
            zIndex: -1, 
            top: '-30%', 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover', 
            background: 'radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%)', 
            maskImage: 'radial-gradient(circle, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 100%)'
          }}
          src="/forgotPassPattern.svg"
          alt="pattern"
        />

        <div className="flex justify-center mb-6">
          {/* Key Icon */}
          <img
            className="h-16 w-16 relative z-10"
            src="/keyIcon.svg"
            alt="Icon"
          />
        </div>

        <h1 className="mb-2 text-3xl font-bold text-center">FORGOT PASSWORD</h1>
        <p className="mb-6 text-center text-gray-600 text-sm">
          Enter your email below to continue
        </p>

        <form>
          <div className="mb-4">
            <LabelInput
              className="block mb-2 text-sm text-gray-700"
              label="Email"
              placeholder="Enter your email"
              name="email"
              id="email"
              type="email"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <button
              className="w-full px-4 py-2 font-bold text-white bg-teal-500 rounded-full hover:bg-teal-700 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              SUBMIT
            </button>
          </div>

          <div className="text-center">
            <Link href="/signin" passHref>
              <div className="inline-flex items-center text-sm hover:underline text-gray-500">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
                Back to sign in
              </div>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
