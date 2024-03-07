import React from "react";
import { TiArrowSortedUp } from "react-icons/ti";

const TrendingSection = ({ coinList }) => {
	return (
		<div className="fle flex-col bg-white rounded-lg gap-6 p-5  items-center">
			<p className="text-lg font-bold">Trending Coins (24h)</p>
			{coinList.map((coin, index) => {
				if (coin.score > 2) return <></>;

				return (
					<div className="flex justify-between gap-5">
						<div className="flex gap-2">
							<img
								src={coin.small}
								className="w-[40px] h-[40px] rounded-full object-contain"
							/>
							<p>{`${coin.id}(${coin.symbol})`}</p>
						</div>
						<div className="flex text-bggreen bg-lightgreen p-2 gap-2 rounded-lg">
							<TiArrowSortedUp />
							<p>{`${Math.round(
								coin.data.price_change_percentage_24h.usd,
								2
							)}%`}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default TrendingSection;
