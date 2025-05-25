"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"
import { GoSidebarExpand } from "react-icons/go";
import { Headstcky } from "./header"
import Link from "next/link"

const SHEET_SIDES = ["top",] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
    const [onEnter, setOnEnter] = useState(false)
    
return (
    <div className="w-full h-full ">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} open={onEnter} onOpenChange={setOnEnter} >
          <SheetTrigger asChild>
            <Button variant="outline">
         <GoSidebarExpand />

            </Button>
          </SheetTrigger>
          <SheetContent  side={side} className="w-full items-center flex justify-center h-[17rem]">
            <SheetHeader>
              <SheetTitle></SheetTitle>
              
            </SheetHeader>
           {
            Headstcky.map((items, keys)=>(
                <Link onClick={()=>setOnEnter(false)} href={items.url} key={keys} className=" text-center font-bold text-2xl flex flex-col w-full items-cent justify-center">
                    {items.name}
                </Link>
            ))
           }

            <SheetFooter>
              <SheetClose asChild>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
