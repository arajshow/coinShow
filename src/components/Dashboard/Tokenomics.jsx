import React from "react";

const Tokenomics = () => {
	return (
		<section className="flex flex-col bg-white rounded-lg p-8 pb-12">
			<header className="text-2xl font-bold leading-7 text-black max-md:max-w-full">
				Tokenomics
			</header>
			<h2 className="mt-8 text-xl font-semibold leading-9 text-stone-900 max-md:max-w-full">
				Initial Distribution
			</h2>
			<div className="py-6 max-md:pr-5 max-md:max-w-full flex max:flex gap-8 max-md:gap-0">
				<div className="flex flex-col w-[25%] max-md:ml-0 max-md:w-full">
					<svg
						className="transform -rotate-90 w-[100%] h-[100%]"
						viewBox="0 0 100 100"
					>
						{/* Initial Distribution */}
						<circle
							className=" text-yellow-500 progress-ring__circle stroke-current"
							strokeWidth="16"
							cx="50"
							cy="50"
							r="40"
							fill="transparent"
						/>
						<circle
							className="text-bgblue progress-ring__circle stroke-current"
							strokeWidth="16"
							cx="50"
							cy="50"
							r="40"
							fill="transparent"
							strokeDasharray="330"
							strokeDashoffset={400 - (400 * 4) / 7}
						/>
					</svg>
				</div>
				<div className="flex flex-col w-[50%] max-md:ml-0 max-md:w-full">
					<div className="flex flex-col justify-center md:mr-7 gap-5  my-auto text-lg text-neutral-800 max-md:mt-10">
						<div className="flex gap-2">
							<div className="h-3 w-3 my-auto rounded-md bg-bgblue" />
							<div>{`Crowdsale investors: 80%`}</div>
						</div>
						<div className="flex gap-2">
							<div className="h-3 w-3 my-auto rounded-md bg-yellow-500" />
							<div>{`Foundation: 20%`}</div>
						</div>
					</div>
				</div>
			</div>
			<p className="text-base pr-10 pt-6 font-medium leading-7 text-[#3E424A] max-md:max-w-full">
				Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
				vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
				amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
				eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
				felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
				aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
				curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
				ut. Vulputate ipsum aliquet odio nisi eu ac risus.
			</p>
		</section>
	);
};

export default Tokenomics;
