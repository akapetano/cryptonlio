import { COINS_COINGECKO_API_URL } from "../../constants/globals";
import { Coin as OldCoin, NewCoin } from "../../types/crypto";

export const coinsFetcher: () => Promise<OldCoin[]> = async () => {
  const response = await fetch(COINS_COINGECKO_API_URL);

  return await response.json();
};

export const topTenCoinsFetcher: () => Promise<NewCoin[]> = async () => {
  const response = await fetch("/api/top-ten-coins");

  return await response.json();
};
