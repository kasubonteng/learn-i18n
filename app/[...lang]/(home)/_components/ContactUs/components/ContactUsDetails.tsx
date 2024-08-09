import HappyClientsBadge from "@/components/HappyClientsBadge";
import { purify } from "@/utils/purify";
import Image from "next/image";
import React from "react";

interface ContactUsDetailsProps {
	title: string;
	subtitle1: string;
	subtitle2: string;
	happyClients: string;
}

const ContactUsDetails = ({
	title,
	subtitle1,
	subtitle2,
	happyClients,
}: ContactUsDetailsProps) => {
	return (
		<div>
			<Image
				width={40}
				height={40}
				src={"https://picsum.photos/200/300"}
				alt="some"
				className=" rounded-full border-2 border-white"
			/>
			<h2
				className=" mb-4"
				dangerouslySetInnerHTML={{ __html: purify(title) }}
			></h2>
			<p className=" mb-4">
				{subtitle1}
				<br />
				<br />
				{subtitle2}
			</p>
			<HappyClientsBadge text={happyClients} />
		</div>
	);
};

export default ContactUsDetails;
