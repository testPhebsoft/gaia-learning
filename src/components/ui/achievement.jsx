import React from "react";

const Achievement = ({ icon, heading, quantity, unit }) => {
    return (
        <div className="bg-[#EFFDFD] p-3 pb-5 m-3 w-full">
            <div className="flex gap-2 items-end">
                <img src={icon} alt="" />
                <span className="text-gray-500 font-bold">
                    {heading}
                </span>
            </div>
            <div className="flex mt-2 items-end">
                <h2>
                    {quantity}
                </h2>
                <p className="text-gray-400 ml-2">
                    {unit}
                </p>
            </div>
        </div>
    )
}

export default Achievement;