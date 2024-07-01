"use server"
import { cookies } from "next/headers"

let token = cookies.get("token")
export async function patchProfile(updateData) {
    const data = updateData;
    let token = "12321321";
    // simulating an api call
    if (token) {
        // use the data
    }
}