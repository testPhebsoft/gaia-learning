import React from "react";
import Link from "next/link";
import HeaderButton from "./ui/headerButton";

const Header = ({ current }) => {
  return (
    <header className="px-6 bg-white shadow-md">
      <div className="flex items-center justify-between ml-10 mr-10">
        {/* Logo */}
        <img className="h-20 w-20" src="/gaiaLogo.svg" alt="Logo" />

        {/* Navigation Buttons */}
        <div className="flex justify-items-end font-bold">
          <HeaderButton
            text="Home"
            goTo="/home"
            isDropdown={false}
            current={current}
          />
          <HeaderButton
            text="About"
            goTo="#"
            isDropdown={true}
            options={["Mission", "Vision", "Team"]}
            optionLinks={["/about/mission", "/about/vision", "/about/team"]}
            current={current}
          />
          <HeaderButton
            text="Inclusive Education"
            goTo="#"
            isDropdown={true}
            options={["Policy", "Programs"]}
            optionLinks={[
              "/inclusive-education/policy",
              "/inclusive-education/programs",
            ]}
            current={current}
          />
          <HeaderButton
            text="Innovation"
            goTo="#"
            isDropdown={true}
            options={["Projects", "Research"]}
            optionLinks={["/innovation/projects", "/innovation/research"]}
            current={current}
          />
          <HeaderButton
            text="Inspiration"
            goTo="#"
            isDropdown={true}
            options={["Stories", "Events"]}
            optionLinks={["/inspiration/stories", "/inspiration/events"]}
            current={current}
          />
          <HeaderButton
            text="GAIA Learning"
            goTo="/gaialearn"
            isDropdown={false}
            current={current}
          />
        </div>

        {/* Enquiry Button */}
        <Link href="/enquiry">
          <div className="inline-block px-4 py-2 text-white bg-orange-500 rounded-full hover:bg-orange-600 cursor-pointer text-sm shadow-lg">
            ENQUIRY
          </div>
        </Link>

        {/* User Profile */}
        <div className="flex items-center">
          <Link href="/profile">
            <img
              className="h-10 w-10 rounded-full mr-3"
              src="/userProfile.svg"
              alt="User Profile"
            />
          </Link>
          <Link href="/signin">
            <div className="text-black hover:underline cursor-pointer font-bold">
              Log out
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
