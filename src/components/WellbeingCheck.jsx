import React from "react";
import OverallGaialyticsHeading from "./ui/overallGaialyticsHeading";
import ViewButton from "./ui/viewButton";
import Achievement from "./ui/achievement";

export default function WellbeingCheck() {
    return (
        <section className="rounded-lg border border-gray-200 my-5 py-2 px-5">
            <div className="flex gap-2 items-center justify-between">
                <div className="flex gap-2 items-center">
                    <img src="/bicep.svg" alt="" />
                    <OverallGaialyticsHeading className="subtitle ml-3 font-bold" text="A well-being check-in"/>
                </div>
                <ViewButton onClick="#" append="all"/>
                
            </div>
            <div className="flex mt-5">
                < Achievement icon="/shoe.svg" heading="Daily step count" quantity="801" unit="step(s)" />
                < Achievement icon="/water_tap.svg" heading="Water intake" quantity="1,2" unit="litre(s)" />
                < Achievement icon="/person_running.svg" heading="Balancing on one foot" quantity="15" unit="minute(s)" />
            </div>
        </section>
    )
}