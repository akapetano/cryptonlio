import {
  Flex,
  Text,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Divider,
  Container,
  Icon,
  MenuDivider,
  Badge,
} from "@chakra-ui/react";
import Image from "next/image";
import { useCrypto } from "../../../../../hooks/useCrypto";
import { Coin, PortfolioCoin } from "../../../../../types/crypto";
import { Search } from "../../../core/Search/Search";
import { PortfolioCoinsTable } from "../PortfolioCoinsTable/PortfolioCoinsTable";
import { BiCoin, BiChevronDown, BiBookAdd } from "react-icons/bi";
import { useState } from "react";
import { AddPortfolioModal } from "../PortfoliosList/AddPortfolioModal/AddPortfolioModal";
import { ChangeEvent } from "react";

interface IPortfolioCoinListProps {
  portfolioList: string[];
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
  const { data, filteredCoins, search, onChange, addCoinToPortfolio } =
    useCrypto();

  const [portfolioName, setPortfolioName] = useState("");

  function handleChange(event: ChangeEvent) {
    const eventTarget = event.target as HTMLInputElement;
    setPortfolioName(eventTarget.value);
  }

  const portfolioCoins: PortfolioCoin[] = [];

  const onAddCoinToPortfolio = (coinId: string) => {
    const portfolioCoin = data.filter((coin: Coin) => {
      if (coin.id === coinId) {
        return coin.id;
      }
    });
    portfolioCoins.push(portfolioCoin);
    console.log(portfolioCoins);
    return portfolioCoin;
  };
  return (
    <>
      {portfolioList.map((portfolio) => (
        <Flex key={portfolio} flexDir="column" w="100%" overflowX="auto">
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
                  <Text>{portfolio}</Text>
                  <Icon as={BiChevronDown} />
                </Flex>
              </MenuButton>
              <MenuList p="0">
                <MenuItem
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  gap="0.5rem"
                  py="0.7rem"
                >
                  <Text>{portfolio}</Text>
                  <Badge variant="solid" colorScheme="green" rounded="xl">
                    Main
                  </Badge>
                </MenuItem>
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
            handleChange={handleChange}
            onCreatePortfolio={onCreatePortfolio}
            onClose={onAddPortfolioModalClose}
            isOpen={addPortfolioModalIsOpen}
          />

          <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalBody p="0.5rem">
                <Search
                  placeholder="Search a coin"
                  onChange={onChange}
                  w="full"
                  inputSize="lg"
                />
                {search ? (
                  <Menu>
                    <Divider mt="1rem" />
                    {filteredCoins.map((coin: Coin) => (
                      <MenuItem
                        key={coin.id}
                        _hover={{ bg: "brand.500", color: "white" }}
                        m={0}
                        p="1rem"
                        display="flex"
                        gap="1rem"
                        alignItems="center"
                        onClick={() => {
                          const portfolioCoin = onAddCoinToPortfolio(coin.id);
                          portfolioCoins.push(portfolioCoin);
                          onClose();
                        }}
                      >
                        <Image
                          loader={() => coin.image}
                          src={coin.image}
                          alt={coin.name}
                          height="30px"
                          width="30px"
                          unoptimized
                        />
                        <Text>{coin.name}</Text>
                      </MenuItem>
                    ))}
                  </Menu>
                ) : null}
              </ModalBody>
            </ModalContent>
          </Modal>
          {/* {portfolioCoins.length ? ( */}
          <PortfolioCoinsTable
            portfolioCoinsId={["bitcoin", "ethereum", "cardano"]}
          />
          {/* ) : null} */}
        </Flex>
      ))}
    </>
  );
};
