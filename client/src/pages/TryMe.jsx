
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormInput, Loading } from "../components";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const tryMe = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		prompt: "",
		photo: "",
	});

	const [generatingImg, setGeneratingImg] = useState(false);
	const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    if(form.prompt){
      try{
        setGeneratingImg(true);
        const response = await fetch("http://localhost:5000/api/v1/openaiRoute",{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({prompt: form.prompt})
        })

        const data = await response.json();

        setForm({...form, photo: `data:image/jpeg;base64,${data.photo}`})
      }catch(error){
        alert(error)
      }finally{
        setGeneratingImg(false)
      }
    }else{
      alert("Please type what you want to draw")
    }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(form.prompt && form.photo) {
      setLoading(true);

      try{
        const response = await fetch("http://localhost:5000/api/v1/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form)
        })

        await response.json();
        navigate("/")
      }catch(err){
        alert(err)

      }
      setLoading(false)
    }else{
      alert("Type something to get an image")
    }

  }

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value})


  }

  const handleSurpriseMe = () =>{
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({...form, prompt: randomPrompt})

  }

  const goToRegister = () => {
    navigate("/register")
  }



	return (
		<section className="max-w-4xl mx-auto p-11 rounded-md p-9">
			<div>
				<h1 className="font-extrabold text-[#EF4444] text-[40px] text-center">
					Welcome to drAwIng !
				</h1>
				<p className="mt-2 text-[#A5B4FC] text-[25px] max-w[500]">
					Be creative and specific while typing your artisitic ideas into DALL-E
				</p>
				<br/>
			</div>

			<form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-5 text-[#4F46E5]">
					<FormInput
						labelName={
							<p className="text-[#A5B4FC] text-[38px]">
								Try out our AIcanvas....
							</p>
							
						}
						type="text"
						placeholder="Press the Try me button for a random AI generated image"
						value={form.prompt}
						handleChange={handleChange}
						isSurpriseMe
						handleSurpriseMe={handleSurpriseMe}
					/>
				

					<div className="relative bg-gray-50 border border-gray-300 text-gray text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-70 p-3 h-70 flex-justify-center items-center">
						{form.photo ? (
							<img
								src={form.photo}
								alt={form.prompt}
								className="w-full h-full object-contain"
							/>
						) : (
							<img
								src={preview}
								alt="preview"
								className="w-9/12 h-9/12 object-contain opacity-50"
							/>
						)}

						{generatingImg && (
							<div className="absolute inset-0 z-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
								<Loading />
							</div>
						)}
					</div>
				</div>
				

				<div className="flex justify-between ">
					<div className="mt-5 flex gap-5">
						<button
							type="button"
							onClick={generateImage}
							className=" mb-1 bg-[#EF4444] py-1 px-2 rounded text-white border-solid border-2 text-[22px]"
						>
							{generatingImg ? "Creating art..." : "Create"}
						</button>
					</div>

                    <p className="mt-5 flex gap-5 text-[#BFDBFE] text-[30px]">Looking for  the best functionality??? <FontAwesomeIcon icon={faArrowRight} beatFade style={{color: "#EF4444",}} className="mt-2" /> </p>
                    
					<div className="mt-5 flex gap-5">
						<button
							type="button"
							onClick={goToRegister}
							className=" mb-1 bg-[#EF4444] py-1 px-2 rounded text-white border-solid border-2 text-[22px]"
						>
							Register
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default tryMe;
