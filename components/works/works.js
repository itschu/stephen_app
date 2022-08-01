import Button from "../button";
import Image from "next/image";

export const overlay = {
	backgroundImage:
		"linear-gradient(107.93deg, rgba(17, 97, 191, 0.85) 0%, rgba(158, 181, 209, 0.282031) 0.01%, rgba(16, 95, 193, 0.85) 0.02%, rgba(30, 159, 145, 0.85) 100%, rgba(29, 154, 148, 0.85) 100%)",
};

const Works = () => {
	const bg = {
		backgroundImage: "url(/works.jpg)",
		backgroundPosition: "center",
		backgroundSize: "cover",
	};

	return (
		<div style={bg} className="relative">
			<div
				id="works"
				className="py-14 md:py-16 px-4 md:px-10 h-fit flex flex-col gap-14 items-center "
			>
				<div
					className="absolute top-0 left-0 bottom-0 right-0 z-0"
					style={overlay}
				/>

				<h2 className="heading font-extrabold mb-10 md:mb-10 text-white self-start z-10">
					Our Works
				</h2>

				<div
					className="grid grid-cols-10 md:grid-cols-11 gap-3 w-full z-10 p-2 md:px-10"
					style={{ minHeight: 500 }}
				>
					<div className="bg-neutral-200 col-span-5 md:col-span-2 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${1}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-5 md:col-span-3 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${2}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-2 md:col-span-2 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${4}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-6 md:col-span-2 row-span-2 md:row-span-1 relative">
						<Image
							src={`/work${3}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-2 md:col-span-2 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${7}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>

					<div className="bg-neutral-100 col-span-6 md:col-span-2 row-span-2 md:row-span-3 relative">
						<Image
							src={`/work${13}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-400 col-span-4 md:col-span-4 row-span-2 md:row-span-2 relative">
						<Image
							src={`/about-2.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-3 md:col-span-3 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${15}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-4 md:col-span-1 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${11}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-3 md:col-span-1 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${19}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
				</div>

				<Button
					text={"book a meeting"}
					color={"#000"}
					outline={false}
					fn={true}
				/>
			</div>
		</div>
	);
};

export default Works;
