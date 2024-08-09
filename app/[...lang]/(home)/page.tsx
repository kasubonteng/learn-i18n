import Image from "next/image";
import Hero from "./_components/Hero";
import OurFocus from "./_components/OurFocus";
import OurWork from "./_components/OurWork";
import FAQ from "./_components/FAQ";
import ContactUs from "./_components/ContactUs/ContactUs";
import OurProcess from "./_components/OurProcess";
import { getDictionary } from "@/get-dictionary";
import { Locale } from "@/i18n-config";

interface HomeProps {
	params: {
		lang: [Locale];
	};
}

export default async function Home({ params: { lang } }: HomeProps) {
	const dictionary = await getDictionary(lang[0]);

	return (
		<main>
			<Hero
				title={dictionary.home.hero.title}
				subtitle={dictionary.home.hero.subtitle}
				happyClients={dictionary.home.hero.happyClients}
			/>
			<OurFocus
				title={dictionary.home.ourFocus.title}
				subtitle={dictionary.home.ourFocus.subtitle}
				features={dictionary.home.ourFocus.features}
			/>
			<OurWork
				title={dictionary.home.ourWork.title}
				projects={dictionary.home.ourWork.projects}
			/>
			<FAQ
				title={dictionary.home.faqs.title}
				subtitle={dictionary.home.faqs.subtitle}
				questions={dictionary.home.faqs.questions}
				accordionLink={dictionary.home.faqs.accordionLink}
				accordionText={dictionary.home.faqs.accordionText}
			/>
			<ContactUs
				details={{
					title: dictionary.home.contactUs.details.title,
					subtitle1: dictionary.home.contactUs.details.subtitle1,
					subtitle2: dictionary.home.contactUs.details.subtitle2,
					happyClients: dictionary.home.hero.happyClients,
				}}
			/>
			<OurProcess
				title={dictionary.home.ourProcess.title}
				steps={dictionary.home.ourProcess.steps}
			/>
		</main>
	);
}
