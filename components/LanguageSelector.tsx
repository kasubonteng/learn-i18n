"use client";

import { usePathname, useRouter } from "next/navigation";

const LanguageSelector = ({ lang }: { lang: string }) => {
	const router = useRouter();
	const pathname = usePathname();

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const newLang = e.target.value;

		const newUrl = pathname.replace(`/${lang}`, `/${newLang}`);

		router.push(newUrl);
	};

	return (
		<div className=" inline-block relative">
			<select
				value={lang}
				onChange={handleLanguageChange}
				className=" p-4 border-2 rounded-lg border-primary bg-transparent appearance-none focus:outline-none"
			>
				<option value="en">🇬🇧</option>
				<option value="fr">🇫🇷</option>
			</select>
		</div>
	);
};

export default LanguageSelector;
