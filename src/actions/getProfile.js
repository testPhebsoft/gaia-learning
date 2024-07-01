"use server";

import { cookies } from "next/headers"

export  async   function getProfile (){
    // let token = cookies.get("token")
    let token = "123sda";

    if(token) {
   
        return {
            full_name: "Gareth Stevens",
            family_name: "Kristen Stevena",
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
        };
    }
}
