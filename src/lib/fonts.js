import { Poppins } from "next/font/google";

const poppins = Poppins({
    weight: ['400', '500'],
    display: "swap",
    subsets: ['latin'],
    variable: '--poppins-font'
})

export { poppins };