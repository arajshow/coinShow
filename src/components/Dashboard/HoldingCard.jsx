import React from "react";
import { GrFormNextLink } from "react-icons/gr";

const HoldingCard = ({ imageUrl, altText, title, buttonText, bgColor }) => {
	return (
		<div
			className={`flex flex-col w-full max-w-[388px] rounded-md  max-md:w-full ${bgColor}`}
		>
			<div className="flex gap-5 justify-between p-3 rounded-md">
				<img
					loading="lazy"
					src={imageUrl}
					alt={altText}
					className="w-32 aspect-square"
				/>
				<div className="flex flex-col justify-center">
					<div className="text-[22px] font-bold text-white">{title}</div>
					<div className="flex  items-center mt-4">
						<button className="flex items-center gap-3 px-5 py-2 text-[16px] font-semibold bg-white rounded-lg text-slate-900">
							<span>{buttonText}</span>
							<GrFormNextLink className="w-5 text-xl aspect-square" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HoldingCard;
