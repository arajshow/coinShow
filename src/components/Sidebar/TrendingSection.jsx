import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const TrendingSection = ({ coinList }) => {
	return (
		<div className="fle flex-col bg-white rounded-lg p-5  items-center">
			<p className="text-lg font-bold mb-4">Trending Coins (24h)</p>
			{coinList.map((coin, index) => {
				if (coin.score > 2) return <></>;

				return (
					<div className="flex justify-between gap-5 p-2">
						<div className="flex gap-2 items-center">
							<img
								src={coin.small}
								className="w-[40px] h-[40px] rounded-full object-contain"
							/>
							<p className="text-lg font-semibold">{`${coin.id}(${coin.symbol})`}</p>
						</div>
						<div className="flex text-bggreen bg-lightgreen p-2 gap-1 rounded-lg items-center">
							<TiArrowSortedUp />
							<p>{`${Number(
								coin.data.price_change_percentage_24h.usd.toFixed(2)
							)}%`}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TrendingSection;
