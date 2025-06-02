"use client"

import { searchParams } from "@/app";
import { getComponenting } from "../course/actions";


const Companions = async ({searchParams}:searchParams) => {
const filter = await searchParams;

const subject = filter.subject ? filter.subject :  " ";
const topic = filter.topic? filter.topic : " ";

const companion = await getComponenting({ subject, topic });
console.log(companion)
return (
       <div>
        docue
        </div>
      );

}
 
export default Companions;