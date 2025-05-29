"use client"
import { createClient } from "@/utils/supabase/client";
import { useEffect, useState } from "react";
import { AddCompannion } from "../_componets/companion-card";
import { Skeleton } from "@/components/ui/skeleton";


interface ZMprops{
    id?: number,
    course?: string,
    learn?: string,
    topic?: string, 
    mins?: number,
    duration?: string,
    bookmark?: ()=> {}, 
    lunch?: ()=> {}, 
    colour?: string
}
const Companions = () => {
    const [addDoc, setaddDoc] = useState<ZMprops[]>()

    useEffect(()=>{
        documents()
    },[])
    const documents = async ()=>{
        const supabase = await createClient()
        const {data, error}= await supabase.from("companion").select("*")
        if(data){
        setaddDoc(data)
        }
        else{
            console.error("Something went wrong", error)
        }
    }
    if (!addDoc){
        return(
            <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-2 p-4 ">
            <Skeleton className="h-[25px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <Skeleton className="h-[25px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <Skeleton className="h-[25px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <Skeleton className="h-[25px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        )
    }
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-2 p-4 ">
            {addDoc?.map((file)=>(
                <AddCompannion key={file.id} {...file}/>
            ))} 
        </div>
      );

}
 
export default Companions;