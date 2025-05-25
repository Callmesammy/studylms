import Headers from "./_componets/header";


interface Homeprops{
    children: React.ReactNode
}

const HomeTxt = ({children}: Homeprops) => {
    return ( 
        <div className="flex flex-col w-full h-full">
            <Headers/>
            <main>
            {children}</main>
        </div>
     );
}
 
export default HomeTxt;