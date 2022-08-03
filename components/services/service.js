import Image from "next/image";

const cardStyle = {};

const Service = () => {
	return (
		<div
			id="services"
			className="grid grid-cols-1 md:grid-cols-5 pb-14 md:pb-28 mx-5 md:mx-24 gap-10 pt-10"
		>
			<div className="col-span-1 md:col-span-3">
				<h3 className="heading font-extrabold mb-10 md:mb-14 self-start z-10 text-center md:text-left">
					What We Do
				</h3>

				<div className="flex flex-col gap-8">
					<div className="flex items-center gap-2 md:gap-4 flex-col md:flex-row mb-2 md:mb-1">
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
					</div>

					<div className="flex items-center gap-2 md:gap-4 flex-col md:flex-row mb-2 md:mb-1">
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
					</div>

					<div className="flex items-center gap-2 md:gap-4 flex-col md:flex-row mb-5 md:mb-1">
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
					</div>
				</div>
			</div>

			<div className="col-span-2 relative hidden md:block ">
				<Image src={"/about-2.jpg"} layout="fill" alt="about us" />
			</div>
		</div>
	);
};

export default Service;
