import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUnlockKeyhole } from "@fortawesome/free-solid-svg-icons";
import baseURL from "../Api";

let emptyForm = {
	username: "",
	password: "",
};

function Login({ setUser }) {
	const navigate = useNavigate();

	let [form, setForm] = useState(emptyForm);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"https://drawingproject.onrender.com/auth/login",
				form
			);
			const token = response.data;

			console.log(token);

			if (!token) {
				setForm(emptyForm);
				return;
			}

			localStorage.setItem("token", token);

			const userResponse = await axios.get(
				"https://drawingproject.onrender.com/api/users",
				{
					headers: {
						Authorization: token,
					},
				}
			);

			setUser(userResponse.data);

			navigate("/create-art");
		} catch (err) {
			console.log(err.response.data.error);
			alert(err.response.data.error);
		}
	};

	return (
		<>
			<section className="mt-15 max-w-4xl mx-auto p-12 bg-white bg-opacity-15 rounded-md p-9">
				<div className="mt-12 mb-9 ml-20 mr-20">
					<div className="flex flex-col  items-center  my-12">
						<FontAwesomeIcon
							className="mt-5 text-[60px] w-20"
							icon={faUnlockKeyhole}
							beatFade
							style={{ color: "#EF4444" }}
						/>

						<p className="mt-16 text-white text-[30px] text-center max-w[500]">
							Unlock you imagination with drAwIng, login now and enjoy the best
							experience on handling Dall-E API
						</p>
					</div>
					<form onSubmit={handleSubmit} className="mt-16 max-w-3xl">
						<div className="flex flex-col  gap-4 ">
							<p className="text-white text-center text-[25px]">Username:</p>

							<input
								type="text"
								id="username"
								name="username"
								onChange={handleChange}
								value={form.username}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
							/>
							<br />
							<br />
							<br />
							<p className="text-white text-center text-[25px]">Password:</p>

							<input
								type="password"
								id="password"
								name="password"
								onChange={handleChange}
								value={form.password}
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
							/>
							<br />
							<br />
							<br />
							<button className="  mt-10 mb-1 bg-[#EF4444] py-1 px-2 rounded text-white border-solid border-2 text-[22px]">
								Submit
							</button>
						</div>
					</form>
				</div>
				<br />
			</section>
		</>
	);
}

export default Login;
