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


    return (
       <div>
        docue
        </div>
      );

}
 
export default Companions;