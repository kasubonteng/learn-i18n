import React from "react";

const Footer = () => {
	return (
		<footer className=" bg-secondary py-4">
			<div className=" container mx-auto px-4">
				<p className=" text-center text-sm text-gray-800">
					&copy; {new Date().getFullYear()} Don Dev. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
