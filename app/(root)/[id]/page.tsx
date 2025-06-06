import { usersTable } from "@/drizzle/db/schema";
import { db } from "@/drizzle/src";
import { eq } from "drizzle-orm";

const Compan = async ({params}: {params: {id: number}}) => {
    const result = await db.select().from(usersTable).where(eq(usersTable.id, params.id));
    return ( 
        <div className="flex pt-3 px-2 w-full">
            <div className="w-full border border-black rounded-md h-32 flex bg-white">
                {result.map((kit)=>(
                    <div key={kit.id} className="flex gap-2 w-full">
                    <img src={kit.icon} alt="img" width={70} height={55} className="p-2 rounded-md"/>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default Compan;