"use client"

import {  z } from "zod"
import { formSchema } from "./page"
import { createClient } from "@/utils/supabase/client"
import { getComponents } from "@/app"

interface file {
    error: null| string, 
    success: boolean, 
    data: unknown | null
}

export default async function insertCompanion(formData: z.infer<typeof formSchema>): Promise<file>{
   
  
    const supabase = await createClient()
    const {data, error} = await supabase.from("companion").insert({...formData})
  
    return {
        error: error?.message || "Something went wrong", 
        success: !error,
        data: data
    }

}

export async function getComponenting({limit = 10, page =1, topic, subject}: getComponents) {
   const supabase = await createClient()
   let query = supabase.from("companion").select()
   if(topic && subject){
    query = query.ilike("select", `${subject}%`)
    .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)  
}  else if(subject){
    query = query.ilike("subject", `${subject}%`)
}else if(topic){
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`)
}
query = query.range((page -1) * limit, page * limit -1 )

const {data: companion, error} = await supabase.from("companion").select()
if(!companion){throw new Error(error.message)}
return companion;
}