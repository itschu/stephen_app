const ErrorMsg = ({ error, setError, cancel = true }) => {
	return (
		<div
			className={` bg-red-400 transition-all duration-300 ${
				error.show
					? "opacity-100 p-3 visible"
					: "opacity-0 h-0 m-0 p-0 invisible "
			} `}
		>
			<p className="text-center text-white flex items-center justify-between relative gap-0">
				<span className="">
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
							d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
						/>
					</svg>
				</span>
				{error.message}
				{cancel && (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 cursor-pointer"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						strokeWidth={2}
						onClick={() =>
							cancel &&
							setError({ ...error, show: false, message: "" })
						}
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				)}
			</p>
		</div>
	);
};

export default ErrorMsg;
