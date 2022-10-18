import useSWR from "swr";
import {
  getMarketChartKey,
  marketChartFetcher,
} from "../src/fetchers/marketChartHistoryFetcher";
import { CoinMarketHistory } from "../types/crypto";

export function useCoinMarketChartHistory(
  id: string,
  days: string,
  interval: string
) {
  const { data, error } = useSWR<CoinMarketHistory>(
    getMarketChartKey(id, days, interval),
    marketChartFetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
