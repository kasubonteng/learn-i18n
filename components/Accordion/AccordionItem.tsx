"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

const AccordionItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	const [isOpen, setIsOpen] = React.useState(false);

	const toggleIsOpen = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div
			className=" p-4 bg-white shadow-sm rounded-lg cursor-pointer transition-all duration-300"
			onClick={toggleIsOpen}
		>
			<div className=" flex justify-between items-center gap-4 transition-all duration-300">
				<h5>{question}</h5>
				{isOpen ? <ChevronUp /> : <ChevronDown />}
			</div>

			{isOpen && (
				<p className=" text-gray-500 mt-2 transition-all duration-300">
					{answer}
				</p>
			)}
		</div>
	);
};

export default AccordionItem;
