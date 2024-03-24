import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CryptoContext } from "../../context/CryptoContext";
import HoldingCardSection from "./HoldingCardSection";

const CoinDetail = () => {
	const { coin } = useParams();
	const [desc, setDesc] = useState("");
	const [loading, setLoading] = useState(false);
	const { getCoinData } = useContext(CryptoContext);

	useEffect(() => {
		setLoading(true);
		(async () => {
			const data = await getCoinData(coin);
			console.log("coin ki data", data);
			setDesc(data?.data?.description?.en.split(" ").splice(0, 50).join(" "));
		})();
		setLoading(false);
	}, [coin]);

	if (loading) {
		return (
			<div className="flex items-center justify-center w-screen min-h-screen ">
				<div className="spinner" />
			</div>
		);
	}

	return (
		<div className="flex flex-col w-full bg-white rounded-lg p-8 gap-4 pb-12">
			<p className="text-2xl font-bold capitalize">{`About ${coin}`}</p>

			<div className="flex flex-col gap-3 border-b pb-5 border-gray-300">
				<h2 className="mt-8 text-lg font-bold leading-5 text-black max-md:max-w-full capitalize">
					{`What is ${coin}?`}
				</h2>
				<p className="mt-2.5 text-base leading-7 font-medium text-gray-700 max-md:max-w-full">
					{`${desc}...`}
				</p>
			</div>

			<div className="flex flex-col gap-3 border-b pb-5 border-gray-300">
				<h2 className="mt-8 text-lg font-bold leading-5 text-black max-md:max-w-full ">
					{`Lorem ipsum dolor sit amet`}
				</h2>
				<p className="mt-2.5 text-base leading-7 font-medium text-gray-700 max-md:max-w-full">
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
					ratione quaerat totam optio enim pariatur, sit a eligendi aperiam odit
					veniam sed porro expedita accusamus adipisci minima molestiae
					blanditiis fuga. Fuga optio eius nemo excepturi corporis, enim
					commodi? Quis, cupiditate voluptas earum ut consectetur tenetur
					nostrum voluptate dicta eveniet est facilis accusantium saepe quasi
					veritatis deserunt vero reiciendis consequuntur dolor. Quis labore
					consequatur, voluptates <br /> <br /> Lorem ipsum dolor sit amet
					consectetur adipisicing elit. Ipsam laudantium numquam eligendi earum
					magni dolorum adipisci, deleniti quisquam, rerum dolor vitae, placeat
					beatae. Nesciunt sed laborum libero porro molestias impedit! Minus et
					dicta aliquam esse similique, molestias aliquid rerum quos
					voluptatibus, repudiandae aut porro labore nobis ipsa deserunt omnis
					molestiae. Porro quas dolor velit in iste. Laudantium omnis
					reprehenderit eaque?Voluptas eos illo dicta pariatur ipsa! Debitis, et
					consequatur. Exercitationem rem odit officia? Aperiam veritatis ipsum
					omnis dolorem iusto quidem fugiat deleniti at minus quae voluptas
					<br />
					<br /> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
					repellendus, veritatis cum facilis vero sequi excepturi reprehenderit
					ipsum deleniti provident voluptatem a molestiae, nemo assumenda
					ratione ipsam asperiores officiis fugit! Alias exercitationem velit
					expedita aliquid iste, delectus harum ullam, hic numquam, illo ducimus
					quasi adipisci eum ipsam.
				</p>
			</div>

			<HoldingCardSection />

			<p className="mt-2.5 text-base leading-7 font-medium text-gray-700 max-md:max-w-full">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam tempore
				ducimus accusantium nam maiores iste quo nesciunt sit explicabo!
				Suscipit cumque iure nobis possimus maiores consequatur, blanditiis
				quisquam natus numquam. iste quo nesciunt sit explicabo! Suscipit cumque
				iure nobis possimus maiores consequatur, blanditiis quisquam natus
				numquam.
			</p>
		</div>
	);
};

export default CoinDetail;
