import useSWR from "swr";
import { topTenCoinsFetcher } from "../src/fetchers/coinsFetcher";

export function useTopTenCoins() {
  const { data, error } = useSWR("api/top-ten-coins", topTenCoinsFetcher);

  return {
    topTenCoins: data,
    isLoading: !error && !data,
    isError: error,
  };
}
