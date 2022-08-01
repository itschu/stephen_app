import Link from "next/link";
import { useContact } from "../../context/contact";
import { useMenu } from "../../context/menu";

const MenuDropDown = () => {
	const { showMenu, setShowMenu } = useMenu();
	const { showContext, setShowContext } = useContact();
	// -translate-y-96
	return (
		<div
			className={`${
				showMenu || "-translate-y-96"
			} md:hidden px-5 py-4 w-full transition-all duration-500 border-t-2 left-0 right-0 fixed z-20 h-fit top-20 bg-white -mt-2`}
		>
			<ul className="flex flex-col gap-3 w-full">
				<Link href={"/"}>
					<li
						className="border-b p-2"
						onClick={() => setShowMenu(false)}
					>
						Home
					</li>
				</Link>
				<Link href={"/#services"}>
					<li
						className="border-b p-2"
						onClick={() => setShowMenu(false)}
					>
						Services
					</li>
				</Link>

				<Link href={"/#about"}>
					<li
						className="border-b p-2"
						onClick={() => setShowMenu(false)}
					>
						About
					</li>
				</Link>

				<li
					className="p-2"
					onClick={() => {
						setShowMenu(false);
						setShowContext(!showContext);
					}}
				>
					Contact
				</li>
			</ul>
		</div>
	);
};

export default MenuDropDown;
