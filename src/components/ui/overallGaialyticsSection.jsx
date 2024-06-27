import React from "react";
import OverallGaialyticsHeading from "./overallGaialyticsHeading";

const OverallGaialyticsSection = ({image, text, h2, p, specialChar = ""}) => {
    return (
        <div className="w-full max-w-[444px]">
            <div className="p-5 rounded-lg border border-gray-200">
                <div className="flex gap-2 items-center">
                    <img src={image} alt="" className="w-8 h-8"/>
                    < OverallGaialyticsHeading className="section ml-3 font-bold text-gray-600" text={text} />
                </div>
                <div className="flex items-end mt-2">
                    <h2>
                        {h2}{specialChar? specialChar: ""}
                    </h2>
                    <p className="text-gray-400 ml-2">
                        {p}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default OverallGaialyticsSection;