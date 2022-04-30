import useSWR from 'swr';
import { cryptoFetcher } from '../src/fetchers/cryptoFetcher';
import { COINS_COINGECKO_API_URL } from '../src/fetchers/cryptoFetcher';

export const useCrypto = () => {
  return useSWR(COINS_COINGECKO_API_URL, cryptoFetcher);
};
