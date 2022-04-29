import useSWR from 'swr';
import {
  getMarketChartKey,
  marketChartFetcher,
} from '../src/fetchers/marketChartHistoryFetcher';
import { CoinMarketHistory } from '../types/crypto';

export const useCoinMarketChartHistory = (id: string) => {
  const { data, error } = useSWR<CoinMarketHistory>(
    getMarketChartKey(id),
    marketChartFetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
