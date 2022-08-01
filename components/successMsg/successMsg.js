const SuccessMsg = ({ success, setSuccess }) => {
	return (
		<div
			className={`bg-green-500 transition-all duration-300 mb-10 md:mb-0 ${
				success.show ? "opacity-100 p-3" : "opacity-100 h-0 m-0 p-0 "
			} `}
		>
			<p className="text-center text-white flex items-center justify-center relative text-sm">
				<span className="flex items-center gap-4">
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
							d="M5 13l4 4L19 7"
						/>
					</svg>
					{success.message}
				</span>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-5 w-5 absolute right-0 cursor-pointer"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
					onClick={() =>
						setSuccess({ ...success, show: false, message: "" })
					}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			</p>
		</div>
	);
};

export default SuccessMsg;
