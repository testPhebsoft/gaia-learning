import OverallGaialyticsHeading from "./ui/overallGaialyticsHeading";
import LineChartComponent from "./LineChartComponent";

export default function LoveofLearningTwo() {
    return (
        <div className="rounded-lg border border-gray-200 py-2 max-h-[844px] w-full">
            <div className="flex justify-between items-center border-b border-gray-200 py-2 px-4 pb-3 w-full">
                <div className="flex gap-2 items-center">
                    <img src="/clock.svg" alt="" />
                    <OverallGaialyticsHeading text="Love of Learning" className="subtitle ml-3 font-bold" />
                </div>
            </div>

            <div className="px-10 py-10">
                <LineChartComponent />
            </div>
        </div>
    )
}