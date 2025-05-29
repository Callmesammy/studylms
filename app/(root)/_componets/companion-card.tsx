import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

import { IoTimerOutline } from "react-icons/io5"
import Link from "next/link"
import { CiBookmark } from "react-icons/ci"

interface cardProps {
    id?: number,
    icon?: string,
    course?: string,
    name?: string,
    topic?: string, 
    time?: number,
    duration?: string,
    bookmark?: ()=> {}, 
    lunch?: ()=> {}, 
    colour?: string

}
export function AddCompannion({
    id,
    icon,
    course,
    name,
    topic,
    time,
    duration,
    bookmark,
    lunch,
    colour,

}: cardProps) {
  return (
    <Card className={`"w-[350px] border border-black  " ${colour}`}>
     
      <CardContent>
        {icon ?( <div>
                    <img src={icon} alt="icon" width={100} height={90} className="rounded-md"/>
        </div>):(
            <div>

            </div>
        )}
      <div key={id} className={`"flex  rounded-lg px-3 " ${colour}`}>
            <div className="justify-between w-full px-4 pt-6 flex ">
              <span className="bg-black text-white text-sm p-2 rounded">{course}</span>
            
              <span onClick={bookmark}  className="bg-black text-white text-sm p-2 rounded">  <CiBookmark className="size-4"/>
              </span>
            </div>
            <div className="flex space-y-3 px-3 pt-3 flex-col ">
            <h1 className="font-bold text-xl">{name}</h1>
            <h2 className=" text-md">Topic: {topic}</h2>
            <div className="flex space-x-2 items-center">
            <IoTimerOutline />
            <h1 className="text-sm">{time} {duration}</h1>
            </div>
            </div>
            <div className="pt-5">
            </div>
          </div>
      </CardContent>
      <CardFooter className="flex justify-between">
                   <Link href={`/course${id}`} onClick={lunch} className=" px-4 w-full bg-red-500 p-2 flex items-center rounded-md text-center hover:bg-red-700 justify-center text-md font-semibold text-white">Launch Lesson</Link>

      </CardFooter>
    </Card>
  )
}
