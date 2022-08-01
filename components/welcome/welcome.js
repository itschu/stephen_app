import Button from "../button";

const backgroundStyle = {
	backgroundSize: "cover",
	backgroundPosition: "center",
	filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.4))",
};

const Welcome = () => {
	return (
		<div
			id="welcome"
			className={`py-16 md:py-32 px-6 md:px-0 flex flex-col-reverse md:flex-row items-center justify-center gap-10`}
		>
			<div className=" flex gap-5 items-center">
				<div
					className="relative welcome-shadow"
					style={{
						width: 314,
						height: 504,
						background: "url(/about-1.jpg)",
						...backgroundStyle,
					}}
				/>
				<div
					className="relative hidden md:block"
					style={{
						width: 301,
						height: 413,
						background: "url(/about-2.jpg)",
						...backgroundStyle,
					}}
				/>
				<div
					className="relative hidden md:block"
					style={{
						width: 217,
						height: 305,
						background: "url(/about-3.jpg)",
						...backgroundStyle,
					}}
				/>
			</div>
			<div className="flex flex-col gap-5 items-start">
				<h3 className="text-xl md:text-3xl font-extrabold text-black">
					Welcome to Global Electrical Tech
				</h3>
				<p
					style={{
						maxWidth: "50ch",
						lineHeight: "175%",
						fontSize: 17,
					}}
				>
					We aren&apos;t your average everyday technicians, we are a
					team of experts dedicated to providing you with excellent
					serices In our Niche. Getting your electrical works done
					doesn&apos;t have to be a hassle anymore, we are here for
					you.
				</p>
				<Button text={"book a meeting"} color={"#000"} fn={true} />
			</div>
		</div>
	);
};

export default Welcome;
