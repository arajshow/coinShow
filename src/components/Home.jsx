import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CryptoContext } from "../context/CryptoContext";
import BlueBox from "./Sidebar/BlueBox";
import TrendingSection from "./Sidebar/TrendingSection";
import Dashboard from "./Dashboard";

const Home = () => {
	const { coin } = useParams();
	const [loading, setLoading] = useState(false);
	const { coinList, topCoinList, getTopCoinsData } = useContext(CryptoContext);

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				await getTopCoinsData();
			} catch (error) {
				console.log("useEffect error ", error);
			}
			setLoading(false);
		})();
	}, []);

	if (loading) {
		return (
			<div className="flex items-center justify-center w-screen min-h-screen ">
				<div className="spinner" />
			</div>
		);
	}

	return (
		<div className="w-screen min-h-screen bg-backgroundColor flex flex-col font-inter">
			<Navbar />
			<div className="flex relative w-[96%] mx-auto md:w-11/12 items-center justify-start gap-[20px] mt-16">
				{/* Cryptocurrencies >> Bitcoin */}
				<div className="absolute top-[5%] flex mt-[10px] items-center">
					<p className="flex text-[14px] font-inter text-slate-500 mr-2">
						Cryptocurrencies{" "}
					</p>
					<MdKeyboardDoubleArrowRight className="text-slate-700" />
					<span className="text-black font-bold ml-2 capitalize">{coin}</span>
				</div>

				{/* section 1 */}
				<div className="lg:w-[70%] w-full">
					<Dashboard />
				</div>

				{/* section 2 */}
				<div className="lg:flex lg:flex-col hidden lg:w-[27%] gap-4">
					<BlueBox />

					<TrendingSection />
				</div>
			</div>
		</div>
	);
};

export default Home;
