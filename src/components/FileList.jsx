import React from "react";
import { FileIcon, defaultStyles } from "react-file-icon";

const FileItem = ({ fileName }) => {
    const fileExtension = fileName.split(".").pop();

    return (
        <div className="flex justify-start items-center mt-2 w-24">
            <FileIcon 
                extension={fileExtension} 
                {...defaultStyles[fileExtension]}
            />
            <p className='ml-2'>
                
                {fileName}
            </p>
        </div>
    )
}

const FileList = ({ files }) => {
    return (
        <div className="h-36 overflow-y-auto pr-3">
            {files.map((file, index) => (
                <div key={index} className="w-full bg-gray-200 w-full rounded-md border border-input bg-background px-3 py-2 mb-3 text-lg">
                    <FileItem fileName={file} />
                </div>
            ))}
        </div>
    )
}

export default FileList;