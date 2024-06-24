import React from "react";
import LabelInput from "./LabelInput";
import Table from './Table';

const Profile = () => {
  // Arbitrary values
  const fullName = "user";
  const famName = "blabla";
  const email = "email haha";
  const time_zone = "London";

  return (
    <div>
      <div className="flex flex-col mr-60">
        {/* Welcome message and user profile */}
        <div className="flex justify-between mb-4 flex-1 pr-4">
          <h2 className="text-2xl font-bold mr-2">
            Welcome {fullName}!
          </h2>
          {/* Edit button with pen SVG (assuming SVG is replaced here) */}
          <button className="text-blue-500 hover:text-blue-700">
            <img
              src="/editIcon.svg"
              alt="icon"
            />{" "}
            Edit
          </button>
        </div>

        <img
          className="h-20 w-20 rounded-full inline-block"
          src="/userProfile.svg"
          alt="User Profile"
        />

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
              value={famName}
              name="famName"
              id="famName"
              disabled={ true }
            />
            {/* Contact Information section */}
            <h2 className="text-xl font-bold mb-2 mt-10">Contact Information</h2>
            <LabelInput
              label="Email"
              className="mb-4"
              type="text"
              value={ email }
              name="email"
              id="email"
              disabled={ true }
            />

            <LabelInput
              label="Mobile phone"
              className="mb-4"
              type="text"
              value=""
              name="mobile_no"
              id="mobile_no"
              disabled={ true }
            />

            <LabelInput
              label="Home phone"
              className="mb-4"
              type="text"
              value=""
              name="home_no"
              id="home_no"
              disabled={ true }
            />
          </div>

          {/* Right column (empty initially) */}
          <div className="flex-1">
            {/* Empty space */}
            <div className="h-20"></div>
          </div>
        </div>

        {/* Empty space */}
        <div className="h-10"></div>

        {/* Second part of the layout */}
        <div className="flex">
          {/* Left column */}
          <div className="flex-1 pr-4">
            {/* Learner Details section */}
            <h2 className="text-xl font-bold mb-2">Learner Details</h2>
            <LabelInput
              label="Time Zone"
              className="mb-4"
              type="text"
              value={time_zone}
              name="time_zone"
              id="time_zone"
              disabled={true}
            />
            <LabelInput
              label="Birth date"
              className="mb-4"
              type="date"
              value=""
              name="dob"
              id="dob"
              disabled={true}
            />
            <LabelInput
              label="School"
              className="mb-4"
              type="text"
              value=""
              name="school"
              id="school"
              disabled={true}
            />
            <LabelInput
              label="Educators"
              className="mb-4"
              type="text"
              value=""
              name="educators"
              id="educators"
              disabled={true}
            />
          </div>

          {/* Right column (with Learner Details section) */}
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-2 invisible">Learner Details</h2>
            <LabelInput
              label="Start date"
              className="mb-4"
              type="date"
              value=""
              name="start_date"
              id="start_date"
              disabled={true}
            />
            <LabelInput
              label="Grade/Year"
              className="mb-4"
              type="text"
              value=""
              name="grade"
              id="grade"
              disabled={true}
            />
            <LabelInput
              label="Subjects"
              className="mb-4"
              type="text"
              value=""
              name="subjects"
              id="subjects"
              disabled={true}
            />
          </div>
        </div>
      </div>

      <div className="mr-60">

        <div className="flex justify-between">
          <h2 className="text-xl font-bold mr-2">
            Upcoming Sessions
          </h2>

          <span>
            View all
          </span>
        </div>

        <Table 
          headers = {["Date", "Start", "End", "Session Name", "Status"]}
          rows = {[]}
        />

        <div className="flex justify-between">
          <h2 className="text-xl font-bold mr-2">
            Upcoming Sessions
          </h2>

          <span>
            View all
          </span>
        </div>

        <Table 
          headers = {["Date", "Start", "End", "Session Name", "Status"]}
          rows = {[]}
        />

      </div>
    </div>
  );
};

export default Profile;
