"use client"

import {  z } from "zod"
import { formSchema } from "./page"
import { createClient } from "@/utils/supabase/client"

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