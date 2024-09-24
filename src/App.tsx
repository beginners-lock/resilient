import { Navbar } from "./components/Navbar"
import { LandingPage } from "./pages/LandingPage"
import { useState, useEffect, useRef } from "react";

function App() {
	const bodydivref = useRef<HTMLDivElement|null>(null);
	const [navtop, setNavTop] = useState("0px");
	const [curscrolldist, setCurScrollDist] = useState(0);

	useEffect(()=>{
		bodydivref.current!.onscroll = () => {
			if (bodydivref.current!.scrollTop > curscrolldist) {
				setNavTop("-50px");
				setCurScrollDist(bodydivref.current!.scrollTop)
			}
			
			if(bodydivref.current!.scrollTop < curscrolldist){
				setNavTop("0px");
				setCurScrollDist(bodydivref.current!.scrollTop);
			}
		}
	}, [curscrolldist])

	return (
		<div ref={bodydivref} className='relative w-full h-full overflow-y-auto flex flex-col items-center justify-start'>
			<Navbar
				top={navtop}
			/>
			<LandingPage/>
		</div>
	)
}

export default App
