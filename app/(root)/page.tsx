"use client"
import Image from "next/image";
import Link from "next/link";
import {  courses } from "./_componets";
import { CiBookmark } from "react-icons/ci";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineScience } from "react-icons/md";



export const anotherCourse =[
  {
  id: 1,
  course: "Science", 
  name: "Neura the Brainy Explorer", 
  topic: "Neural Network of the Brain", 
  time: 45, 
  duration: "mins durations",
  bookmark: ()=> {}, 
  lunch: ()=> {}, 
  colour: "bg-purple-300",
  icon: <MdOutlineScience className="size-7 flex"/>,
},


]
export default function Home() {
  return (
    <div className="w-full h-full flex pt-3 px-3 mb-3  "> 
    <div className="flex w-full h-full flex-col ">
       <h1 className="text-2xl font-bold">Dashboard</h1>
 <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full h- lg:h-[17rem] gap-2 p-4 ">
        {courses.map((doc)=>(
          <div key={doc.id} className={`"flex border border-black rounded-lg px-3 " ${doc.colour}`}>
            <div className="justify-between w-full px-4 pt-6 flex ">
              <span className="bg-black text-white text-sm p-2 rounded">{doc.course}</span>

              <span onClick={doc.bookmark}  className="bg-black text-white text-sm p-2 rounded">  <CiBookmark className="size-4"/>
              </span>
            </div>
            <div className="flex space-y-3 px-3 pt-3 flex-col ">
            <h1 className="font-bold text-xl">{doc.name}</h1>
            <h2 className=" text-md">Topic: {doc.topic}</h2>
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
     <div className="w-full h-full flex gap-3  ">
        <div className="border p-2 rounded-md w-full">
          <h1 className="text-md font-bold">Recently Completed Lessons</h1>
          <div className="w-full justify-between h-full   ">
           <span className="space-y-3 pt-3 w-full flex flex-col justify-between">
           <div className="flex w-full justify-between px-2">
           <h1 className="text-sm text-muted-foreground">Lessons</h1>
           <span>
             <h1 className="text-sm text-muted-foreground">Subjects</h1>

           </span>

           </div>
            
            {anotherCourse.map((dt)=>{

              return(
                <Link href={`/course${dt.id}`} key={dt.id} className="w-full flex gap-2 hover:bg-secondary  ">
                   <span className={`"flex p-3 rounded bg w-full" ${dt.colour}`}> {dt.icon} </span> 
                  <div className="w-full flex justify-between gap-10">
                    <span className="flex flex-col w-full ">
                        <h1 className="font-semibold">{dt.name} </h1>
                      <h2 className=" text-sm">Topic: {dt.topic}</h2>
                    </span>
                  

                    </div>

                    <span className="p-2 border rounded-full items-center flex text-sm text-white bg-black font-semibold text-end">
                      {dt.course}
                    </span>
                </Link>
              )
            })}
           </span>
           
          </div>
        </div>
      
      </div> 
      </div> 


      </div>   

    
  );
}
