import { COINS_COINGECKO_API_URL } from "../../constants/globals";

export const cryptoFetcher = async () => {
  const response = await fetch(COINS_COINGECKO_API_URL);

  return await response.json();
};
