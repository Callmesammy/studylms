"use client"
import Image from "next/image";
import Link from "next/link";
import {  courses } from "./_componets";
import { CiBookmark } from "react-icons/ci";
import { IoTimerOutline } from "react-icons/io5";
import { MdOutlineScience } from "react-icons/md";
import { FaCalculator } from "react-icons/fa";
import { PiChatsTeardropDuotone } from "react-icons/pi";
import { MdOutlineComputer } from "react-icons/md";
import { GiNotebook } from "react-icons/gi";
import { GoPlus } from "react-icons/go";



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

{
  id: 2,
  course: "Maths", 
  name: "Algebra: Equations", 
  topic: "Solving Linear Equations", 
  time: 20, 
  duration: "mins durations",
  bookmark: ()=> {}, 
  lunch: ()=> {}, 
  colour: "bg-yellow-300",
  icon: <FaCalculator className="size-7 flex"/>,
},
{
  id: 3,
  course: "Language", 
  name: "Luna, Your Gramma Guide", 
  topic: "Mastering Tenses in English", 
  time: 15, 
  duration: "mins durations",
  bookmark: ()=> {}, 
  lunch: ()=> {}, 
  colour: "bg-sky-300",
  icon: <PiChatsTeardropDuotone className="size-7 flex"/>,
},
{
  id: 4,
  course: "Coding", 
  name: "Codey, the Logic Hacker", 
  topic: "Intro to If-Else Statements", 
  time: 35, 
  duration: "mins durations",
  bookmark: ()=> {}, 
  lunch: ()=> {}, 
  colour: "bg-pink-300",
  icon: <MdOutlineComputer className="size-7 flex"/>,
},
{
  id: 5,
  course: "History", 
  name: "Memo, The Memo Keeper", 
  topic: "World wars: Causes & Effects", 
  time: 25, 
  duration: "mins durations",
  bookmark: ()=> {}, 
  lunch: ()=> {}, 
  colour: "bg-orange-300",
  icon: <GiNotebook className="size-7 flex"/>,
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
      
     <div className="grid md:grid-cols-2 gap-2 w-full h-full">
     <div className="w-full lg:w-[40rem] relative h-full justify-center  border rounded-full bg-black text-white ">
         <div className="w-full absolute h-full bg-orange-300/10 flex"/>
         <div className="flex items-center z-10 w-full h-full justify-center flex-col space-y-2">
          <Link href={"/course"} className="p-2 z-30 rounded text-sm bg-orange-800 hover:bg-orange-400 cursor-pointer">Start learning your way</Link>
          <h1 className="text-md font-semibold text-2xl">Build a Personalize <br/>  learning companion</h1>
          <p className="px-4 text-muted-foreground text-sm text-center">pick a name, subject, voice & personality and start learning through <br/> voice conversations that feel natural and fun </p>
          <Image src="/305.jpg" alt="pic" width={170} height={105} className="object-contain rounded-full flex"/>
          <Link href={"/course"} className="p-2 z-30 rounded text-sm bg-sky-800 hover:bg-sky-400 cursor-pointer  px-auto text-center w-[13rem] flex gap-1 items-center justify-center"> <GoPlus /> Build New Companion</Link>

          </div>
         </div>
        <div className="border p-2 rounded-md w-full lg:w-[43rem] ">
          <h1 className="text-md font-bold">Recently Completed Lessons</h1>
          <div className="w-full justify-between h-full   ">
           <span className="space-y-3 pt-3 w-full flex flex-col justify-between">
           <div className="flex w-full justify-between px-3">
           <h1 className="text-sm text-muted-foreground">Lessons</h1>
           <span className="flex gap-4">
             <h1 className="text-sm text-muted-foreground ">Subjects</h1>
             <h1 className="text-sm text-muted-foreground hidden md:flex">Duration</h1>

           </span>

           </div>
            
            {anotherCourse.map((dt)=>{

              return(
                <Link href={`/course${dt.id}`} key={dt.id} className="w-full flex gap-2 hover:bg-sky-200  space-y-2 items-center">
                   <span className={`"flex p-2 rounded bg w-full" ${dt.colour}`}> {dt.icon} </span> 
                  <div className="w-full flex justify-between gap-5">
                    <span className="flex flex-col w-full ">
                        <h1 className="font-semibold">{dt.name} </h1>
                      <h2 className=" text-sm">Topic: {dt.topic}</h2>
                    </span>
                  

                    </div>
                    <span className="flex gap-2 w- justify-center ">
                    <span className="p-2 border rounded-full w-full items-center  text-sm text-white bg-black font-semibold text-end">
                      {dt.course}
                    </span>
                    <span className="p-1 w-full  hidden md:flex rounded-full items-center text-sm font-semibold text-end">
                      {dt.time} mins
                    </span>
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
