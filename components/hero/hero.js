import Button from "../button";
import { motion } from "framer-motion";

const heroVariant = {
	initial: {
		scale: 0.2,
		opacity: 0.3,
	},

	visible: {
		scale: 1,
		opacity: 1,
		transition: { duration: 0.5, when: "beforeChildren" },
	},
};

const buttonVariants = {
	initial: {
		x: "-100vw",
		opacity: 0.3,
	},

	visible: {
		x: 0,
		opacity: 1,
		transition: { duration: 0.9, type: "spring", stiffness: 100 },
	},
};

const Hero = ({ full = true }) => {
	return (
		<div
			className={` hero ${
				full ? "h-screen" : "mt-16 h-72 md:h-96 md:mt-0 justify-center"
			} relative flex items-center`}
		>
			{full ? (
				<motion.div
					className={`heroTextWrapper flex items-center md:items-start flex-col gap-8 md:gap-5 rounded-2xl p-5 py-12 md:px-16 m-5 md:ml-20 mt-20`}
					variants={heroVariant}
					initial="initial"
					animate="visible"
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
					<motion.a href="#welcome" variants={buttonVariants}>
						<Button text={"Explore"} icon={true} fn={false} />
					</motion.a>
				</motion.div>
			) : (
				<motion.div
					className={`heroTextWrapper flex items-center justify-center rounded-2xl ${
						full
							? "p-5 py-12 md:px-16 m-5 md:ml-20 mt-20"
							: "p-24 py-9 mt-0 md:mt-10"
					}`}
					variants={heroVariant}
					initial="initial"
					animate="visible"
				>
					<h1
						className="text-white font-black  font-body text-3xl md:text-5xl"
						style={{ lineHeight: "145%", maxWidth: "18ch" }}
					>
						Contact Us
					</h1>
				</motion.div>
			)}
		</div>
	);
};

export default Hero;
