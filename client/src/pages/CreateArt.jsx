import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { preview } from "../assets";
import { getRandomPrompt } from "../utils";
import { FormInput, Loading } from "../components";

const CreateArt = () => {
	const navigate = useNavigate();
	const [form, setForm] = useState({
		name: "",
		prompt: "",
		photo: "",
	});

	const [generatingImg, setGeneratingImg] = useState(false);
	const [loading, setLoading] = useState(false);

	const generateImage = async () => {
		if (form.prompt) {
			try {
				console.log("saving img on cloud");
				setGeneratingImg(true);
				const response = await fetch(
					"https://drawingproject.onrender.com/api/v1/openaiRoute",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ prompt: form.prompt }),
					}
				);

				const data = await response.json();

				setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}` });
			} catch (error) {
				alert(error);
			} finally {
				setGeneratingImg(false);
			}
		} else {
			alert("Please type what you want to draw");
		}
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (form.prompt && form.photo) {
			setLoading(true);
			console.log(form);
			try {
				const response = await fetch(
					"https://drawingproject.onrender.com/api/v1/posts",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(form),
					}
				);

				await response.json();
				navigate("/");
			} catch (err) {
				alert(err);
			}
			setLoading(false);
		} else {
			alert("Type something to get an image");
		}
	};

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSurpriseMe = () => {
		const randomPrompt = getRandomPrompt(form.prompt);
		setForm({ ...form, prompt: randomPrompt });
	};

	return (
		<section className="max-w-7xl mx-auto">
			<div>
				<h1 className="font-extrabold text-[#EF4444] text-[40px]">
					Welcome to the drAwIng Art Shop!
				</h1>
				<p className="mt-2 text-[#A5B4FC] text-[25px] max-w[500]">
					Be creative and specific while typing your artisitic ideas into DALL-E
				</p>
			</div>

			<form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
				<div className="flex flex-col gap-5 text-[#4F46E5]">
					<FormInput
						labelName={
							<p className="text-[#A5B4FC] text-[38px]">Dall-E Input</p>
						}
						type="text"
						name="prompt"
						placeholder="Press the Try me! button or type your next art hit!"
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
				<br />

				<FormInput
					labelName={
						<p className="text-[#A5B4FC] text-[25px] mb-2">
							Sign your Artwork:
						</p>
					}
					type="text"
					name="name"
					placeholder="Artist Name"
					value={form.name}
					handleChange={handleChange}
				/>
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

					<div className="mt-5">
						<button
							type="submit"
							className="mb-1 bg-[#EF4444] py-1 px-2 rounded text-white border-solid border-2 text-[22px]"
						>
							{loading ? "Uploading..." : "Upload Art Piece into our Gallery"}
						</button>
					</div>
				</div>
			</form>
		</section>
	);
};

export default CreateArt;
