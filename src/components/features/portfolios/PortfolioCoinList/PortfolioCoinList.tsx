import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  MenuDivider,
  Badge,
} from "@chakra-ui/react";
import { useCrypto } from "../../../../../hooks/useCrypto";

import { PortfolioCoinsTable } from "../PortfolioCoinsTable/PortfolioCoinsTable";
import { BiCoin, BiChevronDown, BiChevronUp, BiBookAdd } from "react-icons/bi";
import { useState } from "react";
import { AddPortfolioModal } from "../PortfoliosList/AddPortfolioModal/AddPortfolioModal";
import { ChangeEvent } from "react";
import { AddCoinModal } from "./AddCoinModal/AddCoinModal";
import { Portfolio } from "../../../../../types/portfolio";

interface IPortfolioCoinListProps {
  portfolioList: Portfolio[] | null;
  onAddPortfolioModalClose: () => void;
  onAddPortfolioModalOpen: () => void;
  onCreatePortfolio: () => void;
  addPortfolioModalIsOpen: boolean;
}

export const PortfolioCoinList = ({
  portfolioList,
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
    onAddCoinToPortfolio,
    portfolioCoins,
  } = useCrypto();

  const [portfolioName, setPortfolioName] = useState("");

  function handlePortfolioNameChange(event: ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    setPortfolioName(eventTarget.value);
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
          <Menu>
            <MenuButton fontWeight={"bold"} fontSize="lg">
              <Flex
                gap="0.2rem"
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Text>
                  {portfolioList &&
                  portfolioList.length &&
                  portfolioList[portfolioList.length - 1]
                    ? portfolioList[portfolioList.length - 1]?.portfolioName
                    : null}
                </Text>
                <Icon as={isOpen ? BiChevronUp : BiChevronDown} />
              </Flex>
            </MenuButton>
            <MenuList p="0">
              {portfolioList && portfolioList.length
                ? portfolioList.map(({ portfolioName }, index) => (
                    <MenuItem
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      gap="0.5rem"
                      py="0.7rem"
                      key={portfolioName + index}
                    >
                      <Text>{portfolioName}</Text>
                      {portfolioList &&
                      portfolioList.length &&
                      portfolioList.length - 1 === index ? (
                        <Badge variant="solid" colorScheme="green" rounded="xl">
                          Main
                        </Badge>
                      ) : null}
                    </MenuItem>
                  ))
                : null}
              <MenuDivider m="0" />
              <MenuItem
                py="1rem"
                _hover={{
                  bg: "brand.200",
                  roundedBottom: "md",
                  textColor: "#fff",
                }}
                onClick={onAddPortfolioModalOpen}
              >
                <Flex
                  gap={"0.5rem"}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={BiBookAdd} />
                  <Text>Add Portfolio</Text>
                </Flex>
              </MenuItem>
            </MenuList>
          </Menu>
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
