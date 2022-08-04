import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Service = () => {
	const { ref, inView } = useInView({ threshold: 0.2 });

	const animationImg = useAnimation();
	const animationOne = useAnimation();
	const animationTwo = useAnimation();
	const animationThree = useAnimation();

	useEffect(() => {
		if (inView) {
			animationOne.start({
				x: 0,
				opacity: 1,
				transition: {
					duration: 0.8,
				},
			});
		}

		if (!inView) {
			animationOne.start({
				x: "-100vw",
				opacity: 0,
				transition: {
					duration: 0.8,
				},
			});
		}
	}, [inView]);

	useEffect(() => {
		if (inView) {
			animationTwo.start({
				x: 0,
				opacity: 1,
				transition: {
					duration: 1,
				},
			});
		}

		if (!inView) {
			animationTwo.start({
				x: "-100vw",
				opacity: 0,
				transition: {
					duration: 0.8,
				},
			});
		}
	}, [inView]);

	useEffect(() => {
		if (inView) {
			animationThree.start({
				x: 0,
				opacity: 1,
				transition: {
					duration: 1.2,
				},
			});
		}

		if (!inView) {
			animationThree.start({
				x: "-100vw",
				opacity: 0,
				transition: {
					duration: 0.8,
				},
			});
		}
	}, [inView]);

	useEffect(() => {
		if (inView) {
			animationImg.start({
				scale: 1,
				opacity: 1,
				transition: {
					duration: 0.5,
				},
			});
		}

		if (!inView) {
			animationImg.start({
				scale: 0,
				opacity: 0,
				transition: {
					duration: 0.8,
				},
			});
		}
	}, [inView]);
	return (
		<div
			id="services"
			className="grid grid-cols-1 md:grid-cols-5 pb-14 md:pb-28 mx-5 md:mx-24 gap-10 pt-10"
			ref={ref}
		>
			<div className="col-span-1 md:col-span-3">
				<h3 className="heading font-extrabold mb-10 md:mb-14 self-start z-10 text-center md:text-left">
					What We Do
				</h3>

				<div className="flex flex-col gap-8">
					<motion.div
						className="flex items-center gap-2 md:gap-4 flex-col md:flex-row mb-2 md:mb-1"
						animate={animationOne}
					>
						<div id="service-icon" className="service-icon">
							<p className="absolute">1.</p>
						</div>
						<div id="service-body">
							<h4 className="service-subheading">
								AC installation
							</h4>
							<p
								id="service-text"
								className="text-base md:text-big text-center md:text-left leading-6"
							>
								We carry out all kinds of Air conditioner
								installation, from home AC installation to
								factory AC installation and everything in
								between
							</p>
						</div>
					</motion.div>

					<motion.div
						className="flex items-center gap-2 md:gap-4 flex-col md:flex-row mb-2 md:mb-1"
						animate={animationTwo}
					>
						<div id="service-icon" className="service-icon">
							<p className="absolute">2.</p>
						</div>
						<div id="service-body">
							<h4 className="service-subheading">
								Electrical wiring &amp; maintenance
							</h4>
							<p
								id="service-text"
								className="text-base md:text-big text-center md:text-left leading-6"
							>
								Wiring your homes, office space e.t.c
								shouldn&apos;t be much of a hassle anymore, we
								do professional consulting, wiring, costing and
								maintenance
							</p>
						</div>
					</motion.div>

					<motion.div
						className="flex items-center gap-2 md:gap-4 flex-col md:flex-row mb-5 md:mb-1"
						animate={animationThree}
					>
						<div id="service-icon" className="service-icon">
							<p className="absolute">3.</p>
						</div>
						<div id="service-body">
							<h4 className="service-subheading">
								AC maintenance
							</h4>
							<p
								id="service-text"
								className="text-base md:text-big text-center md:text-left leading-6"
							>
								We also carry out professional air conditioner
								maintenance,
							</p>
						</div>
					</motion.div>
				</div>
			</div>

			<motion.div
				className="col-span-2 relative hidden md:block"
				animate={animationImg}
			>
				<Image src={"/about-2.jpg"} layout="fill" alt="about us" />
			</motion.div>
		</div>
	);
};

export default Service;
