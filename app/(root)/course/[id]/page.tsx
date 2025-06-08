import { db } from "@/drizzle/src";
import { usersTable } from "@/drizzle/db/schema";
import { eq } from "drizzle-orm";
import { notFound } from "next/navigation";
import Image from "next/image";
import LaunchCourse from "../../_componets/launch-course";


const Compan = async ({ params }: { params: { id: number } }) => {

  const result = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.id, params.id)); // ✅ string to string

  const user = result[0];

  if (!user) return notFound();


  return (
    <div className="w-full flex pt-3 flex-col">
      <div className=" flex gap-2 border items-center rounded-md w-full h-42 border-black bg-white px-3  ">
        <div className="w-32 h-22 flex relative">
         <Image src={user.icon} alt="images" fill className="border  rounded-md p-2 shadow"/>

        </div>
        <div className="w-full justify-between flex ">
          <div className="flex flex-col">
        <span className="flex gap-4 items-center">
           <h1 className="text-lg md:text-2xl font-bold">{user.name}</h1>
          <p className="text-sm rounded-full bg-black text-white font-semibold p-2 capitalize">{user.course}</p> </span>
          <p className="text-md">Topic: {user.topic}</p>
        </div>
        </div>
        
      <p className=" gap-1 w-32 md:flex hidden">{user.time} mins</p>
      </div>
     <div className="pt-3 grid gap-3 md:grid-cols-[2fr_1fr] w-full">
        <div className="border rounded-md border-black bg-white h-[400px] flex items-center justify-center flex-col">
        <Image src={user.icon} alt="images" width={100} height={55} className="border  rounded-md p-2 shadow"/>
        <h1 className="text-lg md:text-2xl font-bold">{user.name}</h1>

        </div>
        <div className="flex w-full h-[400px] flex-col space-y-3">
        <div className="border border-black rounded-md bg-white  h-62 flex items-center justify-center flex-col">
        <Image src={user.icon} alt="images" width={100} height={55} className="border  rounded-md p-2 shadow"/>
        <h1 className="text-lg md:text-2xl font-bold">user</h1>
          </div>
         <LaunchCourse id={user} />

        </div>
     </div>
    </div>
  );
};

export default Compan;
