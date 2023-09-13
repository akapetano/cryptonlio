import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Skeleton,
  Heading,
} from "@chakra-ui/react";
import { Card } from "../../../core/Card/Card";
import { useCrypto } from "../../../../../hooks/useCrypto";
import Image from "next/image";
import { Coin } from "../../../../../types/crypto";
import NextLink from "next/link";
import { TopTenCoinsSection } from "../TopTenCoinsSection/TopTenCoinsSection";
import { Session } from "@supabase/supabase-js";

interface ITopTenCoinsTableProps {
  session: Session | null;
}

export const TopTenCoinsTable = ({ session }: ITopTenCoinsTableProps) => {
  const { topTenCoins, isLoading, isError } = useCrypto();
  const tableRowHoverBgColor = useColorModeValue("gray.100", "gray.700");

  return (
    <TopTenCoinsSection>
      <Heading
        id="top-10-coins"
        as="h2"
        textAlign="center"
        fontSize={{ base: "3xl", md: "4xl" }}
      >
        Top 10 Coins by <br /> Market Cap
      </Heading>
      <Card m="3rem auto 3rem auto">
        <Table
          display={["block", "block", "block", "table", "table"]}
          maxWidth={{ base: "max-content", md: "container.xl" }}
          margin="0 auto"
          overflowX="auto"
          whiteSpace="nowrap"
          fontSize={{ base: "sm", md: "md" }}
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
            </Tr>
          </Thead>
          <Tbody>
            {isLoading ? (
              <Skeleton noOfLines={10} as="tr" />
            ) : topTenCoins ? (
              topTenCoins.map((coin: Coin) => {
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
                      <Td _hover={{ cursor: "pointer" }}>{coin.name}</Td>
                    </NextLink>

                    <Td>{coin.symbol.toUpperCase()}</Td>
                    <Td>
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
                        coin.price_change_percentage_24h > 0
                          ? "#60AD65"
                          : "#E53E3E"
                      }
                    >
                      {coin.price_change_percentage_24h.toFixed(2)}%
                    </Td>
                    <Td>${coin.total_volume.toLocaleString()}</Td>
                    <Td>${coin.market_cap.toLocaleString()}</Td>
                  </Tr>
                );
              })
            ) : null}
          </Tbody>
        </Table>
      </Card>
    </TopTenCoinsSection>
  );
};
