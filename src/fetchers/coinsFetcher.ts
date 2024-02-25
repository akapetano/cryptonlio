import {
  COINS_COINGECKO_API_URL,
  COINS_COINGECKO_API_URL_TOP10,
} from "../../constants/globals";
import { Coin, NewCoin } from "../../types/crypto";

export const coinsFetcher: () => Promise<Coin[]> = async () => {
  const response = await fetch(COINS_COINGECKO_API_URL);

  return await response.json();
};

export const topTenCoinsFetcher: () => Promise<NewCoin[]> = async () => {
  const response = await fetch("/api/coins");

  return await response.json();
};
