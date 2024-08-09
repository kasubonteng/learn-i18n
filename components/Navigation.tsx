import React from "react";
import Logo from "./Logo";
import Button from "./Button";
import Link from "next/link";
import LanguageSelector from "./LanguageSelector";

const Navigation = ({ lang }: { lang: string }) => {
	return (
		<div className=" bg-secondary pt-4 py-4">
			<div className=" container mx-auto px-4 max-w-6xl">
				<header className=" flex justify-between items-center">
					<Logo />
					<div className=" flex items-center gap-2">
						<LanguageSelector lang={lang} />
						<Link href="#contact">
							<Button />
						</Link>
					</div>
				</header>
			</div>
		</div>
	);
};

export default Navigation;
