import { useRouter } from "next/router";
import { useState } from "react";
import ErrorMsg from "../errorMsg";
import NigStates from "../nig-states";
import SuccessMsg from "../successMsg";
import { motion } from "framer-motion";
import ButtonLoader from "../button-loader";

const ContactForm = () => {
	const [contactInfo, setContactInfo] = useState({});
	const router = useRouter();

	const [loading, setLoading] = useState(false);
	const [error, setError] = useState({ show: false, message: "" });
	const [success, setSuccess] = useState({ show: false, message: "" });

	const sendMail = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError({ show: false, message: "" });
		setSuccess({ show: false, message: "" });

		if (
			contactInfo.name == "" ||
			contactInfo.phone_number == "" ||
			contactInfo.email == "" ||
			contactInfo.state == "" ||
			contactInfo.message == ""
		) {
			setError({ show: true, message: "All fields are required" });
			setLoading(false);
			return router.push("/contact#form");
		}

		try {
			const res = await fetch(`http://get.peculyn.com/api/v1/sendMail/`, {
				method: "POST",
				headers: {
					Accept: "application/json",
					Authorization: process.env.NEXT_PUBLIC_API_KEY,
				},
				body: JSON.stringify(contactInfo),
			});
			const response = await res.json();
			if (response == "done") {
				setSuccess({
					show: true,
					message:
						"Thanks for getting in touch with us, you'll hear from us shortly.",
				});
				setContactInfo({
					name: "",
					phone_number: "",
					email: "",
					state: "",
					message: "",
				});
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
			console.log(err);
		}
		setLoading(false);
		router.push("/contact#form");
	};

	return (
		<div className="m-10 mx-5 md:mx-28 mt-14">
			<h2 className="font-bold text-xl md:text-3xl text-center">
				Let&apos;s start a conversation
			</h2>

			<div className="grid md:grid-cols-3 gap-20 mt-10 md:mt-24">
				<motion.div
					className="flex flex-col gap-5 md:col-span-1"
					initial={{ x: "-100vw", opacity: 0 }}
					animate={{ x: 0, opacity: 1 }}
					transition={{
						duration: 0.8,
						type: "spring",
						// stiffness: 200,
					}}
				>
					<div className="overlay rounded-xl text-white p-5 py-10 justify-center flex flex-col gap-3">
						<p className="text-big">
							<span className="p-span">Name :</span> Stephen
							Enyale
						</p>
						<p className="text-big">
							<span className="p-span">Location :</span> Abuja,
							Nigeria.
						</p>
						<p className="text-big flex items-center">
							<span className="p-span">Working Hours :</span>{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 mr-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>
							9:00am -
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-4 w-4 mx-2"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
								strokeWidth={2}
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
								/>
							</svg>{" "}
							8:00pm
						</p>
						<p className="text-big">
							<span className="p-span">Working Days :</span> Mon -
							Sat
						</p>
					</div>
					{/* <div className=" h-52 bg-gray-200 rounded-xl"></div> */}
				</motion.div>

				<motion.div
					className="md:col-span-2"
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						duration: 1.3,
						type: "spring",
						delay: 0.4,
					}}
				>
					<h3 className="font-bold">
						Please note: All fields are required
					</h3>

					<form
						id="form"
						className="bg-white w-full rounded-xl py-7 md:py-8 overflow-hidden pb-10"
						onSubmit={sendMail}
					>
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
								<div className="flex-grow">
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
							className="bg-slate-700 hover:bg-slate-500 font-bold text-white mt-7 px-5 py-3 rounded-md text-sm flex gap-16 items-center"
						>
							{loading && (
								<ButtonLoader
									color={"bg-white"}
									active={"bg-white"}
								/>
							)}
							<span>{loading ? "Submiting" : "Submit"}</span>
						</button>
					</form>
				</motion.div>
			</div>
		</div>
	);
};

export default ContactForm;
