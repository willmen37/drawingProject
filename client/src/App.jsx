import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { logo2} from "./assets";
import { Home, CreateArt } from "./pages";

/*
<header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4]">
				<Link to="/">
					<img src={logo} alt="logo2" className="w-28 object-contain" />
				</Link>
				<Link
					to="/create-art"
					className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
				>
					Gallerie
				</Link>
			</header>
*/

const App = () => {
	return (
     
 

    
		<BrowserRouter>
		
			<main className= "w-full flex justify-between bg-[url('./assets/background1.jpg')] bg-center bg-cover sm:p-8 px4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">

				<div className="h-full flex bg-black text-gray-900">

					<aside className="flex h-screen w-25 flex-col justify-between  items-center border-r border-gray-200 p-2 fixed  ">
						<Link to="/" >
							<img src={logo2} alt="logo2" className="w-28 object-contain rounded-md" />
						</Link>
						<Link
							to="/create-art"
							className=' mb-1 bg-[#EF4444] py-1 px-2 rounded text-white border-solid border-2  text-[22px]'
						>
							Art Shop
						</Link>

            			<Link
							to="/create-art"
							className=' mb-1 bg-[#EF4444] py-1 px-2 rounded text-white border-solid border-2 text-[22px]'
						>
							About me
						</Link>

						<Link
							to="/create-art"
							className="font-inter px-4 py-2 rounded-md"
						>
							
						</Link>
					</aside>
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create-art" element={<CreateArt />} />
				</Routes>
			</main>

		</BrowserRouter>
	);
};

export default App;
