		items = {
			coinPrice: coinData.id,
			todayLow: coinData?.market_data?.low_24h?.usd.toLocaleString("en-US"),
			todayHigh: coinData?.market_data?.high_24h?.usd.toLocaleString("en-US"),
			sevenDayLow: coinData?.market_data?.low_24h?.usd.toLocaleString("en-US"),
			sevenDayHigh:
				coinData?.market_data?.high_24h?.usd.toLocaleString("en-US"),
			tradingVolume:
				coinData?.market_data?.total_volume?.usd.toLocaleString("en-US"),
			marketCapRank: coinData?.market_data?.market_cap_rank,
			marketCap: coinData?.market_data?.market_cap?.usd.toLocaleString("en-US"),
			marketCapDominance: coinData?.market_data?.arket_cap_fdv_ratio * 100,
			volumeToMarketCapRatio: (items.tradingVolume / items.marketCap).toFixed(
				4
			),
			ath: new Date(coinData?.market_data?.ath_date?.usd).toLocaleDateString(
				"en-US",
				{
					month: "short",
					day: "2-digit",
					year: "numeric",
				}
			),
			athPercentage: coinData?.market_data?.ath_change_percentage?.usd,
			athDate: coinData?.market_data?.ath_date?.usd,
			atl: coinData?.market_data?.atl?.usd,
			atlPercentage: coinData?.market_data?.atl_change_percentage?.usd,
			atlDate: new Date(
				coinData?.market_data?.atl_date?.usd
			).toLocaleDateString("en-US", {
				month: "short",
				day: "2-digit",
				year: "numeric",
			}),
		};