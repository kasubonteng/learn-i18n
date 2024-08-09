import Button from "@/components/Button";
import ImageIsolated from "@/components/ImageIsolated";
import { purify } from "@/utils/purify";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface OurWorkProps {
	title: string;
	projects: {
		title: string;
		link: string;
		image: string;
		stats: { value: number; description: string }[];
		review: { name: string; position: string; text: string; image: string };
	}[];
}

const OurWork = ({ title, projects }: OurWorkProps) => {
	return (
		<section className=" py-8 md:py-16 bg-secondary">
			<div className=" container mx-auto px-4 max-w-6xl">
				<h2
					className=" text-center mb-4"
					dangerouslySetInnerHTML={{ __html: purify(title) }}
				></h2>

				<div className=" grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
					{projects.map((project, i) => (
						<div
							key={project.title}
							className=" bg-white/60 p-4 rounded-lg shadow-sm mb-4"
						>
							<h3 className=" mb-4">{project.title}</h3>
							<div className=" border-8 rounded-lg border-accent w-full h-56">
								<ImageIsolated
									src={project.image}
									alt={project.title}
								/>
							</div>
							<div className=" flex justify-between gap-4 mt-2">
								{project.stats.map((stat, i) => (
									<div
										className=" text-center"
										key={stat.description}
									>
										<h3 className=" text-primary mb-2">
											{stat.value}
										</h3>
										<p className=" font-bold">
											{stat.description}
										</p>
									</div>
								))}
							</div>

							<div className=" mt-4">
								<div className=" flex gap-4 items-center justify-center mb-2">
									<div className=" relative size-24 rounded-full overflow-hidden border border-white">
										<Image
											src={project.review.image}
											fill
											alt={project.review.name}
										/>
									</div>
									<div>
										<h5 className=" mb-1">
											{project.review.name}
										</h5>
										<p className=" text-xl font-bold">
											{project.review.position}
										</p>
									</div>
								</div>
								<p className=" italic text-center">
									{project.review.text}
								</p>
							</div>
						</div>
					))}
				</div>
				<div className=" flex justify-center">
					<Link href="#contact">
						<Button />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default OurWork;

// const projects: {
// 	title: string;
// 	link: string;
// 	image: string;
// 	stats: { value: number; description: string }[];
// 	review: { name: string; position: string; text: string; image: string };
// }[] = [
// 	{
// 		title: "Project 1",
// 		link: "/project1",
// 		image: "https://picsum.photos/200/100",
// 		stats: [
// 			{ value: 100, description: "Happy Clients" },
// 			{ value: 100, description: "Projects Completed" },
// 			{ value: 100, description: "Cups of Coffee" },
// 		],
// 		review: {
// 			name: "John Doe",
// 			position: "CEO",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis at",
// 			image: "https://picsum.photos/200/100",
// 		},
// 	},
// 	{
// 		title: "Project 2",
// 		link: "/project2",
// 		image: "https://picsum.photos/200/100",
// 		stats: [
// 			{ value: 100, description: "Happy Clients" },
// 			{ value: 100, description: "Projects Completed" },
// 			{ value: 100, description: "Cups of Coffee" },
// 		],
// 		review: {
// 			name: "John Doe",
// 			position: "CEO",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis at",
// 			image: "https://picsum.photos/200/100",
// 		},
// 	},
// 	{
// 		title: "Project 3",
// 		link: "/project3",
// 		image: "https://picsum.photos/200/100",
// 		stats: [
// 			{ value: 100, description: "Happy Clients" },
// 			{ value: 100, description: "Projects Completed" },
// 			{ value: 100, description: "Cups of Coffee" },
// 		],
// 		review: {
// 			name: "John Doe",
// 			position: "CEO",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis at",
// 			image: "https://picsum.photos/200/100",
// 		},
// 	},
// 	{
// 		title: "Project 4",
// 		link: "/project4",
// 		image: "https://picsum.photos/200/100",
// 		stats: [
// 			{ value: 100, description: "Happy Clients" },
// 			{ value: 100, description: "Projects Completed" },
// 			{ value: 100, description: "Cups of Coffee" },
// 		],
// 		review: {
// 			name: "John Doe",
// 			position: "CEO",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis at",
// 			image: "https://picsum.photos/200/100",
// 		},
// 	},
// 	{
// 		title: "Project 5",
// 		link: "/project5",
// 		image: "https://picsum.photos/200/100",
// 		stats: [
// 			{ value: 100, description: "Happy Clients" },
// 			{ value: 100, description: "Projects Completed" },
// 			{ value: 100, description: "Cups of Coffee" },
// 		],
// 		review: {
// 			name: "John Doe",
// 			position: "CEO",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis at",
// 			image: "https://picsum.photos/200/100",
// 		},
// 	},
// 	{
// 		title: "Project 6",
// 		link: "/project6",
// 		image: "https://picsum.photos/200/100",
// 		stats: [
// 			{ value: 100, description: "Happy Clients" },
// 			{ value: 100, description: "Projects Completed" },
// 			{ value: 100, description: "Cups of Coffee" },
// 		],
// 		review: {
// 			name: "John Doe",
// 			position: "CEO",
// 			text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget turpis at",
// 			image: "https://picsum.photos/200/100",
// 		},
// 	},
// ]
