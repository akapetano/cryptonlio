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
} from "@chakra-ui/react";
import Image from "next/image";
import { useCrypto } from "../../../../../hooks/useCrypto";
import { PortfolioCoin, Coin } from "../../../../../types/crypto";

interface IPortfolioCoinsTableProps extends TableProps {
  portfolioCoinsId: string[];
}

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
      maxWidth={{ base: "max-content", md: "container.xl" }}
      margin="0 auto 1rem auto"
      mt="2rem"
      overflowX="auto"
      whiteSpace="nowrap"
      fontSize={{ base: "sm", md: "md" }}
      {...restProps}
    >
      <Thead>
        <Tr>
          <Th>#</Th>
          <Th>Logo</Th>
          <Th>Name</Th>
          <Th>Symbol</Th>
          <Th>Price</Th>
          <Th>24h</Th>
          <Th>Volume</Th>
          <Th>Market Cap</Th>
          <Th>Holdings</Th>
        </Tr>
      </Thead>
      <Tbody>
        {portfolioCoins?.map((coin: Coin) => {
          return (
            <NextLink
              key={coin.id}
              href={`/cryptocurrencies/${coin.id}`}
              passHref
            >
              <Tr
                key={coin.id}
                _hover={{ bg: tableRowHoverBgColor, cursor: "pointer" }}
              >
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

                <Td>{coin.name}</Td>

                <Td>{coin.symbol.toUpperCase()}</Td>
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
              </Tr>
            </NextLink>
          );
        })}
      </Tbody>
    </Table>
  );
};
