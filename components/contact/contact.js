import { useContact } from "../../context/contact";
import NigStates from "../nig-states";
import { useState } from "react";
import ErrorMsg from "../errorMsg";
import SuccessMsg from "../successMsg";

const overlay = {
	background: "rgba(0, 0, 0, 0.8)",
};

const ContactModal = () => {
	const { showContext, setShowContext } = useContact();
	const [contactInfo, setContactInfo] = useState({});

	const [error, setError] = useState({ show: false, message: "" });
	const [success, setSuccess] = useState({ show: false, message: "" });

	const sendMail = async (e) => {
		e.preventDefault();
		try {
			const res = await fetch(
				`https://globalelectricaltech.net/api/v1/sendMail/`,
				{
					method: "POST",
					headers: {
						Accept: "application/json",
						"Content-Type": "application/json",
						Authorization: process.env.NEXT_PUBLIC_API_KEY,
					},
					body: JSON.stringify(contactInfo),
				}
			);
			const response = await res.json();
			if (response == "done") {
				setSuccess({
					show: true,
					message:
						"Thanks for getting in touch with us, you'll hear from us shortly.",
				});
				setContactInfo({});
			} else {
				setError({
					show: true,
					message: "Sorry an error occurred please try again later",
				});
			}
		} catch (err) {
			setError({
				show: true,
				message: "Sorry an error occurred please try again later",
			});
		}
	};
	return (
		<div
			className={`fixed w-screen top-0 left-0 right-0 bottom-0 z-50 ${
				showContext ? "flex" : "hidden"
			} justify-center items-center overflow-y-scroll`}
			style={{ ...overlay }}
		>
			<form
				className="bg-white w-full mx-4 md:w-3/6 h-fit rounded-xl px-5 py-7 md:py-8 md:px-12 overflow-hidden pb-10"
				onSubmit={sendMail}
			>
				<div className="flex justify-between items-center mb-3 ">
					<h3 className="text-xl md:text-2xl font-bold ">
						Send Us A Message
					</h3>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5 cursor-pointer hover:text-red-500"
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
				</div>

				<ErrorMsg error={error} setError={setError} />
				<SuccessMsg success={success} setSuccess={setSuccess} />

				<div className="mt-3">
					<div className="flex gap-5 md:gap-10 flex-col md:flex-row">
						<div className="flex-grow">
							<label>Name</label>
							<input
								type="text"
								className="input"
								placeholder="John Doe"
								name="name"
								required
								onChange={(e) =>
									setContactInfo({
										...contactInfo,
										name: e.target.value,
									})
								}
							/>
						</div>

						<div className="flex-grow">
							<label>Phone Number</label>
							<input
								type="number"
								className="input"
								placeholder="08XXXX"
								name="phone_number"
								required
								onChange={(e) =>
									setContactInfo({
										...contactInfo,
										phone_number: e.target.value,
									})
								}
							/>
						</div>
					</div>
				</div>
				<div className="mt-5">
					<div className="flex gap-5 md:gap-10 flex-col md:flex-row">
						<div className="flex-grow hidden md:block">
							<label>Email</label>
							<input
								type="email"
								className="input"
								name="email"
								placeholder="johndoe@example.com"
								required
								onChange={(e) =>
									setContactInfo({
										...contactInfo,
										email: e.target.value,
									})
								}
							/>
						</div>

						<NigStates
							userDetails={contactInfo}
							setUserDetails={setContactInfo}
						/>
					</div>
				</div>

				<div className="mt-5">
					<div className="flex-grow">
						<label>Message</label>
						<textarea
							className="input md:w-full h-full"
							rows="14"
							style={{ minHeight: 130 }}
							value={contactInfo.message}
							name="long description"
							onChange={(e) =>
								setContactInfo({
									...contactInfo,
									message: e.target.value,
								})
							}
							required
						/>
					</div>
				</div>

				<button
					type="submit"
					className="bg-slate-700 hover:bg-slate-500 font-bold text-white mt-7 px-5 py-2 text-sm"
				>
					Submit
				</button>
			</form>
		</div>
	);
};

export default ContactModal;
