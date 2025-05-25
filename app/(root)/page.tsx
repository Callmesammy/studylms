"use client"
import Image from "next/image";
import Link from "next/link";
import { courses } from "./_componets";
import { CiBookmark } from "react-icons/ci";
import { IoTimerOutline } from "react-icons/io5";


export default function Home() {
  return (
    <div className="w-full h-full flex pt-3 px-3 mb-3 "> 
    <div className="flex w-full h-full flex-col">
       <h1 className="text-2xl font-bold">Dashboard</h1>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full h-full lg:h-[17rem] gap-2 p-4 ">
        {courses.map((doc)=>(
          <div key={doc.id} className={`"flex border border-black rounded-lg px-3 " ${doc.colour}`}>
            <div className="justify-between w-full px-4 pt-6 flex ">
              <span className="bg-black text-white text-sm p-2 rounded">{doc.course}</span>

              <span onClick={doc.bookmark}  className="bg-black text-white text-sm p-2 rounded">  <CiBookmark className="size-4"/>
              </span>
            </div>
            <div className="flex space-y-3 px-3 pt-3 flex-col ">
            <h1 className="font-bold text-xl">{doc.name}</h1>
            <h2 className=" text-md">{doc.topic}</h2>
            <div className="flex space-x-2 items-center">
            <IoTimerOutline />
            <h1 className="text-sm">{doc.time} {doc.duration}</h1>
            </div>
            </div>
            <div className="pt-5">
            <Link href={`/course${doc.id}`} onClick={doc.lunch} className=" px-4 w-full bg-red-500 p-2 flex items-center rounded-md text-center hover:bg-red-700 justify-center text-md font-semibold text-white">Launch Lesson</Link>


            </div>
          </div>
        ))}
      </div>
      </div> 


      </div>   

    
  );
}
