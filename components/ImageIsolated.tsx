import Image from "next/image";

const ImageIsolated = ({ src, alt }: { src: string; alt: string }) => {
	return (
		<Image
			src={src}
			width={200}
			height={200}
			alt={alt}
			sizes="100vw"
			style={{ width: "100%", height: "auto" }}
		/>
	);
};

export default ImageIsolated;
