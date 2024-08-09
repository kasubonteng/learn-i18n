import Button from "@/components/Button";
import HappyClientsBadge from "@/components/HappyClientsBadge";
import ImageIsolated from "@/components/ImageIsolated";
import { purify } from "@/utils/purify";
import Link from "next/link";

interface HeroProps {
	title: string;
	subtitle: string;
	happyClients: string;
}

const Hero = ({ subtitle, title, happyClients }: HeroProps) => {
	return (
		<div className=" bg-secondary py-12">
			<div className=" container mx-auto px-4 max-w-6xl">
				<div className=" grid grid-cols-1 md:grid-cols-2 md:items-center gap-4">
					<div className=" order-2 md:order-1">
						<HappyClientsBadge text={happyClients} />
						<h1
							className="mb-2 text-white"
							dangerouslySetInnerHTML={{ __html: purify(title) }}
						></h1>
						<p className=" text-xl mb-4">{subtitle}</p>
						<Link href="#contact">
							<Button />
						</Link>
					</div>
					<div className=" order-1 md:order-2">
						<ImageIsolated src="/hero.webp" alt="mockup" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
