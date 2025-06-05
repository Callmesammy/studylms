"use server"
import {  z } from "zod"
import { formSchema } from "./page"
import { db } from "@/drizzle/src";
import { usersTable } from "@/drizzle/db/schema";

export default async function insertCompanion(formData: z.infer<typeof formSchema>){
 const result = await db.insert(usersTable).values({...formData, createdAt: new Date()}).returning()
  
  return result; 

}


