import { Navbar } from "./components/Navbar"
import { LandingPage } from "./pages/LandingPage"

function App() {
	return (
		<div className='w-full h-full flex flex-col items-center justify-start'>
			<Navbar/>
			<LandingPage/>
		</div>
	)
}

export default App
