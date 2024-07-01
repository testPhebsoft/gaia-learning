import React from "react";

const ViewButton = ({ onClick, append}) => {
    return (
        <span className="text-teal-400 cursor-pointer text-lg" onClick={onClick}>
            View { append? append: "" }
        </span>
    )
}

export default ViewButton;