import { useContact } from "../../context/contact";
import { useRouter } from "next/router";

const Button = ({
	text,
	icon = false,
	outline = true,
	color = "#fff",
	fn,
	sm = false,
}) => {
	const { showContext, setShowContext } = useContact();
	const router = useRouter();
	return (
		<button
			className={`flex items-center py-3 px-7 rounded-full gap-3 z-10 `}
			style={{
				color,
				border: outline
					? `2px solid ${color}`
					: sm
					? `2px solid ${color}`
					: `2px solid #fff`,
				textTransform: "capitalize",
				backgroundColor: outline ? "transparent" : "#fff",
			}}
			onClick={() => fn && router.push("/contact")}
		>
			<span
				className={`${outline || "font-bold"} text-middy md:text-base`}
			>
				{text}
			</span>
			{icon && (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M17 8l4 4m0 0l-4 4m4-4H3"
					/>
				</svg>
			)}
		</button>
	);
};

export default Button;
