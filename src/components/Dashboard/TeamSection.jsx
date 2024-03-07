import React from "react";
import { TeamMembers } from "../../data/TeamMembers";
import TeamMemberCard from "./TeamMemberCard";

const TeamSection = () => {
	return (
		<section className="flex flex-col py-9 mb-10 pl-6 bg-white rounded-lg max-md:pl-5">
			<header className="text-2xl font-bold leading-7 text-black  max-md:max-w-full">
				Team
			</header>
			<div className="pt-5 mr-7 text-base font-medium	 leading-7 text-[#3E424A] max-md:mr-2.5 max-md:max-w-full">
				Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
				nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
				quam. Facilisis purus convallis quam augue.
			</div>
			{TeamMembers.map((member, index) => (
				<TeamMemberCard key={index} {...member} />
			))}
		</section>
	);
};

export default TeamSection;
