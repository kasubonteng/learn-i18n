import type { Metadata } from "next";
import { Inter, Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Locale } from "@/i18n-config";

const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Don Dev",
	description: "Don development web and mobile app development agency",
};

export default function RootLayout({
	children,
	params: { lang },
}: Readonly<{
	children: React.ReactNode;
	params: { lang: [Locale] };
}>) {
	const locale = lang[0];
	return (
		<html lang="en">
			<body className={`${nunito.className} bg-background antialiased`}>
				<Navigation lang={locale} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
