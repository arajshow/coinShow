import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../../context/CryptoContext";
import { FaInfoCircle } from "react-icons/fa";

const Performance = ({ setDescription }) => {
	const { coin } = useParams();
	const [loading, setLoading] = useState(false);
	const [coinData, setCoinData] = useState({});
	const currentDate = new Date();
	const { getCoinData } = useContext(CryptoContext);

	let athAge, atlAge;

	useEffect(() => {
		setLoading(true);
		(async () => {
			const data = await getCoinData(coin);
			setCoinData(data?.data);
			setDescription(coinData?.description);
		})();
		setLoading(false);
	}, []);

	athAge =
		currentDate.getFullYear() -
		new Date(coinData?.market_data?.ath_date?.usd).getFullYear();
	atlAge =
		currentDate.getFullYear() -
		new Date(coinData?.market_data?.atl_date?.usd).getFullYear();

	if (loading) {
		return (
			<div className="flex items-center justify-center w-screen min-h-screen ">
				<div className="spinner" />
			</div>
		);
	}

	return (
		<div className="flex flex-col w-full bg-white rounded-lg p-8 gap-10 pb-12">
			<p className="text-2xl font-bold ">Performance</p>

			{/* 24h tracking */}
			<div className="flex gap-5 items-center">
				<div className="w-[15%] flex flex-col gap-4">
					<p className=" text-[14px] text-gray-500">Today's Low</p>
					<p className=" text-[15px] font-semibold text-black">
						{coinData?.market_data?.low_24h?.usd.toLocaleString("en-US")}
					</p>
				</div>
				<div className="relative w-[70%] h-[5px] rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500">
					<div className="absolute">
						{coinData?.market_data?.current_price?.usd}
					</div>
				</div>
				<div className="w-[15%] flex flex-col gap-4 text-right">
					<p className=" text-[14px] text-gray-500">Today's High</p>
					<p className=" text-[15px] font-semibold text-black">
						{coinData?.market_data?.high_24h?.usd.toLocaleString("en-US")}
					</p>
				</div>
			</div>

			{/* 52w tracking */}
			<div className="flex gap-5 items-center">
				<div className="w-[15%] flex flex-col gap-4">
					<p className=" text-[14px] text-gray-500">52W Low</p>
					<p className=" text-[15px] font-semibold text-black">
						{coinData?.market_data?.low_24h?.usd.toLocaleString("en-US")}
					</p>
				</div>
				<div className="w-[70%] h-[5px] rounded-xl bg-gradient-to-r from-red-500 via-orange-500 to-green-500"></div>
				<div className="w-[15%] flex flex-col gap-4 text-right">
					<p className=" text-[14px] text-gray-500">52W High</p>
					<p className=" text-[15px] font-semibold text-black">
						{coinData?.market_data?.high_24h?.usd.toLocaleString("en-US")}
					</p>
				</div>
			</div>

			{/* fundamentals */}
			<div className="flex flex-col gap-6">
				<div className="flex text-xl items-center gap-2">
					<p className="font-semibold ">Fundamentals</p>
					<FaInfoCircle className=" text-gray-400" />
				</div>
				<div className="w-full flex justify-between ">
					<div className="flex flex-col w-[45%]">
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-5">
							<p className="text-[15px] font-semibold text-gray-400 capitalize ">{`${coinData.name} Price`}</p>
							<p className="text-[14px] text-black font-semibold">{`$${coinData?.market_data?.current_price?.usd.toLocaleString(
								"en-US"
							)}`}</p>
						</div>
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-5">
							<p className="text-[15px] font-semibold text-gray-400 ">{`24h Low / 24h High`}</p>
							<p className="text-[14px] text-black font-semibold">{`$${coinData?.market_data?.low_24h?.usd.toLocaleString(
								"en-US"
							)} / ${coinData?.market_data?.high_24h?.usd.toLocaleString(
								"en-US"
							)}`}</p>
						</div>
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-5">
							<p className="text-[15px] font-semibold text-gray-400 ">{`7d Low / 7d High`}</p>
							<p className="text-[14px] text-black font-semibold">{`$${coinData?.market_data?.low_24h?.usd.toLocaleString(
								"en-US"
							)} / ${coinData?.market_data?.high_24h?.usd.toLocaleString(
								"en-US"
							)}`}</p>
						</div>
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-5">
							<p className="text-[15px] font-semibold text-gray-400 ">{`Trading Volume`}</p>
							<p className="text-[14px] text-black font-semibold">{`$${coinData?.market_data?.total_volume?.usd.toLocaleString(
								"en-US"
							)}`}</p>
						</div>
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-5">
							<p className="text-[15px] font-semibold text-gray-400 ">{`Market Cap Rank`}</p>
							<p className="text-[14px] text-black font-semibold">{`#${coinData?.market_data?.market_cap_rank}`}</p>
						</div>
					</div>
					<div className="flex flex-col w-[45%]">
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-5">
							<p className="text-[15px] font-semibold text-gray-400 ">{`Market Cap`}</p>
							<p className="text-[14px] text-black font-semibold">{`$${coinData?.market_data?.market_cap?.usd.toLocaleString(
								"en-US"
							)}`}</p>
						</div>
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-5">
							<p className="text-[15px] font-semibold text-gray-400 ">{`Market Cap Dominance`}</p>
							<p className="text-[14px] text-black font-semibold">{`38.34%`}</p>
						</div>
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-5">
							<p className="text-[15px] font-semibold text-gray-400 ">{`Volume / Market Cap`}</p>
							<p className="text-[14px] text-black font-semibold">{`${(
								coinData?.market_data?.total_volume?.usd /
								coinData?.market_data?.market_cap?.usd
							).toFixed(4)}`}</p>
						</div>
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-1">
							<p className="text-[15px] font-semibold text-gray-400 ">{`All-Time High`}</p>
							<div className="flex flex-col gap-1 items-end">
								<div className="flex gap-1">
									<p className="text-black text-lg font-medium">{`$${coinData?.market_data?.ath?.usd.toLocaleString(
										"en-US"
									)}`}</p>
									<p
										className={`text-lg font-medium ${
											coinData?.market_data?.ath_change_percentage?.usd > 0
												? " text-bggreen"
												: " text-bgred"
										}`}
									>{`${coinData?.market_data?.ath_change_percentage?.usd.toFixed(
										2
									)}%`}</p>
								</div>
								<p className="text-black font-base">{`${new Date(
									coinData?.market_data?.ath_date?.usd
								).toLocaleDateString("en-US", {
									month: "short",
									day: "2-digit",
									year: "numeric",
								})} (about ${athAge} year${athAge > 1 ? "s" : ""})`}</p>
							</div>
						</div>
						<div className="flex justify-between items-center border-b w-full border-gray-400 py-1">
							<p className="text-[15px] font-semibold text-gray-400 ">{`All-Time Low`}</p>
							<div className="flex flex-col gap-1 items-end">
								<div className="flex gap-1">
									<p className="text-black text-lg font-medium">{`$${coinData?.market_data?.atl?.usd.toLocaleString(
										"en-US"
									)}`}</p>
									<p
										className={`text-lg font-medium ${
											coinData?.market_data?.atl_change_percentage?.usd > 0
												? " text-bggreen"
												: " text-bgred"
										}`}
									>{`${coinData?.market_data?.atl_change_percentage?.usd.toFixed(
										2
									)}%`}</p>
								</div>
								<p className="text-black font-base">{`${new Date(
									coinData?.market_data?.atl_date?.usd
								).toLocaleDateString("en-US", {
									month: "short",
									day: "2-digit",
									year: "numeric",
								})} (about ${atlAge} year${atlAge > 1 ? "s" : ""})`}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Performance;
