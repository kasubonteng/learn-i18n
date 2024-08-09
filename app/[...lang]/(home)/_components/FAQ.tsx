import Accordion from "@/components/Accordion/Accordion";
import React from "react";

interface FAQProps {
	title: string;
	subtitle: string;
	questions: {
		question: string;
		answer: string;
	}[];
	accordionText: string;
	accordionLink: string;
}

const FAQ = ({
	title,
	subtitle,
	questions,
	accordionLink,
	accordionText,
}: FAQProps) => {
	return (
		<section className=" py-8 md:py-16">
			<div className=" container mx-auto px-4 max-w-6xl">
				<div className=" text-center mb-8">
					<h2 className=" mb-4">{title}</h2>
					<p>{subtitle}</p>
				</div>

				<Accordion
					questions={questions}
					accordionLink={accordionLink}
					accordionText={accordionText}
				/>
			</div>
		</section>
	);
};

export default FAQ;

// const questions = [
// 	{
// 		question: "How much does it cost to build a website?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi.",
// 	},
// 	{
// 		question: "How long does it take to build a website?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi.",
// 	},
// 	{
// 		question: "Do you provide support after the website is live?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi.",
// 	},
// 	{
// 		question: "Do you provide hosting services?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi.",
// 	},
// 	{
// 		question: "Do you provide SEO services?",
// 		answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi. Nullam nec purus et metus lacinia sollicitudin. Nulla facilisi.",
// 	},
// ];
