"use client"

import { usePathname } from "next/navigation";
import GaiaButton from "../../components/ui/gaiaButton";


export function GaialearnNavs() {
    const path = usePathname()
    console.log(path.split('/'))
    return <div className="font-bold inline-flex space-x-4 bg-gray-200 py-2 px-4 rounded-md inline-block mt-4 ml-8">
        <GaiaButton
            text="Calendar"
            isActive={path.split('/')[2] == "calendar"} 
            slug={"calendar"}
            />
            
        <GaiaButton
            text="Profile" isActive={path.split('/')[2] == "profile"}
            slug={"profile"} />


        <GaiaButton
            text="Educators"
            isActive={path.split('/')[2] == "educators"} 
            slug={"educators"}/>
            


        <GaiaButton
            text="Gaialytics"
            isActive={path.split('/')[2] == "gaialytics"} 
            slug={"gaialytics"}/>

    </div>;
}
