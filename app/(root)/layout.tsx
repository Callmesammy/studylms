import Headers from "./_componets/header";


interface Homeprops{
    children: React.ReactNode
}

const HomeTxt = ({children}: Homeprops) => {
    return ( 
        <div className="flex flex-col w-full h-full">
            <Headers/>
            <main className="bg-secondary flex w-full h-full px-3 pt-2">
            {children}</main>
        </div>
     );
}
 
export default HomeTxt;