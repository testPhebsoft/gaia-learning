"use client"
import React, { useState } from "react";
import Link from "next/link";
import LabelInput from "./LabelInput";
import Table from "./Table";
import FileList from "./FileList";

const Profile = ({data}) => {
  // const [files, setFiles] = useState();
  console.log(data);

  return (
    <div className="mb-5">
      <section className="flex flex-col mr-60">
        {/* Welcome message and user profile */}
        <div className="flex w-1/2 justify-between mb-4">
          <h6 className="font-bold">Welcome {data.full_name}!</h6>
          {/* Edit button with pen SVG (assuming SVG is replaced here) */}
          <button className="flex items-center text-teal-500 hover:text-teal-700">
            <img className="mr-2 w-5 text-2xl" src="/editIcon.svg" alt="icon" /> Edit
          </button>
        </div>

        <div className="relative flex items-center justify-center h-20 w-20" >
          <Link href="#">
              <img className="absolute m-auto inset-0 z-1" src="/cameraIcon.svg" alt="Edit Picture" />
              <img className="" src="/userProfile.svg" alt="User Profile" />   
          </Link>
        </div>

        {/* Main content layout with two columns */}
        <div className="flex">
          {/* Left column */}
          <div className="flex-1 pr-4">
            {/* Family Information section */}
            <h2 className="text-xl font-bold mb-2 mt-5">Family Information</h2>
            <LabelInput
              label="Family name"
              className="mb-4"
              type="text"
              value={data.family_name}
              name="famName"
              id="famName"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
            {/* Contact Information section */}
            <h2 className="text-xl font-bold mb-2 mt-10">
              Contact Information
            </h2>
            <LabelInput
              label="Email"
              className="mb-4"
              type="text"
              value={data.email}
              name="email"
              id="email"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />

            <LabelInput
              label="Mobile phone"
              className="mb-4"
              type="text"
              value={data.mobile_no}
              name="mobile_no"
              id="mobile_no"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />

            <LabelInput
              label="Home phone"
              className="mb-4"
              type="text"
              value={data.home_no}
              name="home_no"
              id="home_no"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
          </div>

          {/* Right column (empty initially) */}
          <div className="flex-1">
            {/* Empty space */}
            {/* <div className="h-20"></div> */}
          </div>
        </div>

        {/* Empty space */}
        <div className="h-10"></div>

        {/* Second part of the layout */}
        <section className="flex">
          {/* Left column */}
          <div className="flex-1 pr-4">
            {/* Learner Details section */}
            <h2 className="text-xl font-bold mb-2">Learner Details</h2>
            <LabelInput
              label="Time Zone"
              className="mb-4"
              type="text"
              value={data.time_zone}
              name="time_zone"
              id="time_zone"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
            <LabelInput
              label="Birth date"
              className="mb-4"
              type="date"
              value={data.dob}
              name="dob"
              id="dob"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
            <LabelInput
              label="School"
              className="mb-4"
              type="text"
              value={data.school}
              name="school"
              id="school"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
            <LabelInput
              label="Educators"
              className="mb-4"
              type="text"
              value={data.educators}
              name="educators"
              id="educators"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
          </div>

          {/* Right column*/}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2 invisible">
              Learner Details
            </h2>
            <LabelInput
              label="Start date"
              className="mb-4"
              type="date"
              value={data.start_date}
              name="start_date"
              id="start_date"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
            <LabelInput
              label="Grade/Year"
              className="mb-4"
              type="text"
              value={data.grade}
              name="grade"
              id="grade"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
            <LabelInput
              label="Subjects"
              className="mb-4"
              type="text"
              value={data.subjects}
              name="subjects"
              id="subjects"
              disabled={true}
              inputClass="bg-gray-200 border-gray-400"
            />
          </div>
        </section>
      </section>

      <section className="mr-60 mt-10">
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mr-2 mb-5">Upcoming Sessions</h2>

          <span className="text-teal-700 cursor-pointer text-lg" onClick="">
            View all
          </span>
        </div>

        <Table
          headers={["Date", "Start", "End", "Session Name", "Status"]}
          rows={["abc", "def", "ghi", "jkl", "mno"]}
        />

        <div className="flex justify-between">
          <h2 className="text-xl font-bold mr-2 mt-10 mb-5">
            Upcoming Sessions
          </h2>

          <span className="text-teal-700 cursor-pointer text-lg mt-10" onClick="">
            View all
          </span>
        </div>

        <Table
          headers={["Date", "Start", "End", "Session Name", "Status"]}
          rows={["abc", "def", "ghi", "jkl", "mno"]}
        />

        <h2 className="text-xl font-bold mr-2 mt-10 mb-5">Files</h2>
        <FileList files={data.files}/>
      </section>
    </div>
  );
};

export default Profile;
