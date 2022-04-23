import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useCrypto } from '../../../../../hooks/useCrypto';
import Image from 'next/image';
import { Coin } from '../../../../../types/crypto';
import { Icon } from '@chakra-ui/react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import { useState } from 'react';

export const AllCryptoTable = () => {
  const { data: cryptocurrencies, error } = useCrypto();
  const [favorites, setFavorites] = useState([]);

  // const addFavorite = (coin: Coin, index: number) => {
  //   let array = favorites;
  //   let addArray = true;
  //   array.map((coins: Coin[], key: number) => {
  //     if (coins[index] === key) {
  //       array.splice(key, 1);
  //       addArray = false;
  //     }
  //   });
  // };

  return (
    <Table>
      <Thead>
        <Tr>
          <Th></Th>
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
              <Td>
                {favorites ? (
                  <Icon
                    color="#ffcd3c"
                    as={BsStarFill}
                    w={6}
                    h={6}
                    _hover={{ cursor: 'pointer' }}
                    // onClick={addFavorite(coin, index)}
                  />
                ) : (
                  <Icon
                    as={BsStar}
                    w={6}
                    h={6}
                    _hover={{ cursor: 'pointer' }}
                    // onClick={addFavorite(coin, index)}
                  />
                )}
              </Td>
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
              <Td>{coin.name}</Td>
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
  );
};
