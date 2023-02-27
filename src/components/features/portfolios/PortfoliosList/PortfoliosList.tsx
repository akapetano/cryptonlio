import { Card } from "../../../core/Card/Card";
import {
  Icon,
  Flex,
  useDisclosure,
  Button,
  Box,
  useToast,
} from "@chakra-ui/react";
import { useUser } from "@supabase/auth-helpers-react";
import { BiBookAdd } from "react-icons/bi";
import { ChangeEvent, useState } from "react";
import { PortfolioCoinList } from "../PortfolioCoinList/PortfolioCoinList";
import { usePortfolio } from "../../../../../hooks/usePortfolio";
import { StatCard } from "../StatCard/StatCard";
import { PortfolioEmptyState } from "../PortfolioEmptyState/PortfolioEmptyState";
import { AddPortfolioModal } from "./AddPortfolioModal/AddPortfolioModal";
import { supabaseClient } from "@supabase/auth-helpers-nextjs";

export const PortfoliosList = () => {
  const { user } = useUser();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { portfolioName, setPortfolioName, portfolioList, setPortfolioList } =
    usePortfolio();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  function handleChange(event: ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    setPortfolioName(eventTarget.value);
  }

  const onCreatePortfolio = async () => {
    try {
      setIsLoading(true);

      setPortfolioName(portfolioName === "" ? "My Portfolio" : portfolioName);

      setPortfolioList((prevState) => {
        const name = portfolioName === "" ? "My Portfolio" : portfolioName;
        if (prevState && prevState.length) {
          const nextState = [
            ...prevState,
            { portfolioName: name, portfolioCoins: null },
          ];
          return nextState;
        } else {
          return [{ portfolioName: name, portfolioCoins: [] }];
        }
      });
      const payload = { portfolio_name: portfolioName };
      let { error, status, data } = await supabaseClient
        .from("portfolios")
        .upsert(payload);
      console.log("STATUS", status);
      console.log("DATA", data);
      if (error) throw error;
      onClose();
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
  };

  return (
    <Box mt="2rem">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ md: "flex-start" }}
      >
        <Flex
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "1rem", md: "1rem" }}
          flexBasis="50%"
        >
          <StatCard statTitle="Total Amount" amount={500.0} />
          <StatCard
            statTitle="24h Portfolio Change"
            amount={10}
            percentage={2.56}
          />
          <StatCard
            statTitle="Total Profit Gain"
            amount={1000}
            percentage={100}
          />
        </Flex>
        {portfolioList && portfolioList.length !== 0 ? (
          <Button
            variant="primary"
            leftIcon={<Icon as={BiBookAdd} />}
            onClick={onOpen}
            mt={{ base: "3rem", md: "0" }}
            p="0.5rem 1rem"
          >
            Create Portfolio
          </Button>
        ) : null}
      </Flex>
      <Card p="1rem" mt="1rem" mb="20rem">
        <Flex
          justifyContent="center"
          alignItems="center"
          gap="1rem"
          flexDirection="column"
        >
          {portfolioList && portfolioList.length !== 0 ? (
            <PortfolioCoinList
              portfolioList={portfolioList}
              onCreatePortfolio={onCreatePortfolio}
              onAddPortfolioModalClose={onClose}
              onAddPortfolioModalOpen={onOpen}
              addPortfolioModalIsOpen={isOpen}
            />
          ) : (
            <PortfolioEmptyState
              portfolioList={portfolioList}
              onOpen={onOpen}
              message="You currently don't have a porfolio."
            />
          )}
        </Flex>
      </Card>
      <AddPortfolioModal
        portfolioName={portfolioName}
        handleChange={handleChange}
        onCreatePortfolio={onCreatePortfolio}
        onClose={onClose}
        isOpen={isOpen}
      />
    </Box>
  );
};
