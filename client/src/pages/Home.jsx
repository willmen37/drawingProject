import React, { useState, useEffect } from "react";
import { Card, Loading } from "../components";

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

	useEffect(() => {
		const fetchPosts = async () => {
			setLoading(true);

			try {
				const response = await fetch(
					"https://drawingproject.onrender.com/api/v1/posts",
					{
						method: "GET",
						headers: {
							"Content-Type": "application/json",
						},
					}
				);

				if (response.ok) {
					const result = await response.json();

					setPost(result.data.reverse());
				}
			} catch (error) {
				alert(error);
			} finally {
				setLoading(false);
			}
		};

		fetchPosts();
	}, []);

	return (
		<section className="max-w-7xl mx-auto">
			<div>
				<h1 className="font-extrabold text-[#EF4444] text-[50px] text-center">
					The best art pieces Imagined by you, drew by AI
				</h1>
				<p className=" font-bold mt-2 text-[#A5B4FC] text-[27px] max-w[500]">
					{" "}
					The best alternative to make use of the amazing AI experience by
					leveraging the power of DALL-E{" "}
				</p>
				<br />
				<h1 className="font-extrabold text-[#EF4444] text-[50px]  mb-4 border-solid">
					Gallery:
				</h1>
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
