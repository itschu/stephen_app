import Button from "../button";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const Welcome = () => {
	const { ref, inView } = useInView({ threshold: 0.3 });
	const animation = useAnimation();

	useEffect(() => {
		console.log(inView);

		if (inView) {
			animation.start({
				scale: 1,
				opacity: 1,
				transition: {
					duration: 0.8,
					type: "spring",
				},
			});
		}

		if (!inView) {
			animation.start({
				scale: 0,
				opacity: 0,
				transition: {
					duration: 1,
				},
			});
		}
	}, [inView]);

	return (
		<div ref={ref} id="welcome">
			<motion.div
				animate={animation}
				className={`py-16 md:py-32 px-6 md:px-0 flex flex-col-reverse md:flex-row items-center justify-center gap-10`}
			>
				<div className=" flex gap-5 items-center">
					<div className="relative welcome-shadow" id="large">
						<Image src="/about-1.jpg" layout="fill" />
					</div>
					<div
						className="relative hidden md:block welcome-shadow"
						id="medium"
					>
						<Image src="/about-2.jpg" layout="fill" />
					</div>
					<div
						className="relative hidden md:block welcome-shadow"
						id="low"
					>
						<Image src="/about-3.jpg" layout="fill" />
					</div>
				</div>
				<div className="flex flex-col gap-5 items-start">
					<h3 className="text-xl md:text-3xl font-extrabold text-black">
						Global Electrical Tech
					</h3>
					<p
						style={{
							maxWidth: "50ch",
							lineHeight: "175%",
						}}
						className="text-base md:text-big"
					>
						We aren&apos;t your average everyday technicians, we are
						a team of experts dedicated to providing you with
						excellent serices In our Niche. Getting your electrical
						works done doesn&apos;t have to be a hassle anymore, we
						are here for you.
					</p>
					<Button text={"book a meeting"} color={"#000"} fn={true} />
				</div>
			</motion.div>
		</div>
	);
};

export default Welcome;
