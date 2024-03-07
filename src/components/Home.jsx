import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import BlueBox from "./Sidebar/BlueBox";
import TrendingSection from "./Sidebar/TrendingSection";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

const Home = () => {
	const { coin } = useParams();

	return (
		<div className="w-screen min-h-screen bg-backgroundColor flex flex-col font-inter">
			<Navbar />
			<div className="flex relative w-[96%] mx-auto md:w-11/12 items-center lg:items-start justify-start gap-[20px] my-16">
				{/* Cryptocurrencies >> Bitcoin */}
				<div className="absolute top-[5%] flex mt-[10px] items-center">
					<p className="flex text-[14px] font-inter text-slate-500 mr-2">
						Cryptocurrencies{" "}
					</p>
					<MdKeyboardDoubleArrowRight className="text-slate-700" />
					<span className="text-black font-bold ml-2 capitalize">{coin}</span>
				</div>

				{/* section 1 */}
				<div className="lg:w-[65%] w-full">
					<Dashboard />
				</div>

				{/* section 2 */}
				<div className="lg:flex lg:flex-col hidden lg:w-[30%] gap-4">
					<BlueBox />

					<TrendingSection />
				</div>
			</div>

			<Footer />
		</div>
	);
};

export default Home;
