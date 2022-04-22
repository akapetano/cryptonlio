import { Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { useCrypto } from '../../../../../hooks/useCrypto';
import Image from 'next/image';
import { Coin } from '../../../../../types/crypto';

export const CryptoTable = () => {
  const { data: cryptocurrencies, error } = useCrypto();

  return (
    <Table>
      <Thead>
        <Tr>
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
        {cryptocurrencies?.map((coin: Coin) => {
          console.log(coin);
          return (
            <Tr key={coin.id}>
              <Td>
                <Image
                  loader={() => coin.image}
                  src={coin.image}
                  alt={coin.name}
                  height="30px"
                  width="30px"
                />
              </Td>
              <Td>{coin.name}</Td>
              <Td>{coin.symbol}</Td>
              <Td>${coin.current_price.toFixed(2)}</Td>
              <Td>{coin.price_change_percentage_24h.toFixed(2)}%</Td>
              <Td>${coin.total_volume.toLocaleString()}</Td>
              <Td>${coin.market_cap.toLocaleString()}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
