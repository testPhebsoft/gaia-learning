"use server";

import { cookies } from "next/headers";

const getEvents = async () => {
    // Replace with your actual token fetching logic
    let token = "asdasdd";
    
    if (token) {
        // Simulate an API call
        return [
            { title: "Meeting with team", start: "2024-06-28T10:00:00" },
            { title: "Project deadline", start: "2024-06-30" },
            { title: "Client call", start: "2024-07-01T14:00:00" }
        ];
    } else {
        alert("Unauthenticated user. Please login to continue.");
        return [];
    }
};

export default getEvents;