import React from "react";
import LabelInput from "./LabelInput";
import FavCourses from "./FavCourses";
import OverallGaialyticsHeading from "./ui/overallGaialyticsHeading";
import OverallGaialyticsSection from "./ui/overallGaialyticsSection";
import FeelingSection from "./FeelingSection";
import WellbeingCheck from "./WellbeingCheck";

const OverallGaialytics = () => {
    const percentage = 98
    const upcomingClass = {
        "name": "Math",
        "time": "00h: 24m: 32s"
    }

    return (
        <div className="w-full">

            {/* first section */}
            <section className="flex gap-10">
                <FeelingSection />

                <section className="w-full max-w-[448px] flex-row">
                    <div className="flex justify-between pb-5">
                            <LabelInput
                                className="text-lg"
                                type="date"
                                label="From"
                                inputClass="rounded-lg border border-gray-300 p-1 w-52 text-gray-600"
                                name="fromDate"
                                id="fromDate"
                            />

                            <LabelInput
                                className="text-lg"
                                type="date"
                                label="To"
                                inputClass="rounded-lg border border-gray-300 p-1 w-52 text-gray-600"
                                name="toDate"
                                id="toDate"
                            />
                    </div>

                    <div className="rounded-lg border border-gray-200">
                        <FavCourses subjects={["Math", "English", "Art & Design"]}/>
                    </div>

                </section>
            </section>

            {/* second section */}
            <section className="flex gap-10 my-10">
                <section className="w-full max-w-[912px] flex-row">
                    <section className="w-full max-w-[912px] flex justify-between">
                        < OverallGaialyticsSection image="/megaphone.svg" text="Attendance streak" h2={percentage} p="on time" specialChar="%" />
                        < OverallGaialyticsSection image="/books.svg" text="Upcoming class" h2={upcomingClass.name} p={upcomingClass.time} />
                    </section>

                    <WellbeingCheck />
                </section>

                <section className="w-full max-w-[448px]">
                    <div className="rounded-lg border border-gray-200">
                        <div className="p-2 flex items-center">
                            <img src="/key.svg" alt="Smiling Emoji" />
                            < OverallGaialyticsHeading className="section ml-3 font-bold text-gray-600" text="Skills" />
                        </div>
                        <img src="/skillsBg.svg" alt="" />
                    </div>
                </section>

            </section>

            {/* third section */}
            <section className="flex gap-10 my-10">

            </section>
        </div>
    );
};

export default OverallGaialytics;
