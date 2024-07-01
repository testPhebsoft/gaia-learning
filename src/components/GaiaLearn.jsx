"use client";

import React, { useEffect, useState } from "react";
import GaiaButton from "./ui/gaiaButton";
import StudentCalendar from "./Calendar/StudentCalendar";
import Profile from "./Profile";
import Gaialytics from "./Gaialytics";
import Educators from "./Educators";
import MaxWidthWrapper1440px from "./MaxWidthWrapper1440";
import getEvents from "../actions/getEvents";
import getProfile from "../actions/getProfile";

const GaiaLearn = () => {
  const [selected, setSelected] = useState("Calendar");
  const [events, setEvents] = useState([]);
  const [profileData, setProfileData] = useState({});

  // get events for calendar component
  useEffect(() => {
    const fetchEvents = async () => {
      const eventsData = await getEvents();
      setEvents(eventsData);
    };

    fetchEvents();
  }, []);

  // get profile data for profile component
  useEffect(() => {
    const fetchProfile = () => {
      const profile_data = getProfile();
      setProfileData(profile_data);
    };

    fetchProfile();
  }, []);

  return (
    <div className="mt-4 ml-8">
      <div className="font-bold inline-flex space-x-4 bg-gray-200 py-2 px-4 rounded-md inline-block">
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
        {selected === "Calendar" && (
          <StudentCalendar events={events} />
        )}
        {selected === "Profile" && (
          <MaxWidthWrapper1440px>
            <Profile data={profileData} />
          </MaxWidthWrapper1440px>
        )}
        {selected === "Educators" && <Educators />}
        {selected === "Gaialytics" && <Gaialytics />}
      </div>
    </div>
  );
};

export default GaiaLearn;
