"use client";

import React, { useState } from "react";
import Link from "next/link";
import OverallGaialytics from "./OverallGaialytics";
import FeedbackAction from "./FeedbackAction";

const Gaialytics = () => {
    const [activeTab, setActiveTab] = useState("Overall");

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div className="flex flex-wrap mt-2 mb-10">
            <div className="w-full mb-5">
                <div className="w-full mb-5">
                    <Link href="#" onClick={() => handleTabClick("Overall")} className={`cursor-pointer mr-4 p-2 ${activeTab === "Overall" ? "text-teal-600 border-b-teal-600 border-b-2" : "text-black hover:text-teal-600"}`}>
                        Overall Gaialytics
                    </Link>

                    <Link href="#" onClick={() => handleTabClick("Feedback")} className={`cursor-pointer p-2 ${activeTab === "Feedback" ? "text-teal-600 border-b-teal-600 border-b-2" : "text-black hover:text-teal-600"}`}>
                        Feedback & Action
                    </Link>
                </div>
            </div>
                {activeTab === "Overall" && (
                    <>
                        < OverallGaialytics />
                    </>
                )}
                {activeTab === "Feedback" && (
                    <>
                        < FeedbackAction />
                    </>
                )}
        </div>
    )
}

export default Gaialytics;
