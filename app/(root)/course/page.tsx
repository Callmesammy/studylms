"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
 
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { CiImageOn } from "react-icons/ci";
import Image from "next/image"
import { Loader2 } from "lucide-react"
import { createClient } from "@/utils/supabase/client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import insertCompanion from "./actions"
import { time } from "console"


 export const formSchema = z.object({
  icon: z.string().min(1, {
    message: "fix"
  }),
  name: z.string().min(4 ,{
    message: "Enter name"
  }),
  topic: z.string().min(1 ,{
    message: "pic an image"
  }),
  time: z.coerce.number().min(1 ,{
    message: "number of mins"
  }),
  course: z.string().min(1 ,{
    message: "name of course"
  }), 
   style: z.string().min(1 ,{
    message: "Lecture style"
  }),
})

const Register = () => {
  const [loading, setLoading] = useState(false)
  const [showImage, setshowImage] = useState<string | null>(null)
const router = useRouter()
    // 1. Define your form.

    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
      },
    })
  
    // 2. Define a submit handler.
     async function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
      // supabase createclient 

        try{
          const companions = await insertCompanion(values)
          if(companions){
            router.push("/companions")
            toast.success("Companion created successfully")
          }else{ 
            console.error("something went wrong")
          }
        
         
        }catch (error){
          console.error("Something went wrong", error)
        } finally{
          setLoading(false)
        }
      console.log(values)
    }

  return (  
    <div className="w-full px-2 pt-3 shadow-md flex-col space-y-3 flex border rounded-md bg-white p-2 items-center justify-center h-screen">
      <h1 className="font-semibold text-xl capitalize">Register a course </h1>

      

      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-[26rem]">
      <div className="flex gap-3 w-full items-center">  
        {showImage? (
          <div className="w-[6rem] h-[5rem] rounded-md border flex relative items-center justify-center">
              <Image src={showImage} alt="showImage" fill className="object-contain" onChange={()=> window.open(showImage)}/>
          </div>
        ):(
          <div className="w-[6rem] h-[5rem] rounded-md border flex items-center justify-center">
            <CiImageOn className="size-10 text-muted-foreground" />
          </div>
        )}    
      <FormField
          control={form.control}
          name="icon"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Compannion icon</FormLabel>
              <FormControl>
                <Input disabled={loading} accept="image/*" type="file" placeholder="shadcn" 
                  onChange={(e)=>{
                    const file = e.target.files?.[0]
                    if (file){
                      const url = URL.createObjectURL(file)
                      setshowImage(url)
                      field.onChange(file)
                      
                      const read = new FileReader()
                      read.onloadend = () =>{
                        const based = read.result as string;
                        field.onChange(based)
                      }
                      read.readAsDataURL(file)
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
</div>
       
          <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Companion name</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="Enter companion name eg. Smartestking"  {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      
          <FormField
          control={form.control}
          name="topic"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What do you want to learn?</FormLabel>
              <FormControl>
                <Input disabled={loading} placeholder="What are you willing to learn" {...field}  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subjects</FormLabel>
              <Select disabled={loading} onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select course" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="costing">Cost Accounting</SelectItem>
                  <SelectItem value="accounting">Financial Accounting</SelectItem>
                  <SelectItem value="management">Management Account</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="style"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Speaking style</FormLabel>
              <Select disabled={loading} onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue  placeholder="Select your speaking styke" className="flex flex-col w-[16rem]"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="casual">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="time"
          render={({ field }) => (
            <FormItem>
              <FormLabel>how many minutes</FormLabel>
              <FormControl>
                <Input disabled={loading} type="number" placeholder="how many minutes" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit" className="bg-sky-900 hover:bg-sky-400 w-full cursor-pointer">Register Companion {loading && <Loader2 className="animate-spin size-4 "/> }</Button>
      </form>
    </Form>
    </div>
  );
}
 
export default Register;