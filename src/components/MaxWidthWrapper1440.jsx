import React from "react";

const MaxWidthWrapper1440px = ({children}) => {
    return (
        <div className="max-w-[1440px] mx-auto w-full">
            {children}
        </div>
    )
}

export default MaxWidthWrapper1440px;