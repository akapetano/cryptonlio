import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import useSWR from "swr";
import { cryptoFetcher } from "../src/fetchers/cryptoFetcher";
import { COINS_COINGECKO_API_URL } from "../src/fetchers/cryptoFetcher";
import { Coin, PortfolioCoin } from "../types/crypto";
import { useSearch } from "./useSearch";

export function useCrypto() {
  const { data, error } = useSWR(COINS_COINGECKO_API_URL, cryptoFetcher);
  const portfolioCoins: PortfolioCoin[] = [];

  const { search, onChange } = useSearch();

  const topTenCoins = data?.slice(0, 10);

  const filteredCoins = data?.filter((coin: Coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const addCoinToPortfolio = (coinId: string) => {
    const portfolioCoin = data.filter((coin: Coin) => coin.id === coinId);
    return portfolioCoins.push(portfolioCoin);
  };

  return {
    data,
    topTenCoins,
    isLoading: !error && !data,
    isError: error,
    filteredCoins,
    search,
    onChange,
    addCoinToPortfolio,
    portfolioCoins,
  };
}
