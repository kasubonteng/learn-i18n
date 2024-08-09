"use client";

import { ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = ({ ...rest }) => {
	const pathname = usePathname();
	return (
		<button
			className={` bg-accent hover:bg-accent/60 w-full md:w-auto justify-center items-center text-black font-bold py-4 px-4 text-lg md:text-xl rounded-md flex gap-4 disabled:bg-gray-500`}
			{...rest}
		>
			<span>{pathname === "/en" ? "Contact Us" : "Contactez-nous"}</span>
			<span>
				<ArrowRight />
			</span>
		</button>
	);
};

export default Button;
