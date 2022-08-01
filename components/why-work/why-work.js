import Button from "../button";
import ServiceCard from "../why-card";

const WhyWork = () => {
	const bg = {
		backgroundImage: "url(/about-3.jpg)",
		backgroundPosition: "center",
		backgroundSize: "cover",
	};

	const overlay = {
		backgroundImage:
			"linear-gradient(107.93deg, rgba(17, 97, 191, 0.85) 0%, rgba(158, 181, 209, 0.282031) 0.01%, rgba(16, 95, 193, 0.85) 0.02%, rgba(30, 159, 145, 0.85) 100%, rgba(29, 154, 148, 0.85) 100%)",
	};

	return (
		<div id="works" className=" relative" style={bg}>
			<div
				className="absolute top-0 left-0 bottom-0 right-0 z-0"
				style={overlay}
			/>

			<div className="z-10 py-14 md:py-16 px-6 md:px-10 h-fit flex flex-col gap-14 items-center ">
				<h2 className="heading font-extrabold mb-0 md:mb-10 text-white self-start z-10">
					Why Work With Us
				</h2>

				<div className="z-10 flex flex-col md:flex-row gap-5 md:gap-10 mb-3">
					<ServiceCard
						img={"support.png"}
						text={
							"We are here for you 24/7 to take any question, critic or suggestion you may have. We are always ready to listen to you"
						}
					/>

					<ServiceCard
						img={"tools.png"}
						text={
							"We are a set of highly skilled technicians with years of experience in our craft working on diverse projects "
						}
					/>

					<ServiceCard
						img={"badge.png"}
						text={
							"We don't let our success speak for us, rather our failures because they are none, We are a brand you can trust."
						}
					/>
				</div>

				<Button text={"Work With Us"} fn={true} />
			</div>
		</div>
	);
};

export default WhyWork;
