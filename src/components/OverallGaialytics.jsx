import React from "react";
import LabelInput from "./LabelInput";
import FavCourses from "./FavCourses";
import OverallGaialyticsHeading from "./ui/overallGaialyticsHeading";
import OverallGaialyticsSection from "./ui/overallGaialyticsSection";

const OverallGaialytics = () => {
    const radioOptions = [
        {
            img: "/green_box.png",
            text: "Green",
            emoji1: "/face_emojis/heart_eyes.svg", 
            emoji2: "/face_emojis/laughing.svg", 
            value: "green"
        },
        { 
            img: "/yellow_box.png",
            text: "Yellow", 
            emoji1: "/face_emojis/spiral_eyes.svg", 
            emoji2: "/face_emojis/confused.svg", 
            value: "yellow" 
        },
        { 
            img: "/red_box.png",
            text: "Red",
            emoji1: "/face_emojis/sick.svg", 
            emoji2: "/face_emojis/confounded.svg", 
            value: "red"
        }
    ];
    const percentage = 98
    const upcomingClass = {
        "name": "Math",
        "time": "00h: 24m: 32s"
    }

    return (
        <div className="w-full">

            {/* first section */}
            <section className="w-full flex gap-10">
            <section className="w-full max-w-[912px] rounded-lg border border-gray-200">
                <div className="flex p-5 items-center justify-between">
                    <div className="flex items-center">
                        <img src="/face_emojis/smiling.svg" alt="Smiling Emoji" />
                        < OverallGaialyticsHeading className="section ml-3 font-bold text-gray-600" text="How do I feel today?" />
                    </div>
                    <span className="text-teal-400 cursor-pointer text-lg" onClick="">
                        View all
                    </span>
                </div>

                <div className="pl-5">
                    <LabelInput
                        type="radio-button"
                        id="feeling"
                        options={radioOptions}
                    />
                </div>

                <button className="flex justify-center items-center m-5 px-5 py-3 mt-5 border border-teal-600 shadow-sm rounded-full text-teal-600 font-semibold text-base">
                    Save Changes
                </button>
            </section>


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

                    <section className="rounded-lg border border-gray-200 my-5 py-2 px-5">
                        <div className="flex gap-2 items-center justify-between">
                            <div className="flex gap-2 items-center">
                                <img src="/bicep.svg" alt="" />
                                <OverallGaialyticsHeading className="section ml-3 font-bold" text="A well-being check-in"/>
                            </div>
                            <span className="text-teal-400 cursor-pointer text-lg" onClick="">
                                View all
                            </span>
                        </div>
                    </section>
                </section>

                <section className="w-full max-w-[448px]">
                    <div className="rounded-lg border border-gray-200">
                        <div className="p-5 flex items-center">
                            <img src="/key.svg" alt="Smiling Emoji" />
                            < OverallGaialyticsHeading className="section ml-3 font-bold text-gray-600" text="Skills" />
                        </div>
                        <img src="/skillsBg.svg" alt="" />
                    </div>

                    <div>

                    </div>
                </section>

            </section>
        </div>
    );
};

export default OverallGaialytics;
