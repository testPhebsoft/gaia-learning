import React from "react";

const OverallGaialytics = () => {
    return (
        <div>
            <section className="w-full flex flex-row justify-between gap-5">
                <section className="w-full max-w-[912px] rounded-lg border border-gray-200">
                    <div className="flex p-5 max-w-[912px] items-center">
                        <img src="/face_emojis/smiling.svg" alt="" />
                        <span className="section ml-3 font-medium text-gray-600">
                            How do I feel today?
                        </span>
                    </div>
                </section>

                <section className="w-full max-w-[448px] rounded-lg border border-gray-200">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ipsam, perferendis pariatur dolorem consequatur maxime officiis libero vero exercitationem deserunt explicabo doloribus est, voluptatum sunt repellat! Nisi ab sit accusamus atque asperiores!
                </section>
            </section>
        </div>
    )
}

export default OverallGaialytics;