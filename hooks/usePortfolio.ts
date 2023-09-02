import { useState } from "react";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";
import { Portfolio } from "../types/portfolio";
import { useToast } from "@chakra-ui/react";
import { useUser, User } from "@supabase/auth-helpers-react";
import { convertSnakeCaseToCamelCase } from "../utils";

interface IUsePortfolioProps {
  onClose: () => void;
}

export function usePortfolio({ onClose }: IUsePortfolioProps) {
  const toast = useToast();
  const { user } = useUser();
  const [isLoading, setIsLoading] = useState(false);
  const [portfolioName, setPortfolioName] = useState("");
  const [portfolioList, setPortfolioList] = useState<Portfolio[] | null>(null);

  async function getPortfolios() {
    try {
      const { data, error } = await supabaseClient
        .from("portfolios")
        .select("*")
        .eq("deleted", false);

      if (data && Array.isArray(data)) {
        const convertedData = data.map((item) =>
          convertSnakeCaseToCamelCase(item)
        ) as Portfolio[];
        setPortfolioList(convertedData);
      }
      console.log({ data, error });
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

  return {
    portfolioName,
    setPortfolioName,
    portfolioList,
    setPortfolioList,
    onDeletePortfolio,
    onCreatePortfolio,
    getPortfolios,
  };
}
