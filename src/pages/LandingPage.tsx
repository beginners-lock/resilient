export function LandingPage(){
    return(
        <div className="w-full h-full">
            <div className="w-full h-full relative border border-black">
                <div className="w-full h-full absolute z-20 flex flex-col items-center justify-center">
                    <div className="w-72 md:w-[600px] text-white text-2xl md:text-5xl font-bold text-center">
                        Building reliable software solutions that stand the test of time 
                    </div>
                    <div>

                    </div>
                    <div className="flex flex-row items-center justify-center border border-white mt-20">
                        <img alt="left" src="/img/left.png" className="w-4 mr-2"/>
                        <div>
                            <div className="flex flex-row items-center justify-start text-white w-60 md:w-auto h-32 md:h-60 overflow-hidden border-white border">
                                <div className="min-w-60 max-w-60 md:h-24 text-xs md:text-lg px-10 text-center flex flex-row items-center justify-center">
                                    Functional and relevant software designed for longevity and scalability
                                </div>
                                <div className="min-w-60 max-w-60 h-24 text-base md:text-lg px-10 text-center flex flex-row items-center justify-center border-x-2 border-white">
                                    Embracing change and creating solutions that can sky-rockets business growth
                                </div>
                                <div className="min-w-60 max-w-60 h-24 text-base md:text-lg px-10 text-center flex flex-row items-center justify-center">
                                    Delivering excellence in every project with our seasoned team of experts 
                                </div>
                            </div>
                            <div>
                                
                            </div>
                        </div>
                        <img alt="right" src="/img/right.png" className="w-4 ml-2"/>
                    </div>
                </div>
                <video className="z-10 absolute top-0 object-cover h-full lg:w-full lg:h-auto box-border" autoPlay loop muted>
                    <source src="/bg/video.mp4" type="video/mp4"/>
                </video>    
            </div>

            
        </div>
    )
}