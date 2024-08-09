import { getDictionary } from "@/get-dictionary";
import { Star } from "lucide-react";
import React from "react";

const HappyClientsBadge = async ({ text }: { text: string }) => {
	return (
		<div className=" flex items-center mb-4 gap-4">
			<div className=" flex items-center gap-1">
				{[...Array(5)].map((_, i) => (
					<Star
						key={i}
						size={24}
						fill="
								#f5a623
								"
					/>
				))}
			</div>

			<p className=" text-sm font-bold text-[#5d3b16]">10+ {text}</p>
		</div>
	);
};

export default HappyClientsBadge;
