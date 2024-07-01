// "use server"
// import { cookies } from "next/headers"

export default function getAchievementImages() {
    // let token = cookies.get("token");
    let token = "1232312";

    if(token) {
        return [
            "/images_demo/certificate.svg",
            "/images_demo/achievements.svg"
        ]
    }
}