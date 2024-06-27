"use client";

import React, { useState } from "react";
import GaiaButton from "./ui/gaiaButton";
import StudentCalendar from "./Calendar/StudentCalendar";
import Profile from "./Profile";
import Gaialytics from "./Gaialytics";
import Educators from "./Educators";
import MaxWidthWrapper1440px from "./MaxWidthWrapper1440";

const GaiaLearn = () => {
  const [selected, setSelected] = useState("Calendar");

  return (
    <div className="mt-4 ml-8">
      {" "}
      {/* Added margin to the left */}
      <div className="font-bold inline-flex space-x-4 bg-gray-200 py-2 px-4 rounded-md inline-block">
        {" "}
        {/* Adjusted styles here */}
        <GaiaButton
          text="Calendar"
          onClick={() => setSelected("Calendar")}
          isActive={selected === "Calendar"}
        />
        <GaiaButton
          text="Profile"
          onClick={() => setSelected("Profile")}
          isActive={selected === "Profile"}
        />
        <GaiaButton
          text="Educators"
          onClick={() => setSelected("Educators")}
          isActive={selected === "Educators"}
        />
        <GaiaButton
          text="Gaialytics"
          onClick={() => setSelected("Gaialytics")}
          isActive={selected === "Gaialytics"}
        />
      </div>
      <div className="mt-4 w-full">
        { 
          selected === "Calendar" && (
            <>
              <StudentCalendar />
            </>
          )
        }
        {
          selected === "Profile" && (
            <>
              < MaxWidthWrapper1440px children={< Profile />} />
            </>
          )
        }
        {
          selected === "Educators" && (
            <>
              <Educators />
            </>
          )
        }
        {
          selected === "Gaialytics" && (
            <>
              <Gaialytics />
            </>
          )
        }
      </div>
    </div>
  );
};

export default GaiaLearn;
