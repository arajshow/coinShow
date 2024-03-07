import React from "react";
import { useParams } from "react-router-dom";
import { HoldingList } from "../../data/HoldingList";
import HoldingCard from "./HoldingCard";

const HoldingCardSection = () => {
	const { coin } = useParams();
	return (
		<section className="max-w-[807px]">
			<header className="text-2xl capitalize font-semibold py-4 text-slate-900">
				{`Already Holding ${coin}?`}
			</header>
			<div className="grid gap-5 md:grid-cols-2">
				{HoldingList.map((card, index) => (
					<HoldingCard key={`card-${index}`} {...card} />
				))}
			</div>
		</section>
	);
};

export default HoldingCardSection;
