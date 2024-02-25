import useSWR from "swr";
import { topTenCoinsFetcher } from "../src/fetchers/coinsFetcher";
// import { COINS_COINGECKO_API_URL_TOP10 } from "../constants/globals";

export function useTopTenCoins() {
  const { data, error } = useSWR("api/coins", topTenCoinsFetcher);

  return {
    topTenCoins: data,
    isLoading: !error && !data,
    isError: error,
  };
}
