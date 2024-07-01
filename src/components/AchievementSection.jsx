import React from "react";
import Link from "next/link";
import OverallGaialyticsHeading from "./ui/overallGaialyticsHeading";
import ViewButton from "./ui/viewButton";
import getAchievementImages from '../actions/getAchievementImages';

export default async function AchievementSection() {
    const images = await getAchievementImages();
    console.log(images)

    return (
        <div className="rounded-lg border border-gray-200 py-2 max-w-[912px] max-h-[844px] w-full">
            <div className="flex justify-between items-center border-b border-gray-200 py-2 px-4 pb-3 w-full">
                <div className="flex gap-2 items-center">
                    <img src="/party_popper.svg" alt="" />
                    <OverallGaialyticsHeading text="Achievement" className="subtitle ml-3 font-bold" />
                </div>
                <ViewButton onClick="#" append="all" />
            </div>

            <div className="py-4 px-4">
                <p className="subtitle font-bold">
                    Sports and Athletic Achievements
                </p>
                <p className="section mt-2">
                    Students can achieve in sports by making the school team, winning games, earning MVP awards, or setting records in their respective sport
                </p>
            </div>

            <div className="py-4 px-4 overflow-y-auto h-[600px]">
                {images? images.map((src, index) => (
                    <img key={index} src={src} alt={`Achievement ${index + 1}`} className="mb-2 h-auto h-max-[300px] rounded-lg" />
                )): null}
            </div>

            <div className="flex justify-end items-center px-3 py-2 w-full border-t border-black-2px">
                <Link 
                    className="flex items-center justify-center p-2 border border-teal-500 rounded-full text-teal-500 visible"
                    href="#"
                >
                    <img src="/upload.svg" alt="" className="mr-1"/>
                    <p>
                        Upload achievement
                    </p>
                </Link>
            </div>
        </div>
    );
}
