import { match as matchLocale } from "@formatjs/intl-localematcher";
import { NextRequest, NextResponse } from "next/server";
import { i18n } from "./i18n-config";
import Negotiator from "negotiator";

const getLocale = (req: NextRequest): string | undefined => {
	const negotiatorHeaders: Record<string, string> = {};
	req.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

	const locales = i18n.locales;

	let languages = new Negotiator({ headers: negotiatorHeaders }).languages(
		locales
	);

	const locale = matchLocale(languages, locales, i18n.defaultLocale);

	return locale;
};

export const middleware = (req: NextRequest) => {
	const pathname = req.nextUrl.pathname;

	const isLocaleMissing = i18n.locales.every(
		(locale) =>
			!pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
	);

	if (isLocaleMissing) {
		const locale = getLocale(req);

		return NextResponse.redirect(
			new URL(
				`/${locale}${pathname.startsWith("/") ? "" : `/`}${pathname}`,
				req.url
			)
		);
	}
};

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
