import StudentCalendar from "../../../components/Calendar/StudentCalendar";
import getEvents from '../../../actions/getEvents';

export default async function Page() {
    let eventsData; 
    try{
        eventsData = await getEvents()
        // console.log(ProfileData,"profileDatra")
    }
    catch(e){}
    return (
        <StudentCalendar events={eventsData}/>
    );
}