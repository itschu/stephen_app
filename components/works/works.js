import Button from "../button";
import Image from "next/image";

const Works = () => {
	const bg = {};

	return (
		<div className="relative" id="works">
			<div className="py-14 md:py-12 px-4 md:px-10 flex flex-col gap-12 items-center h-screen overlay">
				<div className="absolute top-0 left-0 bottom-0 right-0 z-0" />

				<h2 className="heading font-extrabold md:mb-0 text-white self-start z-10">
					Our Works
				</h2>

				<div className="grid grid-cols-10 md:grid-cols-11 gap-3 w-full z-10 p-2 md:px-10 h-full flex-grow">
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
					<div className="bg-neutral-200 col-span-2 hidden md:block md:col-span-2 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${4}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-10 md:col-span-2 row-span-2 md:row-span-1 relative">
						<Image
							src={`/work${3}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-2 hidden md:block md:col-span-2 row-span-2 md:row-span-2 relative">
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
							src={`/work${7}.jpg`}
							layout="fill"
							alt="work 1"
						/>
					</div>
					<div className="bg-neutral-200 col-span-3 md:col-span-3 row-span-2 md:row-span-2 relative">
						<Image
							src={`/work${4}.jpg`}
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
					// sm={true}
				/>
			</div>
		</div>
	);
};

export default Works;
