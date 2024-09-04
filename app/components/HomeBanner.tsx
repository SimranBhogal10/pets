import { homeBanner } from "@/utils/homeBanner";
import Image from "next/image";
import Slider from "./Slider";

const HomeBanner = () =>{
    return (
        <div className="bg-gradient-to-r from-indigo-400 to-indigo-800 mb-8 grid place-items-center shadow-2xl rounded-2xl sm:mt-6 p-12">
            <Slider/>
        </div>
    )
}



export default HomeBanner;