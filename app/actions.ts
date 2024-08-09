"use server";

import { z } from "zod";

export const sendMessage = async (
	prevState: { message: string },
	formData: FormData
) => {
	const schema = z.object({
		name: z.string().min(1),
		company: z.string().min(1),
		email: z.string().email(),
		message: z.string().min(1),
	});

	const parse = schema.safeParse({
		name: formData.get("name") as string,
		company: formData.get("company") as string,
		email: formData.get("email") as string,
		message: formData.get("message") as string,
	});

	if (!parse.success) {
		return {
			message: "Failed to send message",
		};
	}

	const { name, email, message, company } = parse.data;

	try {
		await new Promise((resolve) => setTimeout(resolve, 2000));

		return {
			message: "Message sent successfully",
		};
	} catch (error) {
		return {
			message: "Something went wrong",
		};
	}
};
