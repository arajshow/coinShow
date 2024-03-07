import { createContext, useLayoutEffect, useState } from "react";
import { apiConnector } from "../services/apiConnector";

export const CryptoContext = createContext({});

function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // Swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

export const CryptoProvider = ({ children }) => {

  const [coinList, setCoinList] = useState([]);
  const [topCoinList, setTopCoinList] = useState([]);
  const [trendingCoins, setTrendingCoinsList] = useState([]);

 const getCoinData = async (CoinID) => {
    try {

      const data = await apiConnector("GET", `https://api.coingecko.com/api/v3/coins/${CoinID}`)
      console.log("coinData", data);

      return data;
      
    } catch (error) {
      console.log("getCoinData error:- ", error);
    }

  };

  const getTopCoinsData = async () => {
    try {

      let data = await apiConnector("GET", "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=true&locale=en");
      console.log("starting data", data);

      console.log("ranking data of coins" ,  data.data);

      setTopCoinList(data.data);
      setCoinList(shuffle(data.data));

    } catch (error) {
      console.log(error);
    }
  };

  const getTrendingCoinsData = async () => {

    try {

      const data = await apiConnector("GET", `https://api.coingecko.com/api/v3/search/trending`)
      console.log("trending coin ", data.data);

      // actual coin is in data.coins.item
      const result = data?.data.coins.map( item => item?.item);
      // console.log("trending coin ", result);
      setTrendingCoinsList(result);
      
    } catch (error) {
      console.log("getCoinData error:- ", error);
    }

  };

  return (
    <CryptoContext.Provider
      value={{
        coinList, setCoinList, topCoinList, setTopCoinList, trendingCoins, setTrendingCoinsList, getTopCoinsData, getCoinData, getTrendingCoinsData
      }}
    >
      {children}
    </CryptoContext.Provider>
  );
};
