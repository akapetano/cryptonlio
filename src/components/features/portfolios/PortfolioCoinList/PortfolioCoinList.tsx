import { Flex, Button, useDisclosure } from "@chakra-ui/react";
import { useCrypto } from "../../../../../hooks/useCrypto";
import { PortfolioCoinsTable } from "../PortfolioCoinsTable/PortfolioCoinsTable";
import { BiCoin, BiTrash } from "react-icons/bi";
import { MouseEvent, useEffect, useState } from "react";
import { AddPortfolioModal } from "../PortfoliosList/AddPortfolioModal/AddPortfolioModal";
import { ChangeEvent } from "react";
import { AddCoinModal } from "./AddCoinModal/AddCoinModal";
import { Portfolio } from "../../../../../types/portfolio";
import { PortfolioMenu } from "./PortfolioMenu/PortfolioMenu";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import { DeletePortfolioModal } from "./DeletePortfolioModal/DeletePortfolioModal";

interface IPortfolioCoinListProps {
  portfolioName: string;
  setPortfolioName: Dispatch<SetStateAction<string>>;
  portfolioList: Portfolio[] | null;
  setPortfolioList: Dispatch<SetStateAction<Portfolio[] | null>>;
  onAddPortfolioModalClose: () => void;
  onAddPortfolioModalOpen: () => void;
  onDeletePortfolio: (
    portfolioIdToUpdate: string,
    onClose: () => void
  ) => Promise<any[] | undefined>;
  onCreatePortfolio: () => void;
  addPortfolioModalIsOpen: boolean;
}

export const PortfolioCoinList = ({
  portfolioName,
  setPortfolioName,
  portfolioList,
  onAddPortfolioModalClose,
  onAddPortfolioModalOpen,
  onDeletePortfolio,
  onCreatePortfolio,
  addPortfolioModalIsOpen,
}: IPortfolioCoinListProps) => {
  const {
    isOpen: addCoinModalIsOpen,
    onOpen: onAddCoinModalOpen,
    onClose: onAddCoinModalClose,
  } = useDisclosure();
  const {
    isOpen: deletePortfolioModalIsOpen,
    onOpen: onDeletePortfolioModalOpen,
    onClose: onDeletePortfolioModalClose,
  } = useDisclosure();

  const [activePortfolio, setActivePortfolio] = useState<
    Portfolio | null | undefined
  >(
    portfolioList &&
      portfolioList.length &&
      portfolioList[portfolioList.length - 1]
      ? portfolioList[portfolioList.length - 1]
      : null
  );
  const {
    filteredCoins,
    search,
    onChange,
    portfolioCoins,
    onAddCoinToPortfolio,
    getPortfolioCoins,
  } = useCrypto(activePortfolio?.portfolioId ?? null, true);

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
            isOpen={addCoinModalIsOpen}
            handleActivePortfolioChange={handleActivePortfolioChange}
            onAddPortfolioModalOpen={onAddPortfolioModalOpen}
          />
          <Flex gap="0.5rem">
            <Button
              leftIcon={<BiTrash />}
              variant="danger-secondary"
              onClick={onDeletePortfolioModalOpen}
              px="1rem"
            >
              Delete Portfolio
            </Button>
            <Button
              leftIcon={<BiCoin />}
              variant="primary"
              onClick={onAddCoinModalOpen}
              px="1rem"
            >
              Add New Coin
            </Button>
          </Flex>
        </Flex>

        <AddPortfolioModal
          portfolioName={portfolioName}
          handleChange={handlePortfolioNameChange}
          onCreatePortfolio={onCreatePortfolio}
          onClose={onAddPortfolioModalClose}
          isOpen={addPortfolioModalIsOpen}
        />

        {activePortfolio &&
        activePortfolio?.portfolioId &&
        activePortfolio?.portfolioName ? (
          <DeletePortfolioModal
            portfolioId={activePortfolio?.portfolioId}
            portfolioName={activePortfolio?.portfolioName}
            onDeletePortfolio={onDeletePortfolio}
            onClose={onDeletePortfolioModalClose}
            isOpen={deletePortfolioModalIsOpen}
          />
        ) : null}

        <AddCoinModal
          filteredCoins={filteredCoins}
          search={search}
          isOpen={addCoinModalIsOpen}
          onClose={onAddCoinModalClose}
          onChange={onChange}
          onAddCoinToPortfolio={onAddCoinToPortfolio}
        />

        {portfolioCoins && portfolioCoins.length ? (
          <PortfolioCoinsTable portfolioCoins={portfolioCoins} />
        ) : null}
      </Flex>
    </>
  );
};
