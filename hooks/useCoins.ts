import { useMemo } from "react";
import useSWR from "swr";
import { coinsFetcher } from "../src/fetchers/coinsFetcher";
import { COINS_COINGECKO_API_URL } from "../constants/globals";
import { Coin } from "../types/crypto";
import { useSearch } from "./useSearch";

export function useCoins() {
  const { data, error } = useSWR(COINS_COINGECKO_API_URL, coinsFetcher);
  const { search, onChange } = useSearch();

  const filteredCoins = useMemo(
    () =>
      data?.filter((coin: Coin) =>
        coin.name.toLowerCase().includes(search.toLowerCase())
      ) as Coin[],
    [data, search]
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    filteredCoins,
    search,
    onChange,
  };
}
