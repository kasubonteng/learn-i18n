import Button from "@/components/Button";
import { purify } from "@/utils/purify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface OurFocusProps {
	title: string;
	subtitle: string;
	features: { image: string; title: string; description: string }[];
}

const OurFocus = ({ title, subtitle, features }: OurFocusProps) => {
	return (
		<section className=" py-8 md:py-16">
			<div className=" container mx-auto px-4 max-w-6xl">
				<div className=" max-w-6xl text-center mb-8 mx-auto">
					<h2
						className=" mb-4"
						dangerouslySetInnerHTML={{ __html: purify(title) }}
					></h2>
					<p className=" text-xl">{subtitle}</p>
				</div>

				<div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
					{features.map((feature, i) => (
						<div
							key={feature.description}
							className=" bg-white p-4 rounded-lg shadow-sm"
						>
							<div className=" p-4 bg-gradient-to-r from-primary inline-block to-blue-400 rounded-lg">
								<Image
									src={feature.image}
									width={24}
									height={24}
									alt={feature.title}
								/>
							</div>
							<h3 className=" my-4">{feature.title}</h3>
							<p>{feature.description}</p>
						</div>
					))}
				</div>
				<div className=" flex justify-center mt-4">
					<Link href="#contact">
						<Button />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default OurFocus;

// const features: { image: string; title: string; description: string }[] = [
// 	{
// 		image: "/feature1.webp",
// 		title: "Web Development",
// 		description:
// 			"We build professional websites that are fast, secure, and easy to manage.",
// 	},
// 	{
// 		image: "/feature2.webp",
// 		title: "Mobile App Development",
// 		description:
// 			"We create mobile apps that are user-friendly, reliable, and scalable.",
// 	},
// 	{
// 		image: "/feature3.webp",
// 		title: "UI/UX Design",
// 		description:
// 			"We design beautiful user interfaces that are intuitive and engaging.",
// 	},
// 	{
// 		image: "/feature4.webp",
// 		title: "SEO Optimization",
// 		description:
// 			"We optimize websites for search engines to increase visibility and traffic.",
// 	},
// ];
