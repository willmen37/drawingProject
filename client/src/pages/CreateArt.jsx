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

  const handleSubmit = () => {

  }

  const handleChange = (e) => {


  }

	return (
		<section className="max-w-7xl mx-auto">
			<div>
				<h1 className="font-extrabold text-[#222328] text-[25px]">
					Create
				</h1>
				<p className="mt-2 text-[#666e75] text-[12px] max-w[500]">
					{" "}
					Put to the try your skills specifically indicating DALL-E the kind of Drawing you woul like to get done{" "}
				</p>
			</div>

      <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormInput
            label="Your name"
            type="text"
            name="name"
            placehilder="Fulanito de tal"
            handleChange={handleChange}
          />

          <FormInput
            label="Prompt"
            type="text"
            name="prompt"
            placehilder="Fulanito de tal"
            handleChange={handleChange}
          />

        </div>
      </form>
		</section>
	);
};

export default CreateArt;
