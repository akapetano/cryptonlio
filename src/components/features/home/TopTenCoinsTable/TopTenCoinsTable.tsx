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
import Image from "next/image";
import { Coin, NewCoin } from "../../../../../types/crypto";
import NextLink from "next/link";
import { TopTenCoinsSection } from "../TopTenCoinsSection/TopTenCoinsSection";
import { useTopTenCoins } from "../../../../../hooks/useTopTenCoins";

function getSlug(name: string) {
  switch (name) {
    case "USDC":
      return "usd-coin";
    case "Tether USDt":
      return "tether";
    default:
      return name;
  }
}

export const TopTenCoinsTable = () => {
  const { topTenCoins, isLoading } = useTopTenCoins();
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
              topTenCoins.map((coin: NewCoin) => {
                const priceChangePercentage24h = parseFloat(
                  coin?.priceChangePercentage24h?.slice(0, -1)
                );

                const slug = getSlug(coin?.name)?.toLowerCase();

                return (
                  <Tr key={coin.symbol} _hover={{ bg: tableRowHoverBgColor }}>
                    <Td>{coin.marketCapRank}</Td>
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

                    <NextLink href={`/cryptocurrencies/${slug}`} passHref>
                      <Td _hover={{ cursor: "pointer" }}>{coin.name}</Td>
                    </NextLink>

                    <Td>{coin.symbol.toUpperCase()}</Td>
                    <Td>{coin.currentPrice}</Td>
                    <Td
                      color={
                        priceChangePercentage24h > 0 ? "#60AD65" : "#E53E3E"
                      }
                    >
                      {coin.priceChangePercentage24h}
                    </Td>
                    <Td>{coin.totalVolume.toLocaleString()}</Td>
                    <Td>{coin.marketCap.toLocaleString()}</Td>
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
