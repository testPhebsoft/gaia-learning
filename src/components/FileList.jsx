import React from "react";

const FileItem = ({ fileName }) => {
    const fileExtension = fileName.split(".").pop();
    let iconPath;

    switch (fileExtension) {
        case "pdf":
            iconPath = "/pdf.png";
            break;
        case "docx":
            iconPath = '/docx.png';
            break;
        case "doc":
            iconPath = "/doc.png"; 
            break;
        case "xls":
        case "xlsx":
            iconPath = "/xls.png";
            break;
        case "zip":
            iconPath = "/zip.png";
            break;
        case "png":
            iconPath = "png.png";
            break;
        default:
            iconPath = "/default.png";
            break;
    }

    return (
        <div className="flex justify-start items-center mt-2 w-24">
            <img src={iconPath} alt={`${fileExtension} icon`} className="w-6 h-6 mr-2" />
            <p>{fileName}</p>
        </div>
    );
};

const FileList = ({ files }) => {
    if (!files || files.length === 0) {
        return <div>No files.</div>;
    }

    return (
        <div className="h-36 overflow-y-auto pr-3">
            {files.map((file, index) => (
                <div key={index} className="w-full bg-gray-200 rounded-md border border-input bg-background px-3 py-2 mb-3 text-lg">
                    <FileItem fileName={file} />
                </div>
            ))}
        </div>
    );
};

export default FileList;
