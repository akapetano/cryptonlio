import { Card } from "../../../core/Card/Card";
import { Icon, Flex, useDisclosure, Button, Box } from "@chakra-ui/react";
import { BiBookAdd } from "react-icons/bi";
import { ChangeEvent, useEffect } from "react";
import { PortfolioCoinList } from "../PortfolioCoinList/PortfolioCoinList";
import { usePortfolio } from "../../../../../hooks/usePortfolio";
import { PortfolioEmptyState } from "../PortfolioEmptyState/PortfolioEmptyState";
import { AddPortfolioModal } from "./AddPortfolioModal/AddPortfolioModal";
import { PortfolioStats } from "./PortfolioStats/PortfolioStats";

export const PortfoliosList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    portfolioName,
    setPortfolioName,
    portfolioList,
    setPortfolioList,
    onCreatePortfolio,
    onDeletePortfolio,
    getPortfolios,
    activePortfolio,
    handleActivePortfolioChange,
    onAddCoinToPortfolio,
    activePortfolioCoins,
  } = usePortfolio({ onClose });

  function handleChange(event: ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    setPortfolioName(eventTarget.value);
  }

  return (
    <Box mt="2rem">
      <Flex
        flexDir={{ base: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ md: "flex-start" }}
      >
        <PortfolioStats />
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
              portfolioName={portfolioName}
              setPortfolioName={setPortfolioName}
              portfolioList={portfolioList}
              setPortfolioList={setPortfolioList}
              onDeletePortfolio={onDeletePortfolio}
              onCreatePortfolio={onCreatePortfolio}
              onAddPortfolioModalClose={onClose}
              onAddPortfolioModalOpen={onOpen}
              addPortfolioModalIsOpen={isOpen}
              activePortfolio={activePortfolio}
              handleActivePortfolioChange={handleActivePortfolioChange}
              onAddCoinToPortfolio={onAddCoinToPortfolio}
              activePortfolioCoins={activePortfolioCoins}
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
