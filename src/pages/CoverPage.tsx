import { PRIMARYBLUE1 } from "../utils/theme"

export function cover(){
    return(
        <div className='w-full h-full border border-black flex flex-col items-center justify-start'>
			<img alt="cover" src="/bg/cover.png" className="absolute w-full h-full"/>
			<div style={{color:PRIMARYBLUE1}} className="w-full h-full flex flex-col items-center justify-center">
				<div className="text-5xl font-regular">RESILIENT</div>
				<div className="mt-2 text-lg font-semibold">...building software solutions that lasts</div>
				<span className="cursor-pointer animate-ping-slow absolute inline-flex h-60 w-60 rounded-full opacity-75 duration-300" style={{backgroundColor:PRIMARYBLUE1}}></span>
			</div>
		</div>
    )
}