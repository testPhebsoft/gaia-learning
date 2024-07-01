"use server";

import { cookies } from "next/headers"

const getProfile = () => {
    // let token = cookies.get("token")
    let token = "123sda";

    // simulating an api call
    if(token) {
        const user_info = {
            full_name: "Gareth Stevens",
            familiy_name: "Kristen Stevena",
            email: "garethstevens13@gmail.com",
            mobile_no: "",
            home_no: "",
            time_zone: "London",
            dob: "12/05/2013",
            school: "Greentrees",
            educators: ["Cristin Coughtrie", "Neeki Armani"],
            start_date: "25/06/2019",
            grade: "5",
            subjects: "GCSE Maths",
            files: ["document.pdf", "image.png", "archive.zip", "spreadsheet.xlsx"]
        }
        return user_info;
    }
}

export default getProfile;