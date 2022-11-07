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
  MenuItem,
  Divider,
} from "@chakra-ui/react";
import Image from "next/image";
import { useCrypto } from "../../../../../hooks/useCrypto";
import { Coin, PortfolioCoin } from "../../../../../types/crypto";
import { Search } from "../../../core/Search/Search";
import { PortfolioCoinsTable } from "../PortfolioCoinsTable/PortfolioCoinsTable";

interface IPortfolioCoinListProps {
  portfolioList: string[];
}

export const PortfolioCoinList = ({
  portfolioList,
}: IPortfolioCoinListProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, filteredCoins, search, onChange, addCoinToPortfolio } =
    useCrypto();

  const portfolioCoins: PortfolioCoin[] = [];

  const onAddCoinToPortfolio = (coinId: string) => {
    const portfolioCoin = data.filter((coin: Coin) => coin.id === coinId);
    console.log(portfolioCoin);
    return portfolioCoin;
  };
  return (
    <>
      {portfolioList.map((portfolio) => (
        <Box key={portfolio}>
          <Flex justifyContent="space-between" alignItems="center">
            <Text fontSize="xl">Portfolio Name: {portfolio}</Text>
            <Button variant="primary" onClick={onOpen}>
              Add New Coin
            </Button>
          </Flex>

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
          {portfolioCoins.length ? (
            <PortfolioCoinsTable portfolioCoins={portfolioCoins} />
          ) : null}
        </Box>
      ))}
    </>
  );
};
