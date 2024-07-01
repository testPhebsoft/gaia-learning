import React from "react";
import OverallGaialyticsHeading from "./ui/overallGaialyticsHeading";
import LabelInput from "./LabelInput";
import ViewButton from "./ui/viewButton";

export default function FeelingSection() {
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
    return (
        <section className="w-full max-w-[912px] rounded-lg border border-gray-200">
            <div className="flex p-5 items-center justify-between">
                <div className="flex items-center">
                    <img src="/face_emojis/smiling.svg" alt="Smiling Emoji" />
                    < OverallGaialyticsHeading className="section ml-3 font-bold text-gray-600" text="How do I feel today?" />
                </div>
                <ViewButton onClick="#" append="all"/>
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
    )
}