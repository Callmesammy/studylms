"use client"
 
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
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

const formSchema = z.object({
  username: z.string().min(2).max(50),
})

const Register = () => {
  const [showImage, setshowImage] = useState<string | null>(null)

    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        username: "",
      },
    })
   
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
      // Do something with the form values.
      // ✅ This will be type-safe and validated.
      console.log(values)
    }

  return (  
    <div className="w-full pt-3 shadow-md flex-col space-y-3 flex border rounded-md bg-white p-2 items-center justify-center h-screen">
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
                <Input accept="image/*" type="file" placeholder="shadcn" 
                  onChange={(e)=>{
                    const file = e.target.files?.[0]
                    if (file){
                      const url = URL.createObjectURL(file)
                      setshowImage(url)
                      field.onChange(file)
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
                <Input placeholder="Enter companion name eg. Smartestking" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Subject</FormLabel>
              <FormControl>
                <Input placeholder="Enter Subject eg. Accounting" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
          <FormField
          control={form.control}
          name="learn"
          render={({ field }) => (
            <FormItem>
              <FormLabel>What do you want to learn?</FormLabel>
              <FormControl>
                <Input placeholder="What are you willing to learn" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

<FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a verified email to display" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

         <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Speaking style</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your speaking styke" className="w- flex flex-col w-[16rem]"/>
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="casual">Casua</SelectItem>
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
          name="email"
          render={({ field }) => (
            <FormItem >
              <FormLabel>Language</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} >
                <FormControl >
                  <SelectTrigger >
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value="english">English</SelectItem>
                  <SelectItem value="spanish">Spanish</SelectItem>
                  <SelectItem value="french">French</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="bg-sky-900 hover:bg-sky-400 w-full cursor-pointer">Register Companion</Button>
      </form>
    </Form>
    </div>
  );
}
 
export default Register;