import { useRef, useEffect, useState } from "react"
import { PRIMARYBLUE1 } from "../utils/theme";

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
            <div className="w-full h-full relative border border-black overflow-hidden">
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

            <div className="z-20 w-full h-auto flex flex-col items-end justify-start lg:px-14 overflow-hidden">
                <div className="border border-red-700 solid md:mt-10 relative w-full h-[600px] lg:w-[800px] lg:h-[500px] flex flex-row items-center justify-center">
                    <div className="shadow-lg z-10 absolute left-0 bg-white flex flex-col items-start justify-center p-6 md:p-8 w-[300px] md:w-[550px] lg:w-[500px] rounded-tr-[50px] rounded-br-lg">
                        <div className="w-56 md:w-80 lg:w-64 text-lg md:text-2xl lg:text-xl font-bold text-blue-800">Leverage the power of Software and Automation</div>

                        <div className="mt-2 text-[10px] md:text-sm lg:text-xs">
                            We provide automated solutions and software that help businesses, companies and organizations eliminate repititive tasks
                            optimize of resource usage, lower operational costs, streamline workflows and minimize waste.<br/><br/>
                            Get in touch with us to know our affordable offers that would accelerate your business growth and efficiency.
                        </div>

                        <button className="mt-6 md:mt-10 lg:mt-6 text-xs md:text-lg lg:text-sm bg-blue-700 font-semibold text-white py-2 px-4 md:py-4 md:px-8 lg:py-3 lg:px-6 rounded-md">
                            Check out our services
                        </button>
                    </div>
                    <img alt="neonglobe" className="absolute -right-28 md:-right-60 lg:right-0 w-auto lg:h-auto h-[480px] lg:w-[600px] lg:h-auto rounded-tr-2xl rounded-bl-[80px]" src="/img/globemodel.jpg"/>
                </div>
            </div>

            <div className="z-20 w-full h-auto flex flex-col items-start justify-start lg:px-14 overflow-hidden">
                <div className="border border-red-700 solid md:mt-10 relative w-full h-[600px] lg:w-[800px] lg:h-[500px] flex flex-row items-center justify-center">
                    <div className="shadow-lg z-10 absolute right-0 bg-white flex flex-col items-end justify-center p-6 md:p-8 w-[300px] md:w-[550px] lg:w-[500px] rounded-tl-[50px] rounded-bl-lg">
                        <div className="w-36 md:w-80 lg:w-80 text-lg md:text-2xl lg:text-xl font-bold text-blue-800 text-right">Unlocking Order in the Chaos</div>

                        <div className="mt-2 text-[10px] md:text-sm lg:text-xs text-right">
                            Data is everywhere even in businesses, companies and organizations. Large, random but yet very important and holding the key to 
                            optimization of processes and better decision making by administrative bodies.<br/><br/>
                            Use cutting edge technology to reveal hidden patterns in this field of randomness and boost your business to greater levels of growth.
                        </div>

                        <button className="mt-6 md:mt-10 lg:mt-6 text-xs md:text-lg lg:text-sm bg-blue-700 font-semibold text-white py-2 px-4 md:py-4 md:px-8 lg:py-3 lg:px-6 rounded-md">
                            Check out our services
                        </button>
                    </div>
                    <img alt="neonglobe" className="absolute -left-28 md:-left-60 lg:left-0 w-auto w-auto h-[480px] lg:h-auto lg:w-[600px] rounded-tl-2xl rounded-br-[80px]" src="/img/randomwaves.jpg"/>
                </div>
            </div>

            <div className="z-20 w-full h-auto flex flex-col items-end justify-start lg:px-14 overflow-hidden">
                <div className="border border-red-700 solid md:mt-10 relative w-full h-[600px] lg:w-[800px] lg:h-[500px] flex flex-row items-center justify-center">
                    <div className="shadow-lg z-10 absolute left-0 bg-white flex flex-col items-start justify-center p-6 md:p-8 w-[300px] md:w-[550px] lg:w-[500px] rounded-tr-[50px] rounded-br-lg">
                        <div className="w-36 md:w-80 lg:w-80 text-lg md:text-2xl lg:text-xl font-bold text-blue-800">Technology that works for you</div>

                        <div className="mt-2 text-[10px] md:text-sm lg:text-xs">
                            We design custom software and automation tools that simplify operations and elevate efficiency for your 
                            business. Our solutions are built to seamlessly integrate with your workflow, reducing manual tasks and 
                            unlocking greater productivity.<br/><br/>
                            Whether it’s streamlining processes or developing tailored systems, we create technology that works for you.
                        </div>

                        <button className="mt-6 md:mt-10 lg:mt-6 text-xs md:text-lg lg:text-sm bg-blue-700 font-semibold text-white py-2 px-4 md:py-4 md:px-8 lg:py-3 lg:px-6 rounded-md">
                            Check out our services
                        </button>
                    </div>
                    <img alt="neonglobe" className="absolute -right-28 md:-right-60 lg:right-0 h-[480px] lg:w-[600px] rounded-tr-2xl rounded-bl-[80px]" src="/img/datastream.jpg"/>
                </div>
            </div>

            <div className="w-full py-10 md:py-20 lg:px-10 bg-gradient-to-r from-[#000046] to-[#1CB5E0] flex flex-col items-center justify-center">
                <div className="text-xl md:text-3xl font-bold text-white">HOW IT GETS DONE</div>
                <div className="text-white text-sm md:text-lg font-semibold">Easy Process</div>
                <div className="mt-6 w-full md:w-[800px] flex flex-row items-start justify-center flex-wrap border border-white">
                    <div className="border border-white w-36 md:w-56 p-3 md:p-4 shadow-lg rounded-lg mx-4 mb-4">
                        <img alt="ask" className="w-10 md:w-20" src="/img/ask.png"/>
                        <div>
                            <div className="flex flex-row items-center justify-start">
                                <div className="text-lg md:text-3xl font-bold text-white">01</div>
                                <div className="ml-2 md:ml-4 font-semibold text-white text-xs md:text-base">YOU ASK</div>
                            </div>
                            <div className="text-[10px] md:text-sm mt-2 text-white">
                                Get in contact with us using any of our social or contact handles and tell us about the challenge.
                            </div>
                        </div>
                    </div>

                    <div className="border border-white w-36 md:w-56 p-3 md:p-4 shadow-lg rounded-lg mx-4 mb-4">
                        <img alt="build" className="w-10 md:w-20" src="/img/build.png"/>
                        <div>
                            <div className="flex flex-row items-center justify-start">
                                <div className="text-lg md:text-3xl font-bold text-white">02</div>
                                <div className="ml-2 md:ml-4 font-semibold text-white text-xs md:text-base">WE BUILD</div>
                            </div>
                            <div className="text-[10px] md:text-sm mt-2 text-white">
                                We get to work building a system (software) that solves the challenge that was discussed about.
                            </div>
                        </div>
                    </div>
                    
                    <div className="border border-white w-36 md:w-56 p-3 md:p-4 shadow-lg rounded-lg mx-4 mb-4">
                        <img alt="test" className="w-10 md:w-20" src="/img/test.png"/>
                        <div>
                            <div className="flex flex-row items-center justify-start">
                                <div className="text-lg md:text-3xl font-bold text-white">03</div>
                                <div className="ml-2 md:ml-4 font-semibold text-white text-xs md:text-base">YOU TEST</div>
                            </div>
                            <div className="text-[10px] md:text-sm mt-2 text-white">
                                We give you a demo of the solution to test its abilities and determine if it solves the problem.
                            </div>
                        </div>
                    </div>
                    
                    <div className="border border-white w-36 md:w-56 p-3 md:p-4 shadow-lg rounded-lg mx-4 mb-4">
                        <img alt="feedback" className="w-10 md:w-20" src="/img/feedback.png"/>
                        <div>
                            <div className="flex flex-row items-center justify-start">
                                <div className="text-lg md:text-3xl font-bold text-white">04</div>
                                <div className="ml-2 md:ml-4 font-semibold text-white text-xs md:text-base">FEEDBACK</div>
                            </div>
                            <div className="text-[10px] md:text-sm mt-2 text-white">
                                You give us some feedback on what to improve and preferable changes to be made or custom designs.
                            </div>
                        </div>
                    </div>
                    
                    <div className="border border-white w-36 md:w-56 p-3 md:p-4 shadow-lg rounded-lg mx-4 mb-4">
                        <img alt="optimize" className="w-10 md:w-20" src="/img/optimize.png"/>
                        <div>
                            <div className="flex flex-row items-center justify-start">
                                <div className="text-lg md:text-3xl font-bold text-white">05</div>
                                <div className="ml-2 md:ml-4 font-semibold text-white text-xs md:text-base">WE OPTIMIZE</div>
                            </div>
                            <div className="text-[10px] md:text-sm mt-2 text-white">
                                We optimize and improve this software solution for better user experience and system efficiency.
                            </div>
                        </div>
                    </div>
                    
                    <div className="border border-white w-36 md:w-56 p-3 md:p-4 shadow-lg rounded-lg mx-4 mb-4">
                        <img alt="negotiate" className="w-10 md:w-20" src="/img/negotiate.png"/>
                        <div>
                            <div className="flex flex-row items-center justify-start">
                                <div className="text-lg md:text-3xl font-bold text-white">06</div>
                                <div className="ml-2 md:ml-4 font-semibold text-white text-xs md:text-base">WE NEGOTIATE</div>
                            </div>
                            <div className="text-[10px] md:text-sm mt-2 text-white">
                                We negotiate a deal and come to an agreement on the payment for the value we have just delivered.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full py-10 md:py-20 lg:px-10 flex flex-col items-center justify-center overflow-hidden">
                <div className="text-xl md:text-3xl font-bold text-blue-700 mb-10">WHAT WE OFFER</div>

                <div className="border-l-4 md:border-l-8 border-blue-700 w-[300px] md:w-[700px] flex flex-row items-start justify-start shadow-lg py-4 px-3 md:py-6 md:px-8 rounded-r-lg">
                    <img alt="" className="w-6 md:w-10" src="/img/creation.png"/>
                    <div className="ml-3 md:ml-8 flex flex-col items-start justify-start">
                        <div className="text-blue-700 w-36 md:w-auto text-sm md:text-lg font-bold underline">Building Applications and Software</div>
                        <div className="mt-2 text-[10px] md:text-sm">
                            We specialize in building software and applications designed to meet your business's unique needs and solve 
                            the challenges discussed during contact. From concept to deployment, we deliver innovative, scalable solutions 
                            that enhance performance, streamline operations and drive success.<br/><br/>
                            We in creating mobile, desktop and web application software that empowers businesses to thrive in today’s 
                            digital landscape. Whether you're looking to build a user-friendly mobile app, a powerful desktop solution 
                            or a seamless web platform, we craft intuitive, high-performance applications tailored to your goals with 
                            scalable architecture.
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-r-4 md:border-r-8 border-blue-700 w-[300px] md:w-[700px] flex flex-row-reverse items-start justify-end shadow-lg py-4 px-3 md:py-6 md:px-8 rounded-l-lg">
                    <img alt="" className="w-6 md:w-10" src="/img/maintenance.png"/>
                    <div className="mr-3 md:mr-8 flex flex-col items-end justify-start">
                        <div className="text-blue-700 text-sm md:text-lg font-bold underline text-right">Maintaining our products</div>
                        <div className="mt-2 text-[10px] md:text-sm text-right">
                            We offers comprehensive software maintenance services to ensure software that we built for you or was purchased
                            from us runs smoothly and stays up to date. From troubleshooting and bug fixes to updates and performance optimization, 
                            we handle the ongoing care of our software so you can focus on your business.<br/><br/>
                            You also get to enjoy a guarantee for free repairs on all software or application solution built for you or
                            purchased from us. At Resilient we focus on customer satisfaction and our goal is to use tailord software to 
                            solve any challenges/problems faced by our customer's business, company or organization.
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-l-4 md:border-l-8 border-blue-700 w-[300px] md:w-[700px] flex flex-row items-start justify-start shadow-lg py-4 px-3 md:py-6 md:px-8 rounded-r-lg">
                    <img alt="" className="w-6 md:w-10" src="/img/consultancy.png"/>
                    <div className="ml-3 md:ml-8 flex flex-col items-start justify-start">
                        <div className="text-blue-700 text-sm md:text-lg font-bold underline">Consultancy</div>
                        <div className="mt-2 text-[10px] md:text-sm">
                            We provide expert guidance to help you navigate complex software and technology decisions. Whether you’re 
                            looking to optimize existing systems, implement new solutions, or explore cutting-edge innovations, our team 
                            offers strategic insights tailored to your business goals.<br/><br/>
                            From planning to execution, we ensure challenges and problems are duly fixed with software that fits your taste
                            in order to drive efficiency, growth, and long-term success of your business, organization or company.
                        </div>
                    </div>
                </div>
            </div>

            <div className=" mt-10 z-20 w-full h-auto flex flex-col items-center justify-start lg:px-14 overflow-hidden lg:pb-40">
                <div className="border border-red-700 solid md:mt-10 relative w-full h-[135vh] md:h-[90vh] lg:h-[100vh] lg:w-[800px] flex flex-row items-start justify-center">
                    <div className="shadow-lg z-10 absolute top-[20%] right-0 bg-white flex flex-col items-start justify-center p-6 md:p-8 w-full md:w-[550px] lg:w-[550px] rounded-tl-[50px] rounded-bl-lg">
                        <div className="font-bold text-lg md:text-2xl mb-4">Connect With Us Today<br/>Let's Build A Solution</div>
                    
                        <label className="text-xs md:text-sm font-semibold text-slate-500">Company Name</label>
                        <input type="text" className="mb-4 w-full border-b border-slate-400 text-xs md:text-sm py-2 focus:outline-none active:outline-none"/>
                        
                        <label className="text-xs md:text-sm font-semibold text-slate-500">Company Address</label>
                        <input type="text" className="mb-4 w-full border-b border-slate-400 text-xs md:text-sm py-2 focus:outline-none active:outline-none"/>

                        <div className="flex flex-row items-center justify-between">
                            <div className="w-[48%]">
                            <label className="text-xs md:text-sm font-semibold text-slate-500">Your Name</label>
                            <input type="text" className="mb-4 w-full border-b border-slate-400 text-xs md:text-sm py-2 focus:outline-none active:outline-none"/>
                            </div>
                            <div className="w-[48%]">
                            <label className="text-xs md:text-sm font-semibold text-slate-500">Your Role</label>
                            <input type="text" className="mb-4 w-full border-b border-slate-400 text-xs md:text-sm py-2 focus:outline-none active:outline-none"/>
                            </div>
                        </div>

                        <div className="flex flex-row items-center justify-between">
                            <div className="w-[48%]">
                            <label className="text-xs md:text-sm font-semibold text-slate-500">Phone Number</label>
                            <input type="phone" className="mb-4 w-full border-b border-slate-400 text-xs md:text-sm py-2 focus:outline-none active:outline-none"/>
                            </div>
                            <div className="w-[48%]">
                            <label className="text-xs md:text-sm font-semibold text-slate-500">Email</label>
                            <input type="email" className="mb-4 w-full border-b border-slate-400 text-xs md:text-sm py-2 focus:outline-none active:outline-none"/>
                            </div>
                        </div>

                        <label className="text-xs md:text-sm font-semibold text-slate-500">Details</label>
                        <textarea className="resize-none mb-4 w-full h-28 border-b border-slate-400 text-xs md:text-sm py-2 focus:outline-none active:outline-none" placeholder="Tell us everything you can, we'll reach out to you for further enquiries"></textarea>
                    
                        <button className="mt-6 md:mt-10 lg:mt-6 text-xs md:text-lg lg:text-sm font-semibold text-white py-2 px-4 md:py-4 md:px-8 lg:py-3 lg:px-6 rounded-md" style={{backgroundColor:PRIMARYBLUE1}}>
                            Reach out to us
                        </button>
                    </div>
                    <img alt="neonglobe" className="absolute block -left-0 md:-left-60 lg:left-0 w-auto h-auto lg:w-[600px] rounded-tl-2xl rounded-br-[80px]" src="/img/supportimg.jpg"/>
                </div>
            </div>

            <div className="py-6 md:py-8 px-5 md:px-10 lg:px-12 flex flex-col items-start justify-start" style={{background:PRIMARYBLUE1}}>
                <div className="w-full flex flex-col md:flex-row items-start justify-start">
                    <div>
                        <div className="font-regular text-sm md:text-xl text-white">RESILIENT SOFTWARE CO.</div>
                        <div className="text-white text-xs">Building reliable solutions that stands the test of time</div>
                    </div>
                    <div className="mt-6 md:mt-0 ml-0 md:ml-20 text-white flex flex-col items-start justify-start">
                        <div className="text-xs md:text-base flex flex-row items-center justify-start mb-2 md:mb-4">
                            <img className="w-3 md:w-5 mr-2" src="/img/phone.png"/>
                            +234 706 965 1848
                        </div>
                        <div className="text-xs md:text-base flex flex-row items-center justify-start mb-2 md:mb-4">
                            <img className="w-3 md:w-5 mr-2" src="/img/email.png"/>
                            resilientcompany@gmail.com
                        </div>
                    </div>
                </div>
                    
                <div className="text-xs md:text-sm font-semibold w-full text-center pt-10 text-white">
                    Resilient Software Co. &copy; 2024
                </div>
            </div>
        </div>
    )
}