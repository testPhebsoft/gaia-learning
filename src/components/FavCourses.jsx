import React, { useState } from "react";
import ViewButton from "./ui/viewButton";

const ShowCourses = ({ subject, index }) => {
    const icons = ["/first_place.svg", "/second_place.svg", "/third_place.svg"];

    return (
        <div className="flex border-t border-gray-200 px-3 py-2 justify-between items-center">
            {subject}
            {index < 3 && (
                <img src={icons[index]} alt="" className="w-10 h-10" />
            )}
        </div>
    );
};

const FavCourses = ({ subjects }) => {
    const [showAll, setShowAll] = useState(false);

    const toggleView = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <div className="flex items-center justify-between px-3 py-2">
                <div className="flex gap-3 px-2 items-center">
                    <img src="/medal.svg" alt="" className="w-10 h-10" />
                    <span className="section font-bold py-2">My favourite courses</span>
                </div>
                <ViewButton onClick={toggleView} />
            </div>
            <div className="text-lg">
                {subjects.slice(0, showAll ? subjects.length : 3).map((subject, index) => (
                    <ShowCourses key={index} subject={subject} index={index} />
                ))}
            </div>
        </div>
    );
};

export default FavCourses;
