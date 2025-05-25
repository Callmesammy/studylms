"use client"

import Image from "next/image";
import type { Metadata } from "next";
import { Pacifico } from "next/font/google";
import { useEffect } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { SheetSide } from "./sidebar";

const pacifico = Pacifico({    
     weight: '400',
    subsets: ["latin"],
});

export const Headstcky=[
    {
        name: "Home", 
        url: "/"
    },
    {
        name: "Learning Companions", 
        url: "/companions"
    },

    {
        name: "My Journer", 
        url: "/journer"
    },

]
const Headers = () => {
    const pathName = usePathname()
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
        <div className="w-full h-[5rem] bg-white flex shadow-sm">
            <div className="w-full h-full items-center flex px-2 justify-between">
            <div onClick={()=>clicking("/")} className="flex gap-1 items-center cursor-pointer hover:scale-105">
            <Image src="/study.avif" alt="logo" width={50} height={50} className="rounded-md shadow press"/>
           <div className={pacifico.className}> <h1 className="twist">StusyLMS </h1> </div> 
            </div>
            <div className="lg:hidden">
                <SheetSide/>
            </div>
            <div className="gap-3 hidden lg:flex ">
            {Headstcky.map((doc, keys)=>{
                const isActive = pathName===doc.url || pathName.startsWith(`${doc.url}/`)
                return(
                    <Link href={doc.url} key={keys} className={cn("hover:scale-100  bg-black  z-50 relative space-x-2 text-md font-semibold hover:text-blue-400 p-3 border rounded-full", isActive && "text-blue-800 font-bold top-2 bg-green-400")} >
                {doc.name}
   <div className=" -z-10 bg-secondary absolute flex w-full h-full rounded-full items-center justify-center -top-1 left-0 "/>


                    </Link>
                )
            })}
            </div>    
            </div> 
        </div>
     );
}
 
export default Headers;