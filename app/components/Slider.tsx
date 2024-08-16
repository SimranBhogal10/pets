'use client'

import { homeBanner } from "@/utils/homeBanner";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const Slider = () => {
    const [activeImage, setActiveImage] = useState(0);

    const clickNext = () => {
        activeImage === homeBanner.length - 1 ? setActiveImage(0) : setActiveImage(activeImage + 1);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            clickNext();
        }, 5000);
        return () => {
            clearTimeout(timer)
        }
    }, [activeImage])

    return (
        <>
            {homeBanner.map((item, index) => (
                <div key={item.title} className={`${index == activeImage ? "grid place-items-center grid-cols-2 w-full mx-auto" : "hidden"}`}>
                    <motion.div
                        initial={{
                            opacity: index === activeImage ? 0 : 0.5,
                            scale: index === activeImage ? 0.5 : 0.3
                        }}
                        animate={{
                            opacity: index === activeImage ? 1 : 0.5,
                            scale: index === activeImage ? 1 : 0.3
                        }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 0.5 }
                        }}
                    >
                        <div className="mb-8 md:mb-0">
                            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">{item.title}</h1>
                            <p className="text-xl md:text-2xl text-white mb-2 w-[300px]">{item.description}</p>
                            <p className="text-2xl md:text-4xl text-yellow-300 font-bold">Shop Now</p>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: index === activeImage ? 0 : 0.5,
                            scale: index === activeImage ? 0.5 : 0.3
                        }}
                        animate={{
                            opacity: index === activeImage ? 1 : 0.5,
                            scale: index === activeImage ? 1 : 0.3
                        }}
                        transition={{
                            ease: "linear",
                            duration: 1,
                            x: { duration: 0.5 }
                        }}
                    >
                        <div className={index === activeImage ? `w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl` : 'hidden'}>
                            <Image src={item.image} alt="Hero banner" width={400} height={600} />
                        </div>
                    </motion.div>
                </div>
            ))}
        </>
    )
}

export default Slider;