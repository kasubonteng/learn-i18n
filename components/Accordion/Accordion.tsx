import React from "react";
import AccordionItem from "./AccordionItem";
import Link from "next/link";

const Accordion = ({
	questions,
	accordionText,
	accordionLink,
}: {
	questions: { question: string; answer: string }[];
	accordionText: string;
	accordionLink: string;
}) => {
	return (
		<>
			<div className=" grid gap-2 md:gap-4">
				{questions.map((q) => (
					<AccordionItem {...q} key={q.question} />
				))}
			</div>

			<p className=" text-center text-gray-500 mt-4">
				{accordionText}
				<Link href="#contact" className=" text-primary font-bold">
					{accordionLink}
				</Link>
			</p>
		</>
	);
};

export default Accordion;
