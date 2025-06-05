"use client"

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { formUrlQuery } from '../../../node_modules/@jsmastery/utils/dist/index';

const SearchHere = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathName = usePathname()

    const query = searchParams.get('topic') || ''

    const [searchQuery, setSearchQuery] = useState("")

    useEffect(()=>{
        if(searchQuery){
            const newUrl = formUrlQuery({
                params: searchParams.toString(),
                key: "topic",
                value: searchQuery,
              });
              
              router.push(newUrl, {scroll: false});
        }
    },[searchParams, router, pathName, searchQuery]);
    return ( 
        <div className="w-42 md:w-62 border rounded-lg flex p-2 items-center gap-1">
        <CiSearch className="size-5"/>
        <Input value={searchQuery} onChange={(e)=> setSearchQuery(e.target.value)} placeholder="Search here....." className="italic text-sm w-full h-full border-0"/>
    </div>
     );
}
 
export default SearchHere;