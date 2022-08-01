import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Nav.module.css";
import { useRouter } from "next/router";
import { useContact } from "../../context/contact";
import MenuDropDown from "../menu-dropdown";
import { useMenu } from "../../context/menu";

const Nav = () => {
	const router = useRouter();
	const { showContext, setShowContext } = useContact();
	const { showMenu, setShowMenu } = useMenu();

	return (
		<div className="relative">
			<div className="flex items-center justify-between px-6 md:mx-20 py-3 md:pt-5 fixed  md:absolute  w-full md:w-auto top-0 left-0 right-0 z-30  bg-white md:bg-transparent shadow-lg md:shadow-none">
				<div
					id="logo"
					className="w-20 h-12 md:w-28 md:h-14 rounded-full relative"
				>
					<Image src={"/logo.png"} layout="fill" alt="logo" />
				</div>

				<ul className="gap-12 items-center hidden md:flex">
					<li
						className={`${styles.navLinks} ${
							router.pathname !== "/contact" && styles.active
						}`}
					>
						<Link href={"/"}>
							<a className=" nav-menu">Home</a>
						</Link>
					</li>

					<li className={`${styles.navLinks}`}>
						<Link href={"/#services"}>
							<a className="">Services</a>
						</Link>
					</li>

					<li className={`${styles.navLinks}`}>
						<Link href={"/#about"}>
							<a className="">About</a>
						</Link>
					</li>

					<li
						className={`${styles.navLinks} ${
							router.pathname == "/contact" && styles.active
						}`}
						onClick={() => setShowContext(!showContext)}
					>
						<a className="">Contact</a>
					</li>
				</ul>

				<div
					className="block md:hidden text-black"
					onClick={() => setShowMenu(!showMenu)}
				>
					{showMenu ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8 cursor-pointer hover:text-red-500"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={3}
							onClick={() => setShowContext(false)}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-8 w-8"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							strokeWidth={2}
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					)}
				</div>
			</div>
			<MenuDropDown />
		</div>
	);
};

export default Nav;
