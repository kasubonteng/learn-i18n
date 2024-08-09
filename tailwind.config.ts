import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				background: "#fbf8f4",
				dark: "#14171a",
				primary: "#d09344",
				lightGray: "#f5f5fc",
				secondary: "#f0bf7f",
				accent: "#fea736",
			},
		},
	},
	plugins: [],
};
export default config;
