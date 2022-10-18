import useSWR from "swr";
import { cryptoFetcher } from "../src/fetchers/cryptoFetcher";
import { COINS_COINGECKO_API_URL } from "../src/fetchers/cryptoFetcher";

export function useCrypto() {
  const { data, error } = useSWR(COINS_COINGECKO_API_URL, cryptoFetcher);

  const topTenCoins = data?.slice(0, 10);

  return { data, topTenCoins, isLoading: !error && !data, isError: error };
}
