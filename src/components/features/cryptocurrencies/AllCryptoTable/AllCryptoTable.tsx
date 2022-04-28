import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useCrypto } from '../../../../../hooks/useCrypto';
import Image from 'next/image';
import { Coin } from '../../../../../types/crypto';
import { CryptoTableContainer } from '../../../core/CryptoTableContainer/CryptoTableContainer';
import NextLink from 'next/link';
import { BsStarFill, BsStar } from 'react-icons/bs';

export const AllCryptoTable = () => {
  const { data: cryptocurrencies, error } = useCrypto();

  return (
    <CryptoTableContainer m="3rem auto 3rem auto">
      <Table
        display={['block', 'block', 'block', 'block', 'table']}
        maxWidth={{ base: 'max-content', md: 'container.xl' }}
        margin="0 auto"
        overflowX="auto"
        whiteSpace="nowrap"
        fontSize={{ base: 'sm', md: 'md' }}
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
          {cryptocurrencies?.map((coin: Coin, index: string) => {
            return (
              <Tr key={coin.id}>
                <Td>{index + 1}</Td>
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
                  <Td _hover={{ cursor: 'pointer' }}>{coin.name}</Td>
                </NextLink>
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
                    coin.price_change_percentage_24h > 0 ? '#60AD65' : '#E53E3E'
                  }
                >
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </Td>
                <Td>${coin.total_volume.toLocaleString()}</Td>
                <Td>${coin.market_cap.toLocaleString()}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </CryptoTableContainer>
  );
};
