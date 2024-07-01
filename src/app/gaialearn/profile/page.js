import { getProfile } from "../../../actions/getProfile";
import MaxWidthWrapper1440px from "../../../components/MaxWidthWrapper1440";
import Profile from "../../../components/Profile";

export default async function Page() { 
    let ProfileData; 
    try{
        ProfileData = await getProfile()
        // console.log(ProfileData,"profileDatra")
    }
    catch(e){}
    return (
        <div>
            <MaxWidthWrapper1440px>
                <Profile data={ProfileData} />
            </MaxWidthWrapper1440px>
        </div>
    );
}