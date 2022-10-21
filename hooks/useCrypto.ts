import useSWR from "swr";
import { cryptoFetcher } from "../src/fetchers/cryptoFetcher";
import { COINS_COINGECKO_API_URL } from "../src/fetchers/cryptoFetcher";
import { Coin } from "../types/crypto";
import { useSearch } from "./useSearch";

export function useCrypto() {
  const { data, error } = useSWR(COINS_COINGECKO_API_URL, cryptoFetcher);

  const { search, onChange } = useSearch();

  const topTenCoins = data?.slice(0, 10);

  const filteredCoins = data?.filter((coin: Coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return {
    data,
    topTenCoins,
    isLoading: !error && !data,
    isError: error,
    filteredCoins,
    onChange,
  };
}
