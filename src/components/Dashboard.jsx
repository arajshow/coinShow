import React, { useState } from "react";
import GraphSection from "./Dashboard/GraphSection";
import { MenuList } from "../data/MenuList";
import Performance from "./Dashboard/Performance";

const Dashboard = () => {
	const [description, setDescription] = useState("");
	return (
		<div className="flex flex-col gap-4">
			<GraphSection />
			<nav className="flex gap-4 border-b border-gray-300">
				{MenuList.map((data) => (
					<p
						key={data.id}
						className={`font-semibold text-[16px] cursor-pointer p-2 ${
							data.id === 1
								? "text-bgblue border-b-4 border-bgblue"
								: "text-gray-800"
						} hover:scale-95 hover:text-bgblue transition-all duration-200`}
					>
						{data.title}
					</p>
				))}
			</nav>

			<Performance setDescription={setDescription} />
		</div>
	);
};

export default Dashboard;
