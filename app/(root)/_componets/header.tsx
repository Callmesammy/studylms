"use client"

import Image from "next/image";
import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import { useEffect } from "react";
import gsap from "gsap";

const pacifico = Pacifico({    
     weight: '400',
    subsets: ["latin"],
});

const Headers = () => {
    const clicking =(url: string)=>{
        window.location.href = url
    }
    useEffect(()=>{
        gsap.fromTo(".press", {
            scale: 10,
            translateY: 30,
            yoyo: false,
            opacity: 0
            
        }, {
           scale: 1, 
           translateY: 0,
           opacity: 1, 
           duration: 2,
           ease: "elastic.inOut",
           yoyo: true 
        })

        gsap.fromTo(".twist", {
            translateX: 100,
            translateY: 30,
            yoyo: false,
            opacity: 0
            
        }, {
           translateX: 0, 
           translateY: 0,
           opacity: 1, 
           duration: 2,
           ease: "elastic.inOut",
           yoyo: true 
        },
    )
    },[])
    return ( 
        <div className="w-full h-[5rem] bg-white flex">
            <div className="w-full h-full items-center flex px-2 justify-between">
            <div onClick={()=>clicking("/")} className="flex gap-1 items-center cursor-pointer hover:scale-105">
            <Image src="/study.avif" alt="logo" width={50} height={50} className="rounded-md shadow press"/>
           <div className={pacifico.className}> <h1 className="twist">StusyLMS </h1> </div> 
            </div>
            jkhj    
            </div> 
        </div>
     );
}
 
export default Headers;