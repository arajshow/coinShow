import React, { useContext, useEffect, useState } from "react";
import { TiArrowSortedUp, TiArrowSortedDown } from "react-icons/ti";
import { CryptoContext } from "../../context/CryptoContext";
import { Link } from "react-router-dom";

const TrendingSection = () => {
	const [loading, setLoading] = useState(false);
	const { trendingCoins, getTrendingCoinsData } = useContext(CryptoContext);

	useEffect(() => {
		setLoading(true);
		(async () => {
			await getTrendingCoinsData();
		})();

		setLoading(false);
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center w-screen min-h-screen ">
				<div className="spinner" />
			</div>
		);
	}

	return (
		<div className="fle flex-col bg-white rounded-lg p-5  items-center">
			<p className="text-lg font-bold mb-4">Trending Coins (24h)</p>
			{trendingCoins.map((coin, index) => {
				if (coin.score > 2) return <></>;

				return (
					<Link
						to={`/coin/${coin.id}`}
						className="flex justify-between gap-5 p-2"
					>
						<div className="flex gap-2 items-center">
							<img
								src={coin.small}
								className="w-[40px] h-[40px] rounded-full object-contain"
							/>
							<p className="text-lg font-semibold">{`${coin.id}(${coin.symbol})`}</p>
						</div>
						<div
							className={`clg:flex hidden ${
								coin.data.price_change_percentage_24h.usd > 0
									? " bg-lightgreen text-bggreen"
									: " bg-lightred text-bgred"
							} p-2 gap-1 rounded-lg items-center`}
						>
							{coin.data.price_change_percentage_24h.usd > 0 ? (
								<TiArrowSortedUp />
							) : (
								<TiArrowSortedDown />
							)}
							<p>{`${Number(
								coin.data.price_change_percentage_24h.usd.toFixed(2)
							)}%`}</p>
						</div>
					</Link>
				);
			})}
		</div>
	);
};

export default TrendingSection;
