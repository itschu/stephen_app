import Button from "../button";

const Hero = ({ full = true }) => {
	return (
		<div
			className={` hero ${
				full ? "h-screen" : "h-24"
			} relative flex items-center`}
		>
			{full && (
				<div
					className={`heroTextWrapper flex items-center md:items-start flex-col gap-8 md:gap-5 rounded-2xl p-5 py-12 md:px-16 m-5 md:ml-20 mt-20`}
				>
					<h1
						className="text-white font-black  font-body text-3xl md:text-5xl"
						style={{ lineHeight: "145%", maxWidth: "18ch" }}
					>
						Global Electrical Tech
					</h1>
					<p
						style={{
							lineHeight: "175%",
							maxWidth: "55ch",
						}}
						className="text-white font-light text-base md:text-big"
					>
						Welcome to Global Electrical Tech, We strive to serve
						you better and give you the best experience.
					</p>
					<a href="#welcome">
						<Button text={"Explore"} icon={true} fn={false} />
					</a>
				</div>
			)}
		</div>
	);
};

export default Hero;
