import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import useSWR from "swr";
import { cryptoFetcher } from "../src/fetchers/cryptoFetcher";
import { COINS_COINGECKO_API_URL } from "../src/fetchers/cryptoFetcher";
import { Coin, PortfolioCoin } from "../types/crypto";
import { useSearch } from "./useSearch";

export function useCrypto() {
  const { data, error } = useSWR(COINS_COINGECKO_API_URL, cryptoFetcher);
  const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoin[] | null>(
    null
  );

  const { search, onChange } = useSearch();

  const topTenCoins = data?.slice(0, 10);

  const filteredCoins = data?.filter((coin: Coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const onAddCoinToPortfolio = (coinId: string) => {
    const portfolioCoinId =
      data && data.find((coin: Coin) => coin.id === coinId)?.id;
    setPortfolioCoins((prevState) => {
      if (Array.isArray(prevState) && prevState !== null) {
        const nextCoins = [
          ...prevState,
          { coinId: portfolioCoinId, holdings: 0 },
        ];
        return nextCoins;
      } else {
        return [{ coinId: portfolioCoinId, holdings: 0 }];
      }
    });
    return portfolioCoinId;
  };

  return {
    data,
    topTenCoins,
    isLoading: !error && !data,
    isError: error,
    filteredCoins,
    search,
    onChange,
    onAddCoinToPortfolio,
    portfolioCoins,
  };
}
