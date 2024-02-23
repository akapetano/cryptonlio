import { useEffect, useState, MouseEvent, useCallback } from "react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { Portfolio } from "../types/portfolio";
import { useToast } from "@chakra-ui/react";
import { useUser, User } from "@supabase/auth-helpers-react";
import {
  convertSnakeCaseToCamelCase,
  convertCamelCaseToSnakeCase,
} from "../utils";
import { PortfolioCoin } from "../types/crypto";

interface IUsePortfolioProps {
  onClose: () => void;
}

export function usePortfolio({ onClose }: IUsePortfolioProps) {
  const toast = useToast();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioList, setPortfolioList] = useState<Portfolio[] | null>(null);
  console.log({ portfolioList });
  const [activePortfolio, setActivePortfolio] = useState<Portfolio | null>(
    portfolioList &&
      portfolioList.length &&
      portfolioList[portfolioList.length - 1]
      ? portfolioList[portfolioList.length - 1]
      : null
  );
  const [activePortfolioCoins, setActivePortfolioCoins] = useState<
    PortfolioCoin[] | null
  >(null);

  async function handleActivePortfolioChange(
    event: MouseEvent<HTMLButtonElement>
  ) {
    const eventTarget = event.target as HTMLButtonElement;
    const newActivePortfolio =
      portfolioList &&
      portfolioList.find(
        (portfolio) => portfolio.portfolioName === eventTarget.innerText
      );
    if (typeof newActivePortfolio === "undefined") {
      setActivePortfolio(null);
    } else {
      setActivePortfolio(newActivePortfolio);
      await getPortfolioCoins(newActivePortfolio?.portfolioId);
    }
  }

  const getPortfolios = useCallback(async () => {
    try {
      const { data, error } = await supabaseClient
        .from("portfolios")
        .select("*")
        .eq("deleted", false)
        .eq("user_id", user?.id);

      if (data && Array.isArray(data)) {
        const convertedData = data.map((item) =>
          convertSnakeCaseToCamelCase(item)
        ) as Portfolio[];
        setPortfolioList(convertedData);
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
  }, [toast, user?.id]);

  async function onDeletePortfolio(
    portfolioIdToUpdate: string,
    onClose: () => void
  ) {
    try {
      const { data, error } = await supabaseClient
        .from("portfolios")
        .update({ deleted: true })
        .eq("portfolio_id", portfolioIdToUpdate);

      if (error) {
        throw new Error(error.message);
      }
      onClose();
      toast({
        position: "bottom",
        title: "Success!",
        description: `You've successfully deleted the portfolio.`,
        status: "success",
        duration: 4000,
        isClosable: true,
      });

      await getPortfolios();
      return data;
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
        onClose();
      }
    }
  }

  async function onCreatePortfolio() {
    try {
      setIsLoading(true);

      const name = portfolioName === "" ? "My Portfolio" : portfolioName;
      setPortfolioList((prevState) => {
        if (prevState && Array.isArray(prevState) && prevState.length) {
          const sameName = prevState.some(
            (portfolio) => portfolio?.portfolioName === portfolioName
          );
          if (sameName) {
            toast({
              position: "bottom",
              title: "Duplicate portfolio name",
              description: `"${portfolioName}" already present, please provide a new name`,
              status: "error",
              duration: 4000,
              isClosable: true,
            });
            return [...prevState];
          } else {
            const nextState = [
              ...prevState,
              { portfolioName: name, portfolioCoins: null },
            ];
            onClose();
            return nextState;
          }
        } else {
          onClose();
          return [{ portfolioName: name, portfolioCoins: [] }];
        }
      });
      if (!user) throw new Error("User is not available");
      const payload = {
        user_id: user.id,
        portfolio_name: name,
      };
      const { data, error } = await supabaseClient
        .from("portfolios")
        .insert(payload);

      await getPortfolios();
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
      onClose();
    }
  }

  async function getPortfolioCoins(portfolioId?: string) {
    if (!portfolioId) return null;
    try {
      const { data, error } = await supabaseClient
        .from("portfolio_coins")
        .select("*")
        .eq("deleted", false)
        .eq("portfolio_id", portfolioId)
        .eq("user_id", user?.id);

      if (data && Array.isArray(data)) {
        const convertedData = data.map((item) =>
          convertSnakeCaseToCamelCase(item)
        ) as PortfolioCoin[];
        setActivePortfolioCoins(convertedData);
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

  const onAddCoinToPortfolio = async (
    coinId: string,
    coinName: string,
    portfolioId: string
  ) => {
    if (!coinId && !coinName) return null;

    const defaultCoinState = {
      userId: user?.id,
      portfolioId,
      coinId,
      coinName,
      holdings: 0,
    };
    setActivePortfolioCoins((prevState) => {
      if (
        prevState !== null &&
        Array.isArray(prevState) &&
        prevState.some((coin) => coin.coinId !== coinId)
      ) {
        const nextCoins = [...prevState, { ...defaultCoinState }];
        return nextCoins;
      } else if (
        prevState !== null &&
        Array.isArray(prevState) &&
        prevState.some((coin) => coin.coinId === coinId)
      ) {
        toast({
          position: "bottom",
          title: "Duplicate coin",
          description: `${
            coinId.slice(0, 1).toUpperCase() + coinId.slice(1)
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
    await getPortfolioCoins(portfolioId);
    return portfolioCoinsData;
  };

  useEffect(() => {
    getPortfolios();
  }, [getPortfolios]);

  return {
    portfolioName,
    setPortfolioName,
    portfolioList,
    setPortfolioList,
    onDeletePortfolio,
    onCreatePortfolio,
    getPortfolios,
    activePortfolio,
    handleActivePortfolioChange,
    onAddCoinToPortfolio,
    activePortfolioCoins,
  };
}
