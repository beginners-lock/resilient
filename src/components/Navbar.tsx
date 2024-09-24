import { PRIMARYBLUE1 } from "../utils/theme";

type NavbarProps = {
    top: string
}

export function Navbar({ top }: NavbarProps){
    return(
        <div style={{top:top}} className="z-30 fixed bg-white flex w-full lg:w-[99%] py-3 md:py-5 px-3 md:px-12 border-b border-slate-300 duration-150">
            <div className="font-regular text-[10px] md:text-lg" style={{color:PRIMARYBLUE1}}>RESILIENT</div>
        </div>
    )
}