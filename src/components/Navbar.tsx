import { PRIMARYBLUE1 } from "../utils/theme";

export function Navbar(){
    return(
        <div className="sticky top-0 w-full py-3 md:py-5 px-3 md:px-12 border-b border-slate-300">
            <div className="font-regular text-[10px] md:text-lg" style={{color:PRIMARYBLUE1}}>RESILIENT</div>
        </div>
    )
}