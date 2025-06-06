
"use client"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { formUrlQuery, removeKeysFromUrlQuery } from "@jsmastery/utils";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
  
const FilterInput = () => {

    const params = useParams()
    const searchParams = useSearchParams()
    const router = useRouter()
    const query = searchParams.get('course') || " ";
    const [queryChange, setQueryChange] = useState("")
   
    useEffect(()=>{
        if(queryChange){
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "course",
                value: queryChange,
              });
              
              router.push(newUrl, {scroll: false});
        }else{
            const newUrl = removeKeysFromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ["course"],
              });
              
              router.push(newUrl, { scroll: false });
        }
    },[params, searchParams, router, queryChange])
   
    return ( 
        <div className="w-52 flex p-1 border rounded-md ">
 <Select onValueChange={setQueryChange} defaultValue={queryChange} value={queryChange} >
                  <SelectTrigger>
                    <SelectValue placeholder="Select course      "  className="w-full flex p-1 "/>
                  </SelectTrigger>
                <SelectContent >
                  <SelectItem value="costing">Cost Accounting</SelectItem>
                  <SelectItem value="accounting">Financial Accounting</SelectItem>
                  <SelectItem value="management">Management Account</SelectItem>
                  <SelectItem value="maths">Mathematics</SelectItem>

                </SelectContent>
              </Select>      
                </div>
     );
}
 
export default FilterInput;