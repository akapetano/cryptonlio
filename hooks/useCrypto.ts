import { useToast } from "@chakra-ui/react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";
import useSWR from "swr";
import { cryptoFetcher } from "../src/fetchers/cryptoFetcher";
import { COINS_COINGECKO_API_URL } from "../src/fetchers/cryptoFetcher";
import { Coin, PortfolioCoin } from "../types/crypto";
import { Portfolio } from "../types/portfolio";
import { useSearch } from "./useSearch";

export function useCrypto() {
  const { data, error } = useSWR(COINS_COINGECKO_API_URL, cryptoFetcher);
  const [portfolioCoins, setPortfolioCoins] = useState<PortfolioCoin[] | null>(
    null
  );

  const { search, onChange } = useSearch();
  const toast = useToast();

  const topTenCoins = data?.slice(0, 10);

  const filteredCoins = data?.filter((coin: Coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const onAddCoinToPortfolio = (coinId: string) => {
    const portfolioCoinId =
      data && data.find((coin: Coin) => coin.id === coinId)?.id;
    setPortfolioCoins((prevState) => {
      if (
        prevState !== null &&
        Array.isArray(prevState) &&
        prevState.some((coin) => coin.coinId !== portfolioCoinId)
      ) {
        const nextCoins = [
          ...prevState,
          { coinId: portfolioCoinId, holdings: 0 },
        ];
        return nextCoins;
      } else if (
        prevState !== null &&
        Array.isArray(prevState) &&
        prevState.some((coin) => coin.coinId === portfolioCoinId)
      ) {
        toast({
          position: "bottom",
          title: "Duplicate coin",
          description: `${
            portfolioCoinId.slice(0, 1).toUpperCase() + portfolioCoinId.slice(1)
          } already in portfolio, please select another coin.`,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
        return [...prevState];
      } else {
        return [{ coinId: portfolioCoinId, holdings: 2 }];
      }
    });
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
    setPortfolioCoins,
  };
}
