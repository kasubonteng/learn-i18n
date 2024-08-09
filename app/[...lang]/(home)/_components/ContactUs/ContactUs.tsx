import React from "react";
import ContactUsDetails from "./components/ContactUsDetails";
import ContactUsForm from "./components/ContactUsForm";
import { useFormStatus } from "react-dom";

interface ContactUsProps {
	details: {
		title: string;
		subtitle1: string;
		subtitle2: string;
		happyClients: string;
	};
}

const ContactUs = ({ details }: ContactUsProps) => {
	return (
		<section className=" bg-secondary py-8 md:py-16" id="contact">
			<div className=" container mx-auto px-4 max-w-6xl">
				<div className=" grid grid-cols-1 md:grid-cols-2 gap-8">
					<ContactUsDetails {...details} />
					<ContactUsForm />
				</div>
			</div>
		</section>
	);
};

export default ContactUs;
