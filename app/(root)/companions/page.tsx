"use client"

import { searchParams } from "@/app";
import { getComponenting } from "../course/actions";
import { AddCompannion } from "../_componets/companion-card";
import SearchHere from "../_componets/search-file";
import FilterInput from "../_componets/filter-input";



const CompanionDocuments = async ({searchParams}: searchParams) => {
    const filters = await searchParams;
    const subject = filters.subject ? filters.subject : " ";
    const topic = filters.topic ?  filters.topic : " ";

    const companion = await getComponenting({ subject, topic})
    return (
        <div className="w-full flex mb-3 flex-col space-y-2.5 bg-white px-2">
            <h1 className="font-semibold text-2xl text-pretty">Companion Library</h1>

            <div className="flex gap-4">

                            <SearchHere/>
                            <FilterInput/>

            </div>
             <div className="grid h-full md:grid-cols-2 lg:grid-cols-3 gap-2 items-center w-full justify-center pt-3 ">
            {companion.map((doc)=>(
                <AddCompannion key={doc} {...doc}/>
))}
        </div>
        hj
        </div>
       
      );
    }
 
export default CompanionDocuments;