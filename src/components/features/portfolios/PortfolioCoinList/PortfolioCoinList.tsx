import { Flex, Button, useDisclosure } from "@chakra-ui/react";
import { useCrypto } from "../../../../../hooks/useCrypto";
import { PortfolioCoinsTable } from "../PortfolioCoinsTable/PortfolioCoinsTable";
import { BiCoin } from "react-icons/bi";
import { MouseEvent, useState } from "react";
import { AddPortfolioModal } from "../PortfoliosList/AddPortfolioModal/AddPortfolioModal";
import { ChangeEvent } from "react";
import { AddCoinModal } from "./AddCoinModal/AddCoinModal";
import { Portfolio } from "../../../../../types/portfolio";
import { PortfolioMenu } from "./PortfolioMenu/PortfolioMenu";
import { Coin, PortfolioCoin } from "../../../../../types/crypto";
import { SetStateAction } from "react";
import { Dispatch } from "react";

interface IPortfolioCoinListProps {
  portfolioList: Portfolio[] | null;
  setPortfolioList: Dispatch<SetStateAction<Portfolio[] | null>>;
  onAddPortfolioModalClose: () => void;
  onAddPortfolioModalOpen: () => void;
  onCreatePortfolio: () => void;
  addPortfolioModalIsOpen: boolean;
}

export const PortfolioCoinList = ({
  portfolioList,
  setPortfolioList,
  onAddPortfolioModalClose,
  onAddPortfolioModalOpen,
  onCreatePortfolio,
  addPortfolioModalIsOpen,
}: IPortfolioCoinListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    filteredCoins,
    search,
    onChange,
    data,
    portfolioCoins,
    onAddCoinToPortfolio,
  } = useCrypto();

  const [portfolioName, setPortfolioName] = useState("");
  const [activePortfolio, setActivePortfolio] = useState<
    Portfolio | null | undefined
  >(
    portfolioList &&
      portfolioList.length &&
      portfolioList[portfolioList.length - 1]
      ? portfolioList[portfolioList.length - 1]
      : null
  );

  function handlePortfolioNameChange(event: ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    setPortfolioName(eventTarget.value);
  }

  function handleActivePortfolioChange(event: MouseEvent<HTMLButtonElement>) {
    const eventTarget = event.target as HTMLButtonElement;
    const newActivePortfolio =
      portfolioList &&
      portfolioList.find(
        (portfolio) => portfolio.portfolioName === eventTarget.innerText
      );
    setActivePortfolio(newActivePortfolio);
  }

  return (
    <>
      <Flex flexDir="column" w="100%" overflowX="auto">
        <Flex
          flexDir={{ base: "column", md: "row" }}
          w="100%"
          gap="5rem"
          justifyContent="space-between"
          alignItems="center"
        >
          <PortfolioMenu
            activePortfolio={activePortfolio}
            portfolioList={portfolioList}
            isOpen={isOpen}
            handleActivePortfolioChange={handleActivePortfolioChange}
            onAddPortfolioModalOpen={onAddPortfolioModalOpen}
          />
          <Button
            leftIcon={<BiCoin />}
            variant="primary"
            onClick={onOpen}
            px="1rem"
          >
            Add New Coin
          </Button>
        </Flex>

        <AddPortfolioModal
          portfolioName={portfolioName}
          handleChange={handlePortfolioNameChange}
          onCreatePortfolio={onCreatePortfolio}
          onClose={onAddPortfolioModalClose}
          isOpen={addPortfolioModalIsOpen}
        />

        <AddCoinModal
          filteredCoins={filteredCoins}
          search={search}
          isOpen={isOpen}
          onClose={onClose}
          onChange={onChange}
          onAddCoinToPortfolio={onAddCoinToPortfolio}
        />

        <PortfolioCoinsTable portfolioCoins={portfolioCoins} />
      </Flex>
    </>
  );
};
