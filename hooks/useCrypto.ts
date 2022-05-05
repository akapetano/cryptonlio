import useSWR from 'swr';
import { cryptoFetcher } from '../src/fetchers/cryptoFetcher';
import { COINS_COINGECKO_API_URL } from '../src/fetchers/cryptoFetcher';

export const useCrypto = () => {
  const { data, error } = useSWR(COINS_COINGECKO_API_URL, cryptoFetcher);

  return { data, isLoading: !error && !data, isError: error };
};
