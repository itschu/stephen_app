import Link from "next/link";
import Image from "next/image";

const Footer = () => {
	return (
		<div id="footer" className="py-5 px-6 md:px-10 h-fit">
			<div className="flex gap-5 md:gap-20 items-center justify-between flex-col md:flex-row">
				<div className="flex gap-5 md:gap-14 items-center flex-col md:flex-row">
					<div className="h-14 w-28 relative">
						<Image src={"/logo.png"} layout="fill" alt="logo" />
					</div>

					<a
						className="flex gap-2 items-center text-base"
						href="tel:+2348160840919"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
						</svg>
						<span>+234 816 0840 919</span>
					</a>

					<a
						className="flex gap-2 items-center text-base"
						href="mailto:support@globalelectricaltech.com"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							viewBox="0 0 20 20"
							fill="currentColor"
						>
							<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
							<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
						</svg>
						<span>support@globalelectricaltech.net</span>
					</a>
				</div>

				<div className="flex gap-5 mt-6 md:mt-0">
					<Link href={""}>
						<p className="relative w-5 h-5 md:w-6 md:h-6">
							<Image
								src={"/facebook-black.png"}
								layout="fill"
								alt="facebook logo"
							/>
						</p>
					</Link>

					<Link href={""}>
						<p className="relative w-5 h-5 md:w-6 md:h-6">
							<Image
								src={"/twitter-black.png"}
								layout="fill"
								alt="twitter logo"
							/>
						</p>
					</Link>

					<Link href={"https://www.instagram.com/stephenenyale/"}>
						<p className="relative w-5 h-5 md:w-6 md:h-6">
							<Image
								src={"/instagram-black.png"}
								layout="fill"
								alt="instagram logo"
							/>
						</p>
					</Link>
				</div>
			</div>

			<p className="mt-5 md:mt-0 text-sm text-center md:text-right">
				globalelectricaltech.net Copyright © 2022
			</p>
		</div>
	);
};

export default Footer;
