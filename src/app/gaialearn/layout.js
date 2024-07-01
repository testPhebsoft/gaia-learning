import { GaialearnNavs } from "./GaialearnNavs";
import Header from '@/components/Header';

export default function Layout ({children}) {
    // const [selected, setSelected] = useState("Calendar");

    return (
        <div>
            <Header current="GAIA Learning" />
            <GaialearnNavs/>
            <div className="mt-4 ml-8">
                {children}
            </div>
        </div>
    )
}