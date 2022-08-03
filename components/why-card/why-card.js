import Image from "next/image";

const WhyCard = ({ text, img }) => {
	return (
		<div className="text-white flex flex-col items-center">
			<div className="relative w-14 h-14 md:w-14 md:h-14">
				<Image src={`/${img}`} layout="fill" alt="decoative image" />
			</div>
			<div>
				<p
					className=" md:px-5 my-5 text-center text-base md:text-big"
					style={{
						lineHeight: "175%",
					}}
				>
					{text}
				</p>
			</div>
		</div>
	);
};

export default WhyCard;
