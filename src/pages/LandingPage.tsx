import { useRef, useEffect, useState } from "react"

export function LandingPage(){
    const homeScrollRef = useRef<HTMLDivElement|null>(null);
    const [homeframe, setHomeframe] = useState(0);

    useEffect(()=>{
        const home = setInterval(()=>{ 
            if(homeframe>=2){
                homeScrollRef.current!.scrollLeft = 0;
                setHomeframe(0);
            }else{
                homeScrollRef.current!.scrollLeft = 340*(homeframe+1);
                setHomeframe(prev=>prev+1);
            }
         }, 4000); 

        return ()=>{
            clearInterval(home);
        }
    }, [homeframe]);

    return(
        <div className="w-full h-full">
            <div className="w-full h-full relative border border-black">
                <div className="w-full h-full absolute z-20 flex flex-col items-center justify-center pt-14 lg:pt-20">
                    <div className="w-72 md:w-[600px] text-white text-2xl md:text-5xl font-bold text-center">
                        Building reliable software solutions that stand the test of time 
                    </div>
                    <div className="flex flex-col items-center justify-center mt-14 md:mt-28 lg:mt-0">
                        <div ref={homeScrollRef} className="snap-x snap-mandatory font-semibold flex flex-row items-center justify-start text-white w-60 md:w-auto h-32 md:h-60 overflow-hidden scroll-smooth">
                            <div className="snap-center min-w-60 max-w-60 md:h-24 text-xs md:text-lg px-10 text-center flex flex-row items-center justify-center">
                                Functional and relevant software designed for longevity and scalability
                            </div>
                            <div className="snap-center min-w-60 max-w-60 h-24 text-xs md:text-lg px-10 text-center flex flex-row items-center justify-center md:border-x-2 border-white">
                                Embracing change and creating solutions that can sky-rockets business growth
                            </div>
                            <div className="snap-center min-w-60 max-w-60 h-24 text-xs md:text-lg px-10 text-center flex flex-row items-center justify-center">
                                Delivering excellence in every project with our seasoned team of experts 
                            </div>
                        </div>
                        <div className="flex md:hidden mt-2">
                            <div className={`${homeframe===0?'bg-white':'bg-transparent'} w-2 h-2 rounded-full border-2 border-white `}></div>
                            <div className={`${homeframe===1?'bg-white':'bg-transparent'} w-2 h-2 rounded-full border-2 border-white mx-2`}></div>
                            <div className={`${homeframe===2?'bg-white':'bg-transparent'} w-2 h-2 rounded-full border-2 border-white `}></div>
                        </div>
                    </div>

                    <button className="mt-14 md:mt-28 lg:mt-8 text-sm md:text-lg lg:text-base text-blue-700 font-semibold bg-white py-2 px-4 md:py-4 md:px-8 lg:py-3 lg:px-6 rounded-md">
                        Build me a solution
                    </button>
                </div>
                <video className="z-10 absolute top-0 object-cover h-full lg:w-full lg:h-auto box-border" autoPlay loop muted>
                    <source src="/bg/video.mp4" type="video/mp4"/>
                </video>    
            </div>

            <div className="w-full h-full flex flex-col items-end justify-center border border-black px-20">
                <div className="relative w-[800px] flex flex-row items-center justify-center border border-black">
                    <div className="z-10 absolute left-0 bg-white flex flex-col items-start justify-center px-8 w-[500px] py-8 rounded-tr-[50px] rounded-br-lg">
                        <div className="w-64 text-xl font-bold text-blue-800">Leverage the power of Software and Automation</div>

                        <div className="mt-2 text-xs">
                            We provide automated solutions and software that help businesses, companies and organizations eliminate repititive tasks
                            optimize of resource usage, lower operational costs, streamline workflows and minimize waste.<br/><br/>
                            Get in touch with us to know our affordable offers that would accelerate your business growth and efficiency.
                        </div>

                        <button className="mt-14 md:mt-28 lg:mt-6 text-sm md:text-lg lg:text-sm bg-blue-700 font-semibold text-white py-2 px-4 md:py-4 md:px-8 lg:py-3 lg:px-6 rounded-md">
                            Check out our service
                        </button>
                    </div>
                    <img alt="neonglobe" className="absolute right-0 w-[600px] rounded-tr-2xl rounded-bl-[80px]" src="/img/globemodel.jpg"/>
                </div>
            </div>
            
        </div>
    )
}