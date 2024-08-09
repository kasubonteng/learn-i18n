"use client";

import { sendMessage } from "@/app/actions";
import Button from "@/components/Button";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

const ContactUsForm = () => {
	const [state, formAction] = useFormState(sendMessage, {
		message: "",
	});
	return (
		<form
			action={formAction}
			className=" p-6 bg-white shadow-sm rounded-lg text-black"
		>
			<div className=" space-y-2">
				<p className=" font-extrabold">Name</p>
				<input
					type="text"
					name="name"
					id="name"
					required
					className=" w-full p-2 bg-lightGray rounded-lg"
				/>
			</div>
			<div className=" space-y-2">
				<p className=" font-extrabold">Company</p>
				<input
					type="text"
					name="company"
					id="company"
					required
					className=" w-full p-2 bg-lightGray rounded-lg"
				/>
			</div>
			<div className=" space-y-2">
				<p className=" font-extrabold">Email</p>
				<input
					type="email"
					name="email"
					id="email"
					required
					className=" w-full p-2 bg-lightGray rounded-lg"
				/>
			</div>
			<div className=" space-y-2">
				<p className=" font-extrabold">Message</p>
				<textarea
					name="message"
					id="message"
					required
					className=" w-full p-2 bg-lightGray rounded-lg"
				/>
			</div>
			{state.message && (
				<p className="" aria-live="polite">
					{state.message}
				</p>
			)}
			<div className=" flex justify-center">
				<SubmitButton />
			</div>
		</form>
	);
};

export default ContactUsForm;

const SubmitButton = () => {
	const { pending } = useFormStatus();

	return <Button disabled={pending} />;
};
