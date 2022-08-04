import Button from "../button";
import Image from "next/image";

const cardStyle = {
	background: "linear-gradient(154.98deg, #0E55C8 0%, #20A68B 100%)",
	borderRadius: "20px",
};

const About = () => {
	return (
		<div id="about" className="py-16 md:py-24 px-6 md:px-10">
			<h2 className="heading font-extrabold mb-10 md:mb-16 text-black">
				About Us.
			</h2>

			<div className="flex flex-col md:flex-row justify-center items-center gap-16">
				<div
					id="card"
					className="py-12 px-16 flex flex-col items-center"
					style={{ ...cardStyle }}
				>
					<div
						className="rounded-full h-56 w-56 md:h-64 md:w-64 mb-6"
						style={{
							background: "url(/work20.jpg)",
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					/>

					<h4 className="font-bold text-2xl mb-4 text-white">
						Stephen Enyale
						<span className="block text-center text-sm font-medium">
							C.E.O
						</span>
					</h4>

					<div className="mb-6 gap-3 hidden">
						<div className="w-8 h-8 p-2 bg-white rounded-full relative">
							<div className="relative w-full h-full">
								<Image
									src={`/facebook.png`}
									layout="fill"
									alt="facebook logo"
								/>
							</div>
						</div>
						<div className="w-8 h-8 p-2 bg-white rounded-full ">
							<div className="relative w-full h-full">
								<Image
									src={`/instagram.png`}
									layout="fill"
									alt="instagram logo"
								/>
							</div>
						</div>
						<div className="w-8 h-8 p-2 bg-white rounded-full ">
							<div className="relative w-full h-full">
								<Image
									src={`/twitter.png`}
									layout="fill"
									alt="twitter logo"
								/>
							</div>
						</div>
					</div>

					<Button
						text={"book a meeting"}
						color={"#000"}
						outline={false}
						fn={true}
					/>
				</div>

				<div
					id="about-write-up"
					className="flex flex-col gap-5 md:gap-10 items-start"
				>
					<h3 className="text-xl md:text-3xl font-extrabold text-black">
						Get To Know Us At Global Electrical Tech
					</h3>
					<p
						style={{
							maxWidth: "70ch",
							lineHeight: "175%",
						}}
						className="text-base md:text-big md:text-justify text-left"
					>
						Vision statement: Our vision is to provide satisfaction
						with our works, easy accessibility to a vendor that
						cares about the work they do, pay attention to details
						at affordable low prices that suits everyone. <br />
						<br />
						Background description: We provide customers with the
						following services: AC installation Electrical
						maintenance Electrical wiring AC maintenance. With 5
						years experience in the business, we have built a strong
						relationship with previous clients and looking to expand
						our client base in order to bring ease and satisfaction
						to everything customers set there.
					</p>
					<div className="mb-6 flex gap-3">
						<div className="w-10 h-10 p-2 bg-white rounded-full relative">
							<div className="relative w-full h-full">
								<Image
									src={`/facebook.png`}
									layout="fill"
									alt="facebook logo"
								/>
							</div>
						</div>
						<div className="w-10 h-10 p-2 bg-white rounded-full ">
							<div className="relative w-full h-full">
								<Image
									src={`/instagram.png`}
									layout="fill"
									alt="instagram logo"
								/>
							</div>
						</div>
						<div className="w-10 h-10 p-2 bg-white rounded-full ">
							<div className="relative w-full h-full">
								<Image
									src={`/twitter.png`}
									layout="fill"
									alt="twitter logo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
