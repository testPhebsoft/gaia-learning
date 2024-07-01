import React from "react";
import OverallGaialyticsHeading from "./ui/overallGaialyticsHeading";

export default function Skills() {
    return (
        <div className="rounded-lg border border-gray-200">
            <div className="p-2 flex items-center">
                <img src="/key.svg" alt="Smiling Emoji" />
                < OverallGaialyticsHeading className="subtitle ml-3 font-bold text-gray-600" text="Skills" />
            </div>
            <img src="/skillsBg.svg" alt="" />
        </div>
    )
}