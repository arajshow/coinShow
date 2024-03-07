import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { MdPlaylistAddCheckCircle } from "react-icons/md";
import { FaInfoCircle } from "react-icons/fa";

const Sentiment = () => {
	return (
		<div className="flex flex-col w-full bg-white rounded-lg p-8 gap-8 pb-12">
			<p className="text-2xl font-bold ">Sentiment</p>

			{/* key events */}
			<div className="flex flex-col gap-6">
				<div className="flex text-xl items-center gap-2">
					<p className="font-semibold ">Key Events</p>
					<FaInfoCircle className=" text-gray-400" />
				</div>
				<div className="w-full flex justify-between gap-4">
					<div className="flex p-4 rounded-xl bg-lightblue gap-2 pb-6">
						<div className="flex items-start text-4xl text-bgblue">
							<MdPlaylistAddCheckCircle />
						</div>
						<div className="flex flex-col gap-4 text-black">
							<p className="text-lg font-semibold ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate enim{" "}
							</p>
							<p className="text-lg text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
								nam maiores maxime ipsam, explicabo corporis qui voluptate nihil
								quod sequi voluptas, quam quaerat nisi perferendis vero quos
								quibusdam illo laudantium?
							</p>
						</div>
					</div>
					<div className="flex p-4 rounded-xl bg-lightgreen gap-2">
						<div className="flex items-start text-4xl text-bggreen">
							<BsArrowUpRightCircleFill />
						</div>
						<div className="flex flex-col gap-4 text-black">
							<p className="text-lg font-semibold ">
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Voluptate enim{" "}
							</p>
							<p className="text-lg text-gray-600">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
								nam maiores maxime ipsam, explicabo corporis qui voluptate nihil
								quod sequi voluptas, quam quaerat nisi perferendis vero quos
								quibusdam illo laudantium?
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Analyst Estimates */}
			<div className="flex flex-col gap-6">
				<div className="flex text-xl items-center gap-2">
					<p className="font-semibold ">Analyst Estimates</p>
					<FaInfoCircle className=" text-gray-400" />
				</div>

				<div className="flex gap-8 h-[120px]">
					<div className="flex justify-center bg-lightgreen gap-1 p-2 font-semibold text-bggreen w-[120px] h-full rounded-full items-center">
						<p className="text-[300%]">76</p>{" "}
						<span className="font-semibold text-lg">{`%`}</span>
					</div>
					<div className="flex flex-col items-center justify-between">
						<div className="flex gap-2 w-full items-center">
							<p className="text-xl text-gray-500 pr-4">Buy</p>
							<div className=" h-[8px] w-[30em] rounded-md bg-bggreen" />
							<p className="text-lg text-gray-600">76%</p>
						</div>
						<div className="flex gap-2 w-full items-center">
							<p className="text-xl text-gray-500 pr-4">Hold</p>
							<div className=" h-[8px] w-[4em] rounded-md bg-gray-300" />
							<p className="text-lg text-gray-600">8%</p>
						</div>
						<div className="flex gap-2 w-full items-center">
							<p className="text-xl text-gray-500 pr-4">Sell</p>
							<div className=" h-[8px] w-[8em] rounded-md bg-bgred" />
							<p className="text-lg text-gray-600">16%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Sentiment;
