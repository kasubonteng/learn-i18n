/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: "picsum.photos",
				pathname: "/**",
				protocol: "https",
				port: "",
			},
		],
	},
};

export default nextConfig;
