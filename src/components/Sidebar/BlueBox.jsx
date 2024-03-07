import React from "react";
import SidebarImg from "../../assets/sidebarImg.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const BlueBox = () => {
	return (
		<div className="flex flex-col gap-4 justify-center items-center text-center rounded-lg bg-bgblue p-10 text-white">
			<p className=" text-2xl font-semibold">Get Started with KoinX for FREE</p>
			<p>
				With our range of features that you can equip for free, KoinX allows you
				to be more educated and aware of your tax reports.
			</p>
			<img src={SidebarImg} alt="img" className="" />
			<div className="flex rounded-lg p-4 px-6 text-black gap-3 font-semibold bg-white items-center">
				<p>Get Started for FREE</p>
				<FaArrowRightLong />
			</div>
		</div>
	);
};

export default BlueBox;
