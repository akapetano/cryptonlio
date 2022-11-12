import NextLink from "next/link";
import {
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
  Skeleton,
  useColorModeValue,
  TableProps,
  Text,
  Flex,
  MenuButton,
  Menu,
  MenuList,
  Icon,
  MenuItem,
} from "@chakra-ui/react";
import Image from "next/image";
import { useCrypto } from "../../../../../hooks/useCrypto";
import { PortfolioCoin, Coin } from "../../../../../types/crypto";
import { BsThreeDotsVertical } from "react-icons/bs";

interface IPortfolioCoinsTableProps extends TableProps {
  portfolioCoinsId: string[];
}

const coinAmount = 20;

export const PortfolioCoinsTable = ({
  portfolioCoinsId,
  ...restProps
}: IPortfolioCoinsTableProps) => {
  const tableRowHoverBgColor = useColorModeValue("gray.100", "gray.700");
  const { data } = useCrypto();

  const portfolioCoins = data?.filter(
    (coin: Coin) => portfolioCoinsId?.indexOf(coin.id) > -1
  );
  return (
    <Table
      display={["block", "block", "block", "table", "table"]}
      margin="0 auto 1rem auto"
      mt="2rem"
      overflowX="auto"
      fontSize={{ base: "sm", md: "md" }}
      {...restProps}
    >
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Logo</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>24h</Th>
          <Th>Volume</Th>
          <Th>Market Cap</Th>
          <Th>Holdings</Th>
          <Th>PNL</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {portfolioCoins?.map((coin: Coin) => {
          const holdings = coin.current_price * coinAmount;

          return (
            <Tr key={coin.id} _hover={{ bg: tableRowHoverBgColor }}>
              <Td>{coin.market_cap_rank}</Td>
              <Td>
                <Image
                  loader={() => coin.image}
                  src={coin.image}
                  alt={coin.name}
                  height="30px"
                  width="30px"
                  unoptimized
                />
              </Td>
              <NextLink href={`/cryptocurrencies/${coin.id}`} passHref>
                <Td
                  cursor="pointer"
                  display="flex"
                  flexDir="column"
                  justifyContent="center"
                  alignItems="center"
                  gap="0.2rem"
                  className="group"
                >
                  <Text _groupHover={{ textColor: "brand.100" }}>
                    {coin.name}
                  </Text>
                  <Text
                    textColor="gray.400"
                    _groupHover={{ textColor: "gray.500" }}
                  >
                    {coin.symbol.toUpperCase()}
                  </Text>
                </Td>
              </NextLink>
              <Td fontStyle="bold">
                $
                {coin.current_price > 1
                  ? coin.current_price.toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  : coin.current_price.toLocaleString(undefined, {
                      minimumFractionDigits: 6,
                      maximumFractionDigits: 6,
                    })}
              </Td>
              <Td
                color={
                  coin.price_change_percentage_24h > 0 ? "#60AD65" : "#E53E3E"
                }
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </Td>
              <Td>${coin.total_volume.toLocaleString()}</Td>
              <Td>${coin.market_cap.toLocaleString()}</Td>
              <Td display="flex" flexDir="column">
                <span>
                  $
                  {holdings.toLocaleString(undefined, {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
                <Flex gap="0.2rem">
                  <span>{coinAmount}</span>
                  <span>{coin.symbol.toUpperCase()}</span>
                </Flex>
              </Td>
              <Td>
                <Flex>
                  <span>+$240.67</span>
                </Flex>
              </Td>
              <Td>
                <Menu>
                  <MenuButton>
                    <Icon as={BsThreeDotsVertical} />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Add Transaction</MenuItem>
                    <MenuItem>View Transactions</MenuItem>
                    <MenuItem>Details</MenuItem>
                  </MenuList>
                </Menu>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
