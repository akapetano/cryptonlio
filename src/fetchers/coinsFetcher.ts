import {
  COINS_COINGECKO_API_URL,
  COINS_COINGECKO_API_URL_TOP10,
} from "../../constants/globals";
import { Coin } from "../../types/crypto";

export const coinsFetcher: () => Promise<Coin[]> = async () => {
  const response = await fetch(COINS_COINGECKO_API_URL);

  return await response.json();
};

export const topTenCoinsFetcher: () => Promise<Coin[]> = async () => {
  const response = await fetch(COINS_COINGECKO_API_URL_TOP10);

  return await response.json();
};
