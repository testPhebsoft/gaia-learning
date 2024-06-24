import React from "react";

const MainPhoto = ({ imageSrc = "/OBJECTS.svg" }) => {
  return (
    <div className=" h-screen  w-full max-w-[50vw] flex flex-col bg-[#ECFEFF] ">
      <img
        className=" m-auto h-[446px] w-[619px]"
        src={imageSrc}
        alt="Example Image 1"
      />
    </div>
  );
};

export default MainPhoto;
