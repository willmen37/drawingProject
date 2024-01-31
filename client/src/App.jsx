import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import { useState, useEffect } from "react";

import { logo2 } from "./assets";
import { Home, CreateArt, About, Login, Register, Profile, TryMe } from "./pages";


const App = () => {

	const [user, setUser] = useState({})

	

	return (
    
		<BrowserRouter>
		
			<main className= "w-full flex bg-[url('./assets/background1.jpg')] bg-center bg-cover sm:p-8 px4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">

				<div className="h-full flex bg-black text-gray-900">

					<aside className="flex h-screen w-25 flex-col justify-around   border-r border-gray-200 p-2 fixed  ">
						<Link to="/" >
							<img src={logo2} alt="logo2" className=" mb-9 w-28 object-contain rounded-md" />
						</Link>
						<Link
							to="/tryMe"
							className=' mt-3 bg-[#EF4444] py-1 px-2 rounded text-white text-center border-solid border-2  text-[22px]'
						>
							Try drAwIng
						</Link>


						<Link
							to="/register"
							className=' mb-5 bg-[#EF4444] py-1 px-2 rounded text-white text-center border-solid border-2 text-[22px]'
						>
						    Register
						</Link>

						<Link
						to="/login"
						className=' mb-5 bg-[#EF4444] py-1 px-2 rounded text-white text-center border-solid border-2 text-[22px]'
						>
						Log In	
						</Link>

            			<Link
							to="/about"
							className=' mb-9 bg-[#EF4444] py-1 px-2 rounded text-white text-center border-solid border-2 text-[22px]'
						>
							About
						</Link>

					

						
					</aside>
				</div>

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/create-art" element={<CreateArt />} />
					<Route path="/tryMe" element={<TryMe />} />
					<Route path="/about" element={<About />} />
					<Route path="/login" element={<Login setUser={setUser}  />} />
					<Route path="/register" element={<Register setUser={setUser}  />} />
					<Route path="/profile" element={<Profile username={user.username} email={user.email} />} />

				</Routes>
			</main>

		</BrowserRouter>
	);
};

export default App;
