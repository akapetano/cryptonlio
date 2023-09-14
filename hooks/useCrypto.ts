import { useToast } from "@chakra-ui/react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { useState, useEffect } from "react";
import useSWR from "swr";
import { cryptoFetcher } from "../src/fetchers/cryptoFetcher";
import { COINS_COINGECKO_API_URL } from "../constants/globals";
import { Coin, PortfolioCoin } from "../types/crypto";
import { Portfolio } from "../types/portfolio";
import { useSearch } from "./useSearch";
import {
  convertSnakeCaseToCamelCase,
  convertCamelCaseToSnakeCase,
} from "../utils/index";

export function useCrypto(
  portfolioId?: string | null,
  isPortfolioPage: boolean = false
) {
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

  async function getPortfolioCoins() {
    try {
      const { data, error } = await supabaseClient
        .from("portfolio_coins")
        .select("*")
        .eq("deleted", false);

      if (data && Array.isArray(data)) {
        const convertedData = data.map((item) =>
          convertSnakeCaseToCamelCase(item)
        ) as PortfolioCoin[];
        setPortfolioCoins(convertedData);
      }
    } catch (error) {
      if (error instanceof Error) {
        toast({
          position: "top",
          title: "Error!",
          description: error?.message,
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    }
  }

  const onAddCoinToPortfolio = async (coinId: string) => {
    const portfolioCoin = data && data.find((coin: Coin) => coin.id === coinId);
    if (!portfolioCoin) return null;
    const { id: portfolioCoinId, name: portfolioCoinName } = portfolioCoin;
    const defaultCoinState = {
      portfolioId,
      coinId: portfolioCoinId,
      coinName: portfolioCoinName,
      holdings: 0,
    };
    setPortfolioCoins((prevState) => {
      if (
        prevState !== null &&
        Array.isArray(prevState) &&
        prevState.some((coin) => coin.coinId !== portfolioCoinId)
      ) {
        const nextCoins = [...prevState, { ...defaultCoinState }];
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
        return [{ ...defaultCoinState }];
      }
    });
    const payload = convertCamelCaseToSnakeCase(defaultCoinState);
    const { data: portfolioCoinsData, error } = await supabaseClient
      .from("portfolio_coins")
      .insert(payload);
    await getPortfolioCoins();
    return portfolioCoinsData;
  };

  useEffect(() => {
    getPortfolioCoins();
  }, []);

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
    getPortfolioCoins,
  };
}
