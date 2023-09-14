import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  useColorModeValue,
  Skeleton,
  Flex,
} from "@chakra-ui/react";
import { useCrypto } from "../../../../../hooks/useCrypto";
import Image from "next/image";
import { Coin } from "../../../../../types/crypto";
import { Card } from "../../../core/Card/Card";
import NextLink from "next/link";
import { BsStarFill, BsStar } from "react-icons/bs";
import { AllCoinsSection } from "../AllCoinsSection/AllCoinsSection";
import { TablePaginationActions } from "../TablePaginationActions/TablePaginationActions";
import { Search } from "../../../core/Search/Search";
import { useState } from "react";

export const AllCoinsTable = () => {
  const {
    data: cryptocurrencies,
    filteredCoins,
    isLoading,
    isError,
    onChange,
  } = useCrypto();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const tableRowHoverBgColor = useColorModeValue("gray.100", "gray.700");

  const onPageChange = (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const filteredAndPaginatedCoins =
    rowsPerPage > 0
      ? filteredCoins?.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      : filteredCoins;

  return (
    <AllCoinsSection maxHeight="170vh">
      <Card
        m="3rem auto 3rem auto"
        justifyContent="start"
        alignItems="center"
        p="1rem"
      >
        <Flex maxWidth={{ base: "container.xs", md: "container.xl" }}>
          <Search
            placeholder="Search a coin"
            onChange={onChange}
            w={{ base: "100%", md: "33%" }}
          />
        </Flex>
      </Card>
      <Card m="3rem auto 3rem auto" flexDir="column">
        <Table
          display={["block", "block", "block", "table", "table"]}
          maxWidth={{ base: "max-content", md: "container.xl" }}
          margin="0 auto 1rem auto"
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
              <Tr>
                <Td>
                  <Skeleton noOfLines={10} />
                </Td>
              </Tr>
            ) : (
              filteredAndPaginatedCoins?.map((coin: Coin) => {
                const marketCapRankWithinTopTen = coin?.market_cap_rank <= 10;
                return marketCapRankWithinTopTen ? (
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
                  </NextLink>
                ) : (
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
            )}
          </Tbody>
        </Table>
        <TablePaginationActions
          count={cryptocurrencies?.length}
          page={page}
          onPageChange={onPageChange}
          rowsPerPage={rowsPerPage}
        />
      </Card>
    </AllCoinsSection>
  );
};
