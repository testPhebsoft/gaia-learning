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
            <div className="w-full mb-2">
                <Link href="#" onClick={() => handleTabClick("Overall")} className={`cursor-pointer mr-4 ${activeTab === "Overall" ? "text-teal-600 text-sm" : "text-black hover:text-teal-600"}`}>
                    Overall Gaialytics
                </Link>

                <Link href="#" onClick={() => handleTabClick("Feedback")} className={`cursor-pointer ${activeTab === "Feedback" ? "text-teal-600" : "text-black hover:text-teal-600"}`}>
                    Feedback & Action
                </Link>
            </div>
            <section className="w-full md:w-auto rounded-lg border border-gray-200 p-5">
                {activeTab === "Overall" && (
                    <div>
                        < OverallGaialytics />
                    </div>
                )}
                {activeTab === "Feedback" && (
                    <div>
                        < FeedbackAction />
                    </div>
                )}
            </section>
        </div>
    )
}

export default Gaialytics;
