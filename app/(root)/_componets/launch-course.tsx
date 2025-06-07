"use client"
import { Button } from "@/components/ui/button";
import { FaRepeat } from "react-icons/fa6";

const LaunchCourse = () => {
    return (  
        <div className="w-full flex flex-col space-y-3">
             <div className="grid grid-cols-2 w-full gap-4 pt-4 ">
            <span className="border w-full p-3 h-22 rounded-md border-black">

          </span>
            <span className="border w-full border-black p-3 flex justify-center h-22 rounded-md items-center bg-white">
            <FaRepeat className="size-10"/>

            </span>
          </div>
          <Button className="bg-red-600 cursor-pointer border-black border">End Sesson</Button> 
        </div>
    );
}
 
export default LaunchCourse;