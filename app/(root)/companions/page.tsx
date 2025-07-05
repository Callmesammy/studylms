import SearchHere from "../_componets/search-file";
import FilterInput from "../_componets/filter-input";
import { usersTable } from "@/drizzle/db/schema";
import { db } from "@/drizzle/src";
import { AddCompannion } from "../_componets/companion-card";
import { Suspense } from "react";



const CompanionDocuments = async () => {
    
        const users = (await db.select().from(usersTable));
     return (
        <div className="w-full flex mb-3 flex-col space-y-2.5 bg-white px-2">
            <h1 className="font-semibold text-2xl text-pretty">Companion Library</h1>

            <div className="flex gap-4">
              <Suspense fallback= {<p>Loading search...</p>}>

              <SearchHere/>
              <FilterInput/>
              </Suspense>

            </div>
             <div className="grid h- md:grid-cols-2 lg:grid-cols-3 gap-2  w-full   ">
              {users.map((companions)=>(
                    <AddCompannion key={companions.id} {...companions}/>
                ))}
        </div>
        </div>
       
      );
    }
 
export default CompanionDocuments;