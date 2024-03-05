import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
	const NavbarLinks = [
		{
			title: "Crypto Taxes",
		},
		{
			title: "Free Tools",
		},
		{
			title: "Resource Center",
		},
	];

	return (
		<div
			className={`flex h-[80px] items-center bg-white justify-center transition-all duration-200`}
		>
			<div className="flex w-[96%] md:w-11/12 max-w-maxContent items-center justify-between ">
				{/* image */}
				<img
					src={logo}
					className="w-[96px] h-[72px] object-contain"
					alt="logo"
				/>

				{/* Nav links */}
				<div className="flex gap-6 items-center font-semibold">
					<nav className="">
						<ul className="flex  md:gap-x-6 ">
							{NavbarLinks.map((link, index) => (
								<li key={index}>
									<div>
										<p
											className={` text-black text-md hover:scale-105 transition-all duration-200`}
										>
											{link.title}
										</p>
									</div>
								</li>
							))}
						</ul>
					</nav>

					<button className="items-center text-md gap-x-1 mr-1 py-[8px] px-[24px] rounded-lg text-white bg-bgblue">
						Get Started
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
