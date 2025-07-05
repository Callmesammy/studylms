"use server"
import {  z } from "zod"
import { formSchema } from "./page"
import { usersTable } from "@/drizzle/db/schema";
import { db } from "@/drizzle/src";

export default async function insertCompanion(formData: z.infer<typeof formSchema>){
 const result = await db.insert(usersTable).values({...formData, createdAt: new Date()}).returning()
  
  return result; 

}


