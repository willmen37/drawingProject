import React, { useState, useEffect } from "react";
import { FormInput, Card, Loading } from "../components";

const RenderCards = ({ data, title }) => {
	if (data?.length > 0) {
		return data.map((post) => <Card key={post._id} {...post} />);
	}

	return (
		<h2 className="mt-5 font-bold text-[#6449ff] text-xl uppercase">{title}</h2>
	);
};

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [allPost, setPost] = useState(null);
	const [searchText, useSearchText] = useState("");

	useEffect(()=>{
		const fetchPosts = async () =>{
			setLoading(true)

			try{
				const response = await fetch("http://localhost:5000/api/v1/posts", {
					method: "GET",
					headers: {
					  "Content-Type": "application/json",
					},
				  })

				  if(response.ok) {
					const result = await response.json()

					setPost(result.data)
				  }

			}catch(error){
				alert(error)

			}finally{
				setLoading(false)
			}
		}

		fetchPosts()

	}, []);

	return (
		<section className="max-w-7xl mx-auto">
			<div>
				<h1 className="font-extrabold text-[#222328] text-[25px]">
					The comunity showcase
				</h1>
				<p className="mt-2 text-[#666e75] text-[12px] max-w[500]">
					{" "}
					The best alternative to make use of the amaxing AI experience by
					leveraging the power of DALL-E{" "}
				</p>
			</div>

			<div className="mt-16">
				<FormInput />
			</div>
      
			<div className="mt-10">
				{loading ? (
					<div className="flex justify-center items center">
						<Loading />
					</div>
				) : (
					<>
						{searchText && (
							<h2 className="font-medium text-[#666e75] text-xl mb-3">
								Sowing results for{" "}
								<span classname="text-[#222328]">{searchText}</span>
							</h2>
						)}

						<div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-clos-1 gap-3 ">
							{searchText ? (
								<RenderCards data={allPost} title="Search elements not found" />
							) : (
								<RenderCards data={allPost} title="No posts found" />
							)}
						</div>
					</>
				)}
			</div>
		</section>
	);
};

export default Home;
