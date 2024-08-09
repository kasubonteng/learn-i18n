import { purify } from "@/utils/purify";
import React from "react";

interface OurProcessProps {
	title: string;
	steps: {
		step: string;
		title: string;
		description: string;
	}[];
}

const OurProcess = ({ title, steps }: OurProcessProps) => {
	return (
		<section className=" py-8 md:py-16">
			<div className=" container mx-auto px-4 max-w-6xl">
				<h2
					className=" mb-8 text-center"
					dangerouslySetInnerHTML={{ __html: purify(title) }}
				></h2>

				<div className=" grid grid-cols-1 md:grid-cols-4 gap-4">
					{steps.map((step, i) => (
						<div
							key={step.step}
							className=" p-6 bg-secondary/50 rounded-lg"
						>
							<h5 className=" font-bold text-xl mb-4">
								{step.step}
							</h5>
							<h4 className=" mb-4">{step.title}</h4>
							<p>{step.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default OurProcess;

// const steps: { step: string; title: string; description: string }[] = [
// 	{
// 		step: "01 STEP",
// 		title: "Initial Consultation",
// 		description:
// 			"We will discuss your project and provide you with a quote.",
// 	},
// 	{
// 		step: "02 STEP",
// 		title: "Design & Development",
// 		description: "We will design and develop your website.",
// 	},
// 	{
// 		step: "03 STEP",
// 		title: "Quality Assurance",
// 		description:
// 			"We will test your website to ensure it is working correctly.",
// 	},
// 	{
// 		step: "04 STEP",
// 		title: "Launch",
// 		description:
// 			"We will launch your website and provide you with ongoing support.",
// 	},
// ];
